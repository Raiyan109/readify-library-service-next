"use client"

import { createContext, useEffect, useState } from "react";

export const BooksContext = createContext()

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([])


    const getAllBooks = async () => {
        try {
            const res = await fetch('https://readify-library-service-next.vercel.app/api/books', {
                cache: 'no-store'
            })
            const result = res.json()
            setBooks(result)
            if (!res.ok) {
                throw new Error('Failed to fetch books')
            }

            // return res.json()
        } catch (error) {
            console.log('error loading books', error);
        }
    }



    console.log(books, 'from books context');
    console.log(getAllBooks(), 'from books context');
    return (
        <BooksContext.Provider value={{ books }}>
            {children}
        </BooksContext.Provider>
    )
}