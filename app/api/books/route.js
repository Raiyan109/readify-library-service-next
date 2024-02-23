import { connectDB } from "@/lib/mongodb"
import Book from "@/models/bookModel"
import { NextResponse } from "next/server"
import { writeFile } from 'fs/promises'

export async function GET() {
    await connectDB()
    const books = await Book.find()
    console.log(books);
    return NextResponse.json({ books })
}

export async function POST(req) {
    try {
        const { name, cover,
            desc, author, genre, pages,
            isRented,
            stock, rentPrice, sellPrice, sold
        } = await req.json()
        console.log(name, cover);
        // const data = await req.formData()
        // const file = data.get('file')
        // if (!file) {
        //     return NextResponse.json({
        //         message: 'No image found'
        //     }, {
        //         status: 500
        //     })
        // }

        // const byteData = await file.arrayBuffer()
        // const buffer = Buffer.from(byteData)
        // const path = `/public/${file.name}`
        // const image = await writeFile(path, buffer)
        // console.log(image);
        await connectDB()
        const book = await Book.create({
            name, cover,
            desc, author, genre, pages,
            isRented,
            stock, rentPrice, sellPrice, sold
        })

        return NextResponse.json({ message: "Book added successfully", data: book })
    } catch (error) {
        return NextResponse.json({
            message: 'An error occured while adding the book.'
        }, {
            status: 500
        })
    }
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id")
    await connectDB()
    await Book.findByIdAndDelete(id)
    return NextResponse.json({ message: "Book deleted" }, { status: 200 })
}