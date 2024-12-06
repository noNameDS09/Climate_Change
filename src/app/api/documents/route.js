import { MongoClient } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017'; // Use your MongoDB URI
const DB_NAME = 'test';
const COLLECTION_NAME = 'trial';

export const GET = async (req) => {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);
    const documents = await collection.find({}).toArray();
    return new Response(JSON.stringify(documents), { status: 200 });

  } catch (error) {
    console.error('Error fetching documents:', error);
    return new Response('Error fetching documents', { status: 500 });
  } finally {
    await client.close();
  }
};
