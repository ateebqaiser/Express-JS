import mongoose from "mongoose";

const bookSchema=new mongoose.Schema(
    {
        author:String,
        tile:String,
        year:Number
    },{versionkey:false}
)

export const book=mongoose.model("Book",bookSchema)