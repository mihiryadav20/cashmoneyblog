// src/app/api/db-status/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function GET() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    return NextResponse.json(
      { error: 'MongoDB URI not configured' }, 
      { status: 500 }
    );
  }

  try {
    const client = new MongoClient(uri, {
      // Comprehensive connection options
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      retryWrites: true,
      retryReads: true,
      tls: true,
    });

    // Attempt to connect
    await client.connect();

    // Get database name
    const dbName = new URL(uri).pathname.substring(1);
    const db = client.db(dbName);

    // Try a simple database operation
    await db.command({ ping: 1 });

    // Close the connection
    await client.close();

    return NextResponse.json({
      status: 'success',
      message: 'Database connection successful',
      database: dbName,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Detailed Database Connection Error:', error);
    
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Failed to connect to database',
        error: error instanceof Error ? error.message : 'Unknown error',
        errorDetails: error
      }, 
      { status: 500 }
    );
  }
}