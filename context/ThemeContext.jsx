"use client"

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")

    useEffect(() => {
        localStorage.setItem(
            "theme", theme
        )
    }, [theme])

    const changeTheme = (e) => {
        const nextTheme = e.target.value
        if (nextTheme) {
            setTheme(nextTheme);
        } else {
            setTheme((prev) => (prev === "light" ? "dark" : "light"));
        }

    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}