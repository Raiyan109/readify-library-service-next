"use client"

import { createContext } from "react";

export const BooksContext = createContext()

export const BooksProvider = ({ children }) => {

    return (
        <BooksContext.Provider value={{ test: 'test' }}>
            {children}
        </BooksContext.Provider>
    )
}