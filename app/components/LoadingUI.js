import React from 'react'

export const LoadingUI = () => {
    return (
        <div className='py-24 flex justify-center items-center mx-auto h-screen w-full bg-neutral bg-opacity-70 backdrop-blur-sm'>
            <div className="container">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        </div>
    )
}
