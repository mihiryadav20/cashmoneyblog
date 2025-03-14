// src/lib/db.ts
import { MongoClient, Db, Collection, Document, WithId, OptionalId } from 'mongodb';

class DatabaseService {
  private static instance: DatabaseService;
  private client: MongoClient;
  private dbName: string;
  private connectionUri: string;
  private connected: boolean = false;

  private constructor() {
    // Ensure MongoDB URI is set
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI must be defined in environment variables');
    }

    this.connectionUri = uri;
    this.dbName = process.env.DB_NAME || 'default_database';
    
    // Initialize client
    this.client = new MongoClient(this.connectionUri);
  }

  // Singleton pattern to ensure only one instance
  public static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  // Connect to the database
  public async connect(): Promise<Db> {
    try {
      // Only connect if not already connected
      if (!this.connected) {
        await this.client.connect();
        this.connected = true;
        console.log('Successfully connected to MongoDB');
      }
      
      // Return the database instance
      return this.client.db(this.dbName);
    } catch (error) {
      console.error('MongoDB connection error:', error);
      this.connected = false;
      throw error;
    }
  }

  // Get a specific collection
  public async getCollection(collectionName: string): Promise<Collection> {
    const db = await this.connect();
    return db.collection(collectionName);
  }

  // Close the database connection
  public async close(): Promise<void> {
    try {
      await this.client.close();
      this.connected = false;
      console.log('MongoDB connection closed');
    } catch (error) {
      console.error('Error closing MongoDB connection:', error);
    }
  }

  // Generic create operation
  public async create<T extends Document>(
    collectionName: string, 
    document: OptionalId<T>
  ): Promise<WithId<T>> {
    const collection = await this.getCollection(collectionName);
    const result = await collection.insertOne(document);
    return { ...document, _id: result.insertedId } as WithId<T>;
  }

  // Generic find operation
  public async find<T extends Document>(
    collectionName: string, 
    query: Partial<T> = {}
  ): Promise<WithId<T>[]> {
    const collection = await this.getCollection(collectionName);
    return collection.find<WithId<T>>(query).toArray();
  }

  // Generic update operation
  public async update<T extends Document>(
    collectionName: string, 
    filter: Partial<T>, 
    update: Partial<T>
  ): Promise<any> {
    const collection = await this.getCollection(collectionName);
    return collection.updateOne(filter, { $set: update });
  }

  // Generic delete operation
  public async delete<T extends Document>(
    collectionName: string, 
    filter: Partial<T>
  ): Promise<any> {
    const collection = await this.getCollection(collectionName);
    return collection.deleteOne(filter);
  }

  // Utility for pagination
  public async findWithPagination<T extends Document>(
    collectionName: string, 
    query: Partial<T> = {}, 
    options: {
      page?: number, 
      limit?: number, 
      sort?: Record<string, 1 | -1>
    } = {}
  ): Promise<{
    data: WithId<T>[],
    total: number,
    page: number,
    totalPages: number
  }> {
    const collection = await this.getCollection(collectionName);
    const page = options.page || 1;
    const limit = options.limit || 10;
    const skip = (page - 1) * limit;

    const cursor = collection.find<WithId<T>>(query)
      .skip(skip)
      .limit(limit);

    if (options.sort) {
      cursor.sort(options.sort);
    }

    const [data, total] = await Promise.all([
      cursor.toArray(),
      collection.countDocuments(query)
    ]);

    return {
      data,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    };
  }
}

// Export the singleton instance
const db = DatabaseService.getInstance();
export default db;

// Optional: Type definitions for common database operations
export interface DatabaseOperations<T extends Document> {
  create(document: OptionalId<T>): Promise<WithId<T>>;
  find(query?: Partial<T>): Promise<WithId<T>[]>;
  update(filter: Partial<T>, update: Partial<T>): Promise<any>;
  delete(filter: Partial<T>): Promise<any>;
}