import { MongoClient } from "mongodb";

const uri="mongodb://localhost:27017"
const client= new MongoClient(uri)

const database_name = "Library"
const collection_name = "Books"

async function readOperations(){
    await client.connect()
    console.log("Mongo db connected successfully")

    const database = client.db(database_name)
    const table_collection = database.collection(collection_name)

    //Read all documents
    const allBooks= await table_collection.find().toArray()
    console.log("All books ",allBooks)

    //Read document with filter
    const filterBooks= await table_collection.find(
        {author: "John Elia"}
    ).toArray()
    console.log("Books by John Elia",filterBooks)

    //Read specific fields only
    const projectionBooks=await table_collection.find({},{projection:{year:1, _id: 0}}).toArray()
    console.log("Books by year",projectionBooks)

    //Sorting
    const asc_SortBooks=await table_collection.find().sort({year:1}).toArray()
    const desc_SortBooks=await table_collection.find().sort({year:-1}).toArray()
    console.log("Sorted Books by ascending year",asc_SortBooks)
    console.log("Sorted Books by descending year",desc_SortBooks)

    //Limit number of results
    const limitBooks=await table_collection.find().limit(2).toArray()
    console.log("First two Books",limitBooks)

    //Single document
    const singleBook= await table_collection.findOne(
        {author: "John Elia"}
    )
    console.log("Only one Book by John Elia",singleBook)

}

readOperations()