"use client"
import React, { useState } from 'react'

export const FilterComponent = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    return (
        <div className="drawer drawer-end p-5 z-10">
            <input id="my-drawer2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer2" className="btn btn-primary drawer-button">
                    All Filters
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-2">
                    {/* Sidebar content here */}
                    <h1 className="p-5 text-2xl font-bold">All Filters</h1>

                    <a href="#category" className="bg-secondary hover:bg-accent text-black font-semibold text-lg rounded-lg w-full px-2 py-3">
                        Category
                    </a>
                    <a href="#category" className="bg-secondary hover:bg-accent text-black font-semibold text-lg rounded-lg w-full px-2 py-3">
                        My Library
                    </a>
                    <a href="#category" className="bg-secondary hover:bg-accent text-black font-semibold text-lg rounded-lg w-full px-2 py-3">
                        Download                            </a>
                    <a href="#category" className="bg-secondary hover:bg-accent text-black font-semibold text-lg rounded-lg w-full px-2 py-3">
                        Favorite
                    </a>
                </div>
            </div>
        </div>
    )
}
