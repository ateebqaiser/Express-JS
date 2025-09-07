import { MongoClient } from "mongodb";

const uri="mongodb://localhost:27017"
const client= new MongoClient(uri)

const database_name = "Library"
const collection_name = "Books"

async function updateOperations(){
    await client.connect()
    console.log("Mongo db connected successfully")

    const database = client.db(database_name)
    const table_collection = database.collection(collection_name)

    //Update single document
    const singleUpdate=await table_collection.updateOne(
        {title:"Atomic Habits"},
        {$set: {year :2024}}
    )
    console.log("Atomic Habits year updated : ",singleUpdate)

    //Multiple Update
    const multipleUpdate=await table_collection.updateOne(
        {title:"Ghuman"},
        {$set: {category:"sad"}}
    )
    console.log("New Field added : ",multipleUpdate)

    //Increment a field
    const incUpdate=await table_collection.updateOne(
        {title:"Ghuman"},
        {$inc: {year:1}}
    )
    console.log("Increment in year : ",incUpdate)

    //Rename field
    const renameUpdate=await table_collection.updateOne(
        {title:"Ghuman"},
        {$rename: {year:"published_year"}}
    )
    console.log("Year name changed into published year : ",renameUpdate)

    //Upsert (update if exists, otherwise insert new)
    const upsertExample = await table_collection.updateOne(
            { title: "Deep Work" },
            {
                $set: {author: "Cal Newport",year: 2016,category: "Productivity",},
            },
            { upsert: true }
        )
        console.log("Upsert Operation:", upsertExample);

}

updateOperations()