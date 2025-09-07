import { MongoClient } from "mongodb";

const uri="mongodb://localhost:27017"
const client= new  MongoClient(uri)

const database_name ="Library"
const collection_name = "Books"

async function access_data(){
    await client.connect()
    const database = client.db(database_name)
    const table = database.collection(collection_name)
    console.log("Mongo.db connected successfully")
}

access_data()