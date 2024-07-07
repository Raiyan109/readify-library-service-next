'use client'

import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"

export const SearchComponent = ({ books }) => {
    const [query, setQuery] = useState('');
    //Our search filter function
    const searchFilter = (array) => {
        return array.filter(
            (el) => el.name.toLowerCase().includes(query)
        )
    }

    //Applying our search filter function to our array of countries recieved from the API
    const filtered = searchFilter(books)

    //Handling the input on our search bar
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                className="px-3 py-2 font-semibold bg-accent text-neutral w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex gap-5 items-center justify-between rounded-md"
                onClick={() => document.getElementById('my_modal_2').showModal()}>
                Search Books <FaSearch />
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box space-y-3">
                    <h3 className="font-bold text-lg">Search books here</h3>
                    <input type="text" placeholder="Type here"
                        onChange={handleChange}
                        className="input input-bordered input-primary w-full max-w-xs" />
                    <div className="">
                        {
                            query &&
                            <div className="   space-y-3">
                                {
                                    query && filtered.map((book) => (
                                        <div key={book._id} className="border border-primary/75 hover:border-primary hover:bg-secondary hover:text-neutral font-bold cursor-pointer  rounded-2xl px-3 py-3 text-lg">
                                            <h1 className="">{book.name}</h1>
                                            <Link href={`bookDetails/${book?._id}`}><button className="btn btn-xs btn-primary">Details</button></Link>
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    )
}
