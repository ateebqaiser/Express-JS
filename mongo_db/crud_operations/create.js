import { MongoClient } from "mongodb";

const uri="mongodb://localhost:27017"
const client= new MongoClient(uri)

const database_name = "Library"
const collection_name = "Books"

async function createOperations(){

    await client.connect()
    console.log("Mongo db connected successfully")
    
    //Database and Collection Creation
    const create_database= client.db(database_name)
    console.log(`Dataabase' "${database_name}" 'created successfully`)
    const create_collection= create_database.collection(collection_name)
    console.log(`Collection' "${collection_name}" 'created successfully`)

    //Insert a single document
    const singlebook={
        title:"Atomic Habits",
        author:"James",
        year:2018
    }
    const singleResult= await create_collection.insertOne(singlebook)
    console.log("Single book Inserted",singleResult)

    //Insert multiple document
    const multiplebook=[
        {title:"Ghuman",author:"John Elia",year:2004},
        {title:"Shikwa",author:"John Elia",year:2006}
    ]
    const multipleResult=await create_collection.insertMany(multiplebook)
    console.log("Multiple books Inserted",multipleResult)
}

createOperations()