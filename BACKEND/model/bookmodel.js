import mongoose from "mongoose"

//schema declaration
const bookSchema = new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    publishyear:{type:Number,required:true},
    timestamps:Boolean
})

//model connection
const bookModel = mongoose.model("books", bookSchema)

export default bookModel