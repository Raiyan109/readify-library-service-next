import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const { name, email, password } = await req.json()

        console.log(name, email, password);

        return NextResponse.json({ message: 'User signed up successfully' })
    } catch (error) {
        return NextResponse.json({
            message: 'An error occured while registering the user.'
        }, {
            status: 500
        })
    }
}