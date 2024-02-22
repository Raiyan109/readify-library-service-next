"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"


export default function EditBookForm({ id, name }) {

    const [file, setFile] = useState(null)
    const [error, setError] = useState('')
    const router = useRouter()



    const handleSubmit = async (e) => {
        e.preventDefault()


    }
    return (
        <div className="p-12 flex justify-center items-center">
            <div className="border-primary border p-20">
                <h1 className="text-center text-2xl font-bold mb-12">Edit Book</h1>
                <form onSubmit={handleSubmit} className="space-y-8">

                    <div>
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Book Name" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div>
                        <button className="btn btn-primary w-full text-lg" type="submit">Edit</button>
                    </div>
                </form>
                {error && <p className="text-accent">{error}</p>}
            </div>
        </div>
    )
}