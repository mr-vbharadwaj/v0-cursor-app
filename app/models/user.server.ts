import { ObjectId } from "mongodb";
import { connect } from "~/db/conn.server";

export interface User {
    _id?: ObjectId;
    username: string;
    password: string;
    role: 'faculty' | 'student' | 'admin';
    email: string;
}

export async function createUser(user: User){
    const client = await connect();
    const db = client.db('VRS'); // Replace with your actual database name
    const result = await db.collection('users').insertOne(user);
    return result.insertedId;
}

export async function getUserByUsername(username: string){
    const client = await connect();
    const db = client.db('VRS');
    return db.collection('users').findOne({username});
}