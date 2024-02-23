import mongoose, { models } from "mongoose";

const Schema = mongoose.Schema

const bookSchema = new Schema({
    cover: {
        type: String,
    },
    name: {
        type: String,
        // required: true,
    },
    desc: {
        type: String,
        // required: true,
    },
    author: {
        type: String,
        // required: true,
    },
    genre: {
        type: String,
        // required: true,
    },
    pages: {
        type: Number,
        // required: true,
    },
    isRented: {
        type: Boolean,
        // required: true,
    },
    stock: {
        type: Number,
        // required: true,
    },
    rentPrice: {
        type: Number,
        // required: true,
    },
    sellPrice: {
        type: Number,
        // required: true,
    },
    sold: {
        type: Number,
        // required: true,
    },

}, { timestamps: true })

const Book = models.Book || mongoose.model('Book', bookSchema)

export default Book;