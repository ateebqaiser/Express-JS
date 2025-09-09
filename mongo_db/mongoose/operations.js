import {book} from "./bookSchema.js";
import "./connection_file.js"; 

//Create Book
const createBook = await book.create({
    title:"Atomic Habits",
    author:"James Clear",
    year:2018
})
console.log("New book created:",createBook);

//Read Book
const readBook = await book.find()
console.log("Books",readBook);

//Update Book
const updateBook = await book.updateOne(
    {title:"Atomic Habits",year:2018},
    {$set:{year:2024}}
)
console.log("Book updated:",updateBook);

//Delete Book
const deleteBook = await book.deleteOne(
    {title:"Atomic Habits",year:2024}
)
console.log("Book Deleted:",deleteBook);