import { connectDB } from "@/lib/mongodb"
import Book from "@/models/bookModel"
import { NextResponse } from "next/server"

export async function PUT(req, { params }) {
    const { id } = params
    const { newName: name } = await req.json()
    await connectDB()
    await Book.findByIdAndUpdate(id, {
        name
    })
    return NextResponse.json({ message: "Book updated" }, { status: 200 })
}

export async function GET(req, { params }) {
    const { id } = params
    await connectDB()
    const book = await Book.findOne({ _id: id })
    return NextResponse.json({ book }, { status: 200 })
}

