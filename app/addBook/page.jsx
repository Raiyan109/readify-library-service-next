"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"


export default function AddBook() {
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name) {
            setError('All fields are necessary')
            return
        }
        try {
            const res = await fetch('api/books', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name })
            })

            if (res.ok) {
                const form = e.target
                form.reset()
                router.push('/bookStore')
            }
            else {
                console.log('Book adding failed');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="p-12 flex justify-center items-center">
            <div>
                <h1 className="text-center text-2xl font-bold mb-12">Add Book</h1>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Book Name" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div>
                        <button className="btn btn-primary" type="submit">Add</button>
                    </div>
                </form>
                {error && <p className="text-accent">{error}</p>}
            </div>
        </div>
    )
}