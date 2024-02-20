import { connectDB } from "@/lib/mongodb"
import User from "@/models/userModel"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'

export async function POST(req) {
    try {
        const { name, email, password } = await req.json()
        const hashedPassword = await bcrypt.hash(password, 10)
        await connectDB()
        await User.create({ name, email, password: hashedPassword })

        return NextResponse.json({ message: 'User signed up successfully' })
    } catch (error) {
        return NextResponse.json({
            message: 'An error occured while registering the user.'
        }, {
            status: 500
        })
    }
}