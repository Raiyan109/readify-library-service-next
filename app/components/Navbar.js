"use client"
import logo from '@/public/images/logo.png'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'
import { ThemeBtn } from './ThemeBtn'
import { BooksContext } from '@/context/BooksContext'

export const Navbar = () => {
    // const { changeTheme } = useContext(ThemeContext);
    // const { cartData } = useContext(BooksContext)
    console.log(cartData);
    return (
        <div>
            <div className="navbar bg-base-100 flex justify-end overflow-hidden z-10">
                {/* <a href='/' className="text-xl flex flex-col justify-start items-start">
                    <Image src={logo} height={80} width={80} alt='logo' />

                </a> */}
                <div className='flex justify-center items-center'>
                    <div className=" ">
                        <ThemeBtn handleOnClick={changeTheme} />
                    </div>
                    <div className="dropdown dropdown-end mb-20">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{cartData && cartData.length > 0 ? cartData : 0}</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
