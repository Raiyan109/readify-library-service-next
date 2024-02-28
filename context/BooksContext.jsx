"use client"

import { createContext, useState } from "react";

export const BooksContext = createContext()

export const BooksProvider = ({ children }) => {
    const [cartData, setCartData] = useState([])

    return (
        <BooksContext.Provider value={{ cartData, setCartData }}>
            {children}
        </BooksContext.Provider>
    )
}