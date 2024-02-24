"use client"
import logo from '@/public/images/readify-logo.png'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'
import { ThemeBtn } from './ThemeBtn'

export const Navbar = () => {
    const { changeTheme } = useContext(ThemeContext);
    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between">
                <a className="text-xl flex flex-col justify-start items-start">
                    <Image src={logo} height={90} width={90} />
                    <p className='text-primary text-xs'>Library Services</p>
                </a>
                <div className=" ">
                    <ThemeBtn handleOnClick={changeTheme} />
                </div>
            </div>

        </div>
    )
}
