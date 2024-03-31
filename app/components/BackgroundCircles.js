import { motion } from 'framer-motion'

export const BackgroundCircles = () => {
    return (
        <div className='relative flex justify-center items-center'>
            <div className='border border-gray-700 rounded-full h-56 w-56 mt-52 animate-ping absolute' />
            <div className='border border-gray-700 rounded-full h-80 w-80 mt-52 absolute opacity-20' />
            <div className='border border-gray-700 rounded-full h-72 w-72 mt-52 absolute opacity-20' />
            <div className='border border-yellow-700 rounded-full h-64 w-64 mt-52 animate-pulse absolute opacity-20' />
            <div className='rounded-full border border-gray-700 h-[500px] w-[500px] absolute mt-52' />
            <div />
            <div />
            <div />
        </div>
    )
}
