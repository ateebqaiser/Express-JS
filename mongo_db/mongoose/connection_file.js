import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/Library"

// await mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
await mongoose.connect(uri)

console.log("Mongo Db connected successfully")


