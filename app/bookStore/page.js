import React from 'react'
import { getAllBooks } from '../lib/fake-data'
import { Books } from '../components/Books'


export default function BookStore() {
    const books = getAllBooks()
    return (
        <div className='flex justify-center items-center flex-col py-16'>
            <h1 className='text-center text-4xl pb-20 text-primary'>All Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {books.map((book) => (
                    <Books key={book.id} book={book} />
                ))}
            </div>
        </div>
    )
}
