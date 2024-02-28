"use client"
import { BooksContext } from "@/context/BooksContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FaFacebook, FaFacebookF, FaHeart, FaLinkedin, FaStar, FaStarAndCrescent, FaStarHalf, FaStarHalfAlt, FaTwitter } from "react-icons/fa";

export default function BookDetailsComponent({ book }) {

    const { cartData, setCartData } = useContext(BooksContext)

    const router = useRouter()


    const handleCart = (e, reason) => {
        e.preventDefault()

        const newData = { ...book, type: reason }
        setCartData(newData)
        console.log(cartData);
    }
    return (
        <div>
            {/* <!-- component --> */}
            <section className="text-primary body-font overflow-hidden">
                <div className="p-8">
                    <button className="btn btn-primary" onClick={() => router.back()}>Back</button>
                </div>
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <Image className="object-cover object-center rounded border border-primary" src={book?.cover} alt={book.name} width={300} height={300} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-primary tracking-widest mb-2">{book.author}</h2>
                            <h1 className="text-primary text-3xl title-font font-medium mb-1">{book.name}</h1>
                            {/* <div className="flex mb-4">
                                <span className="flex items-center">
                                    <FaStar className="text-accent" />
                                    <FaStar className="text-accent" />
                                    <FaStar className="text-accent" />
                                    <FaStar className="text-accent" />
                                    <FaStarHalfAlt className="text-accent" />

                                    <span className="text-primary ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                    <a className="text-primary">
                                        <FaFacebookF />
                                    </a>
                                    <a className="ml-2 text-primary">
                                        <FaTwitter />
                                    </a>
                                    <a className="ml-2 text-primary">
                                        <FaLinkedin />
                                    </a>
                                </span>
                            </div> */}
                            <p className="leading-relaxed text-primary/60">{book.desc}</p>
                            <div className="flex mt-6 items-center gap-10 pb-5 border-b-2 border-primary mb-5 text-primary">
                                <div className="flex flex-col items-center gap-3 border-r-2 border-secondary pr-8">
                                    <h1 className="text-xl">{book.pages}</h1>
                                    <h1>Pages</h1>
                                </div>
                                <div className="flex flex-col items-center gap-3 border-r-2 border-secondary pr-8">
                                    <h1 className="text-xl">{book.sellPrice}</h1>
                                    <h1>Sell Price</h1>
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <h1 className="text-xl">{book.rentPrice}</h1>
                                    <h1>Rent Price</h1>
                                </div>
                                {/* <div className="flex">
                                    <span className="mr-3">Color</span>
                                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-accent rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select className="rounded border appearance-none border-primary py-2 focus:outline-none focus:border-accent text-primary pl-3 pr-10">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-primary pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div> */}
                            </div>
                            <div className="flex justify-between">
                                <span className="title-font font-medium text-2xl text-secondary">$58.00</span>
                                <div className="flex justify-between items-center gap-5">
                                    <button className="flex ml-auto text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded" onClick={(e) => handleCart(e, 'Buy')}>Buy</button>
                                    <button className="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded" onClick={(e) => handleCart(e, 'Rent')}>Rent</button>
                                </div>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-primary ml-4">
                                    <FaHeart />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}