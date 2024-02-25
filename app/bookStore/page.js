import Image from 'next/image'
import { BookStoreHome } from '../components/BookStoreHome'
import openBook from '@/public/images/open-book.jpg'



export default async function BookStore() {
    return (
        <div>
            <div className="hero bg-base-200 shadow-xl gap-6">
                <div className="hero-content flex-col lg:flex-row-reverse gap-36">
                    <Image src={openBook} alt='Book' width={300} height={300} style={{ objectFit: 'cover' }} />
                    <div>
                        <h1 className="text-5xl font-bold">Hello, Reader! </h1>
                        <p className="py-6">Selection of the best books, just for you</p>
                        <button className="btn btn-primary">Show Latest</button>
                    </div>
                </div>
            </div>
            <BookStoreHome />
        </div>
    )
}
