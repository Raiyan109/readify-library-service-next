"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"


export default function AddBook() {
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name || !file) {
            setError('All fields are necessary');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('file', file);

            const res = await fetch('http://localhost:3000/api/books', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push('/bookStore');
            } else {
                console.log('Book adding failed');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="p-8">
                <button className="btn btn-primary" onClick={() => router.back()}>Back</button>
            </div>
            <div className="p-12 flex justify-center items-center">

                <div>
                    <h1 className="text-center text-2xl font-bold mb-12">Add Book</h1>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <input type="file"
                                name="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                        </div>
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
        </>
    )
}