import { connectDB } from "@/lib/mongodb"
import Book from "@/models/bookModel"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const { name } = await req.json()
        await connectDB()
        await Book.create({ name })

        return NextResponse.json({ message: "Book added successfully" })
    } catch (error) {
        return NextResponse.json({
            message: 'An error occured while adding the book.'
        }, {
            status: 500
        })
    }
}