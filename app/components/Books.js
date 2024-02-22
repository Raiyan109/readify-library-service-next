import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Books = ({ book }) => {
    return (
        <div>
            {/* <Link href={`/${}`}> */}
            <div className='glass flex flex-col justify-center items-center p-5 rounded-xl space-y-9'>
                <Image src={book.cover} width={100} height={100} style={{ objectFit: 'cover' }} />
                <h1>{book.name}</h1>
                <div className='flex items-center gap-5'>
                    <Link href={`/editBook/${book?._id}`}><button className="btn btn-xs btn-primary">Edit</button></Link>
                    <button className="btn btn-xs btn-accent">Delete</button>
                </div>
            </div>
            {/* </Link> */}
        </div>
    )
}
