import Image from 'next/image'
import React from 'react'

export const Books = ({ book }) => {
    return (
        <div className='glass flex flex-col justify-center items-center p-5 rounded-xl'>
            <Image src={book.cover} width={100} height={100} style={{ objectFit: 'cover' }} />
            <h1>{book.title}</h1>
        </div>
    )
}
