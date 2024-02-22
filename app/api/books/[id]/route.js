import { connectDB } from "@/lib/mongodb"
import Book from "@/models/bookModel"
import { NextResponse } from "next/server"

export async function GET(req, { params }) {
    const { id } = params
    await connectDB()
    const book = await Book.findOne({ _id: id })
    return NextResponse.json({ book }, { status: 200 })
}