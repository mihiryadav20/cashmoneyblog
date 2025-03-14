// src/lib/dbTypes.ts
import { Db, Collection, Document, WithId, OptionalId } from 'mongodb';

export interface DatabaseServiceMethods {
  connect(): Promise<Db>;
  close(): Promise<void>;
  getCollection(collectionName: string): Promise<Collection>;
  
  create<T extends Document>(
    collectionName: string, 
    document: OptionalId<T>
  ): Promise<WithId<T>>;
  
  find<T extends Document>(
    collectionName: string, 
    query?: Partial<T>
  ): Promise<WithId<T>[]>;
  
  update<T extends Document>(
    collectionName: string, 
    filter: Partial<T>, 
    update: Partial<T>
  ): Promise<any>;
  
  delete<T extends Document>(
    collectionName: string, 
    filter: Partial<T>
  ): Promise<any>;
  
  findWithPagination<T extends Document>(
    collectionName: string, 
    query?: Partial<T>, 
    options?: {
      page?: number, 
      limit?: number, 
      sort?: Record<string, 1 | -1>
    }
  ): Promise<{
    data: WithId<T>[],
    total: number,
    page: number,
    totalPages: number
  }>;

  // Add these methods to the interface
  checkConnection(): Promise<boolean>;
  getConnectionStatus(): string;
}

// Export a single type that includes all methods
export type DatabaseService = DatabaseServiceMethods;