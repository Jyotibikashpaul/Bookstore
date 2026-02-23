import mongoose from "mongoose";

const mongooseUrl = "mongodb://localhost:27017"
const database = "bookstoredata"

//db connect
async function dbconnect() {
    try {
        await mongoose.connect(`${mongooseUrl}/${database}`)
        console.log("db connected");
    } catch (error) {
        console.log("connection error in database");
    }
}

export default dbconnect