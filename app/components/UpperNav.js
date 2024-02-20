"use client"
import { FaSearch } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import Link from "next/link";



export const UpperNav = () => {
    return (

        <div className="text-primary flex justify-between text-xs lg:text-sm py-2 px-3">
            <div>
                <h3 className='uppercase'>Contact us on 01617910378</h3>
            </div>
            <div className="flex items-center gap-6">

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}><FaSearch /></button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box space-y-3">
                        <h3 className="font-bold text-lg">Search books here</h3>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                <div className="flex items-center">
                    <Link href='/signup'>
                        <div className="flex items-center gap-1">
                            <MdEdit />
                            <h3>Register</h3>
                        </div>
                    </Link>
                    /
                    <Link href='/login'>
                        <div className="flex items-center gap-1">
                            <IoIosPerson />
                            <h3>Login</h3>
                        </div>
                    </Link>
                </div>
                <div>
                    <h3>Your cart: 0 items - $0.00</h3>
                </div>
            </div>
        </div>

    )
}
