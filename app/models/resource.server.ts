import { cli } from "@remix-run/dev";
import { ObjectId } from "mongodb";
import { connect } from "~/db/conn.server";

export interface Resource {
    _id?: ObjectId;
    title: string;
    description: string;
    fileURL: string;
    uploadedBy: ObjectId;
    category: string;
    downloadCount: number;
    createdAt: Date;
    updatedAt: Date;
}

export async function createResource(resource: Resource){
    const client = await connect();
    const db = client.db('VRS');
    const result = await db.collection('resources').insertOne(resource);
    return result.insertedId;
}

export async function getResources() {
    const client = await connect();
    const db = client.db('resources');
    return db.collection('resources').find().toArray();
}

export async function getResourceByID(id: string){
    const client = await connect();
    const db = client.db('resources');
    return db.collection('resources').findOne({ _id: new ObjectId(id)});
}