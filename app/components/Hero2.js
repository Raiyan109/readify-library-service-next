import Image from 'next/image';
import bg from '@/public/images/c.jpg'
import { FaGrinHearts, FaSearch } from "react-icons/fa";
import { LuSparkle } from "react-icons/lu";
import { HiOutlineSparkles, HiMiniArrowUpRight } from "react-icons/hi2";
import ButtonWrapper from './ButtonWrapper';
import heroCardImg from "@/public/images/hero-reading.svg";
import heroCardImg2 from "@/public/images/hero-img2.jpg";
import heroCardImg3 from "@/public/images/hero-img3.jpg";
import doodle from "@/public/images/pink_doodle-removebg-preview.png";
import Link from 'next/link';
import { SearchComponent } from './SearchComponent';

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

export const Hero2 = async () => {
    const books = await getAllBooks()
    return (
        <div className='min-h-[calc(100%-10rem)]'>
            {/* flex justify-center items-center */}
            <div className="pb-48 pt-12 px-5 md:px-48 min-h-96">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Enlighten section */}
                    <div className="p-3 md:p-7 rounded-[12px] flex flex-col gap-16 col-span-2 row-span-1 lg:row-span-2 order-1 lg:order-3">
                        <Image src={doodle} alt='spiral' width={200} height={200} className=' object-contain object-center hidden md:block' />
                        <div className='space-y-2'>
                            <div className='flex items-center gap-32'>
                                <h1 className='text-white text-6xl font-extralight max-w-[380px] leading-tight'>Enlighten Yourself With Books</h1>
                                <HiOutlineSparkles size={70} color='white' className='hidden lg:block' />
                            </div>
                            <p className='text-lg max-w-sm leading-tight'>Search our catalogs and enjoy maintainable classic books</p>
                        </div>
                        <Link href='/bookStore'>
                            <button className="px-5 py-4 font-semibold bg-accent text-neutral text-xl w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex gap-5 items-center justify-between rounded-md">
                                Browse Catalogs <HiMiniArrowUpRight size={30} />
                            </button>
                        </Link>
                    </div>

                    {/* Discover section */}
                    <div className="p-10 md:p-7 rounded-[12px] flex flex-col gap-12 lg:col-span-1 col-span-2 row-span-1 bg-neutral text-primary order-2 lg:order-1">
                        <div>
                            <h1 className="text-5xl font-bold leading-tight">Discover </h1>
                            <h1 className="text-5xl font-bold leading-tight"> The Joy of<br />Reading</h1>
                        </div>
                        <SearchComponent books={books?.books} />
                    </div>

                    {/* Connect Easily section */}
                    <div className="p-10 md:p-7 rounded-[12px] flex flex-col gap-12 lg:col-span-1 col-span-2 row-span-1 bg-accent text-[#09090F] order-3 lg:order-2">
                        <div className='flex items-center justify-center md:justify-start gap-5'>
                            <LuSparkle size={40} />
                            <h1 className="text-4xl md:text-3xl font-bold">Connect Easily</h1>
                        </div>
                        <Image src={heroCardImg} alt='heroImage' width={100} height={100} className='w-full h-32 object-contain object-center md:flex justify-center items-center hidden' />
                    </div>

                    {/* Last section */}
                    <div className="p-10 md:p-7 rounded-[12px] flex flex-col md:flex-row justify-between gap-4 md:gap-20 col-span-2 relative h-96 w-full order-4 lg:order-4" style={{
                        backgroundImage: `url("${heroCardImg3.src}")`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <h1 className='text-accent text-5xl font-semibold absolute bottom-10 max-w-xs hidden md:block'>Unlock the Power of Knowledge</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
