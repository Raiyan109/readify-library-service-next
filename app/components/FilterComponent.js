"use client"
import React, { useState } from 'react'
import { FilterResult } from './FilterResult';

export const FilterComponent = ({ books }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleChange = (event) => {
        console.log(event.target.value);
        setSelectedCategory(event.target.value);
    };

    function filteredData(books, selected) {
        let filteredProducts = books

        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ genre }) =>
                    genre === selected
            )
        }

        return filteredProducts.map(
            ({ name, cover,
                desc, author, genre, pages,
                isRented,
                stock, rentPrice, sellPrice, sold }) => (
                <FilterResult
                    key={Math.random()}
                    name={name} cover={cover} desc={desc} author={author} genre={genre} pages={pages} isRented={isRented} stock={stock} rentPrice={rentPrice} sellPrice={sellPrice} sold={sold}

                />
            )
        )
    }

    const result = filteredData(books, selectedCategory)
    console.log(result);
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

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Programming Languages</span>
                            <input type="radio"
                                onChange={handleChange}
                                name="radio-10"
                                value='Programming Languages'
                                className="radio checked:bg-red-500"
                                checked={selectedCategory === "Programming Languages"} />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Thriller</span>
                            <input type="radio" onChange={handleChange}
                                name="radio-10"
                                value='thriller' className="radio checked:bg-blue-500"
                                checked={selectedCategory === "Thriller"}
                            />
                        </label>
                    </div>

                    <div>
                        {result} {/* Display filtered data */}
                    </div>
                </div>
            </div>
        </div>
    )
}
