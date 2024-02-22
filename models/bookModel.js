import mongoose, { models } from "mongoose";

const Schema = mongoose.Schema

const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: String,
}, { timestamps: true })

const Book = models.Book || mongoose.model('Book', bookSchema)

export default Book;