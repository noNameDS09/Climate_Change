// // src/app/api/documents/route.js
// import { connectToDB } from '@/lib/db'; // MongoDB connection
// import Document from '@/models/Document'; // Mongoose model for documents

// export const GET = async (req) => {
//   try {
//     await connectToDB(); // Connect to the database
//     const documents = await Document.find({}); // Fetch all documents from the "trial" collection
//     console.log('Fetched documents:', documents); // Log documents to the console
//     return new Response(JSON.stringify(documents), { status: 200 });
//   } catch (error) {
//     console.error('Error fetching documents:', error);
//     return new Response('Error fetching documents', { status: 500 });
//   }
// };


// src/app/api/documents/route.js
import { MongoClient } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017'; // Use your MongoDB URI
const DB_NAME = 'test'; // Your database name
const COLLECTION_NAME = 'trial'; // The collection you're querying

// Function to fetch documents from the "trial" collection
export const GET = async (req) => {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect(); // Connect to the MongoDB server
    console.log('Connected to MongoDB');

    // Access the "test" database and the "trial" collection
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Find all documents in the "trial" collection
    const documents = await collection.find({}).toArray();
    
    // console.log('Fetched documents:', documents); // Log the documents
    return new Response(JSON.stringify(documents), { status: 200 });

  } catch (error) {
    console.error('Error fetching documents:', error);
    return new Response('Error fetching documents', { status: 500 });
  } finally {
    await client.close(); // Ensure the MongoDB client is closed after the operation
  }
};
