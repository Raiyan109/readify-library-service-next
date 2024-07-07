import logo from '@/public/images/logo.png'
import { FaSearch } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import Link from "next/link";
import { SearchComponent } from "./SearchComponent";
import Image from "next/image";


const getAllBooks = async () => {
    try {
        const res = await fetch('https://readify-library-service-next.vercel.app/api/books', {
            cache: 'no-store'
        })
        if (!res.ok) {
            throw new Error('Failed to fetch books')
        }

        return res.json()
    } catch (error) {
        console.log('error loading books', error);
    }
}

export const UpperNav = async () => {
    const books = await getAllBooks()
    // console.log(books);
    return (

        <div className="text-primary flex justify-between text-xs lg:text-sm p-5">
            <div>
                <a href='/' className="text-xl flex flex-col justify-start items-start">
                    <Image src={logo} height={80} width={80} alt='logo' />

                </a>
            </div>
            <div className="flex items-center gap-6">

                {/* <SearchComponent books={books?.books} /> */}
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
                {/* <div>
                    <h3>Your cart: 0 items - $0.00</h3>
                </div> */}
            </div>
        </div>

    )
}
