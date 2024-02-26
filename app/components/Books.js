import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RemoveBtn } from './RemoveBtn'
import placeholder from '@/public/images/place.jpg'

export const Books = ({ name, cover,
    desc, author, genre, pages,
    isRented,
    stock, rentPrice, sellPrice, sold, id }) => {
    console.log(isRented);
    return (
        <div>

            <div className='glass flex flex-col justify-center items-center p-5 rounded-xl space-y-2 relative'>
                <div className=''>
                    <div className="badge badge-secondary absolute left-0 top-1 capitalize text-xs">{genre}</div>
                    <div className={`badge ${isRented === true ? 'badge-secondary' : 'badge-accent'} absolute right-0 top-1 capitalize text-xs`}>{isRented === true ? 'Rented' : 'Not Rented'}</div>
                    <Image src={cover ? cover : placeholder} alt='Book' width={100} height={100} style={{ objectFit: 'cover' }} />
                </div>
                {/* <h1>{book.cover}</h1> */}
                <h1 className='text-primary text-xl'>{name}</h1>
                <h1 className='text-primary text-xl font-bold'>${sellPrice}</h1>
                <div className='flex items-center gap-5'>
                    <Link href={`/bookDetails/${id}`}><button className="btn btn-xs btn-primary">Details</button></Link>
                    <Link href={`/editBook/${id}`}><button className="btn btn-xs btn-primary">Edit</button></Link>
                    <RemoveBtn id={id} />
                </div>
            </div>

        </div>
    )
}
