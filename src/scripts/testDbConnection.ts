// src/scripts/testDbConnection.ts
require('dotenv').config();
import { MongoClient } from 'mongodb';

async function testDatabaseConnection() {
  // Get the connection URI from environment variables
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error('MONGODB_URI is not defined in the environment variables');
    process.exit(1);
  }

  try {
    console.log('Attempting to connect to database...');
    
    // Create a new MongoClient
    const client = new MongoClient(uri);

    // Connect to the MongoDB cluster
    await client.connect();

    // Get the database name from the URI or environment
    const dbName = process.env.DB_NAME || new URL(uri).pathname.substring(1);

    // Access the database
    const database = client.db(dbName);

    // List collections
    const collections = await database.collections();
    
    console.log('Successfully connected to database!');
    console.log('Database Name:', dbName);
    console.log('Available collections:', 
      collections.map(c => c.collectionName)
    );

    // Close the connection
    await client.close();
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

// Run the test
testDatabaseConnection();