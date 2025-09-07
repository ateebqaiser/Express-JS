import { MongoClient } from "mongodb";

const uri="mongodb://localhost:27017"
const client= new MongoClient(uri)

const database_name = "Library"
const collection_name = "Books"

async function deleteOperations(){
    await client.connect()
    console.log("Mongo db connected successfully")

    const database = client.db(database_name)
    const table_collection = database.collection(collection_name)
    
    //Delete One Document
        const deleteOne=await table_collection.deleteOne({ title: "Atomic Habits" });
        console.log("Single Book Deleted:",deleteOne);

    //Delete Multiple Documents
        const deleteManyBooks = await table_collection.deleteMany({ author: "John Elia" });
        console.log("Multiple Books Deleted:",deleteManyBooks);

    //Delete All Documents 
        const deleteAll = await table_collection.deleteMany({});
        console.log("All Books Deleted:",deleteAll);

    //Drop the Collection
        const dropCollection = await table_collection.drop();
        console.log("Books Collection Dropped:",dropCollection);

    //Drop the Entire Database
        const dropDB = await db.dropDatabase();
        console.log("Library Database Dropped:",dropDB);
    
}

deleteOperations();
