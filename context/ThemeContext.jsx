"use client"

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light"); // Set initial theme

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []); // Run once when component mounts to get the theme from localStorage

    const changeTheme = (e) => {
        const nextTheme = e.target.value || (theme === "light" ? "dark" : "light");
        setTheme(nextTheme);
        localStorage.setItem("theme", nextTheme); // Save theme to localStorage
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};