"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"


export default function AddBook() {
    const [cover, setCover] = useState('')
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [pages, setPages] = useState('')
    const [isRented, setIsRented] = useState(false)
    const [stock, setStock] = useState('')
    const [rentPrice, setRentPrice] = useState('')
    const [sellPrice, setSellPrice] = useState('')
    const [sold, setSold] = useState('')
    const [file, setFile] = useState(null)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name) {
            setError('All fields are necessary');
            return;
        }

        try {
            // const formData = new FormData();
            // formData.append('name', name);
            // formData.append('file', file);

            // const res = await fetch('http://localhost:3000/api/books', {
            //     method: 'POST',
            //     body: formData,
            // });
            const res = await fetch('api/books', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, cover,
                    desc,
                    author, genre, pages,
                    isRented,
                    stock, rentPrice, sellPrice, sold
                })
            })
            console.log(name, cover, desc, author, genre, pages, isRented, stock, rentPrice, sellPrice, sold);
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
                    <form onSubmit={handleSubmit} className=" ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* <div>
                            <input type="file"
                                name="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                        </div> */}
                            <div>
                                <input type="text"
                                    value={cover}
                                    onChange={(e) => setCover(e.target.value)}
                                    placeholder="/images/image.jpg" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <input type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Book Name" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <input type="text"
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    placeholder="Description" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <input type="text"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    placeholder="Author" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <input type="text"
                                    value={genre}
                                    onChange={(e) => setGenre(e.target.value)}
                                    placeholder="Genre" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <input type="number"
                                    value={pages}
                                    onChange={(e) => setPages(e.target.value)}
                                    placeholder="Pages" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div className="form-control border border-primary rounded-lg p-1">
                                <label className="label cursor-pointer">
                                    <span className="label-text text-primary font-bold">Is Rented</span>
                                    <input type="checkbox"
                                        value={isRented}
                                        onChange={(e) => setIsRented(!isRented)}
                                        // defaultChecked

                                        className="checkbox checkbox-primary" />
                                </label>
                            </div>
                            <div>
                                <input type="number"
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                    placeholder="Stock" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <input type="number"
                                    value={rentPrice}
                                    onChange={(e) => setRentPrice(e.target.value)}
                                    placeholder="Rent Price" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <input type="number"
                                    value={sellPrice}
                                    onChange={(e) => setSellPrice(e.target.value)}
                                    placeholder="Sell Price" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <input type="number"
                                    value={sold}
                                    onChange={(e) => setSold(e.target.value)}
                                    placeholder="Sold" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <button className="btn btn-primary" type="submit">Add</button>
                            </div>
                        </div>
                    </form>
                    {error && <p className="text-accent">{error}</p>}
                </div>
            </div>
        </>
    )
}