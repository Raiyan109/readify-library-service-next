import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RemoveBtn } from './RemoveBtn'
import placeholder from '@/public/images/place.jpg'

export const Books = ({ book }) => {
    return (
        <div>

            <div className='glass flex flex-col justify-center items-center p-5 rounded-xl space-y-9'>
                {/* <Image src={book.cover ? book.cover : placeholder} alt='Book' width={100} height={100} style={{ objectFit: 'cover' }} /> */}
                <h1>{book.cover}</h1>
                <h1>{book.name}</h1>
                <div className='flex items-center gap-5'>
                    <Link href={`bookDetails/${book?._id}`}><button className="btn btn-xs btn-primary">Details</button></Link>
                    <Link href={`/editBook/${book?._id}`}><button className="btn btn-xs btn-primary">Edit</button></Link>
                    <RemoveBtn id={book?._id} />
                </div>
            </div>

        </div>
    )
}
