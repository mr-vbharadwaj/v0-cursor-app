import { MongoClient } from 'mongodb';

let db: MongoClient;

async function connect() {
    if (db) return db;

    const client = new MongoClient(process.env.MONGODB_URL!);
    await client.connect();
    db = client;
    return db;
}

export { connect };