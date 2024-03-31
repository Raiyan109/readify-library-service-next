'use client'
import bg from '@/public/images/hero-bg.jpg'
import Link from 'next/link'
import { Shapes } from './Shapes'
import { BackgroundCircles } from './BackgroundCircles'
import { motion, useMotionValue, useTransform } from "framer-motion";


export const Hero = () => {
    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const rotateX = useTransform(y, [0, 400], [45, -45]);
    const rotateY = useTransform(x, [0, 400], [-45, 45]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }
    return (
        <div className="h-screen flex flex-col space-y-8 items-center mt-20 text-center" >
            <BackgroundCircles />
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            {/* <div className="hero-content text-center text-neutral-content glass opacity-25 rounded-2xl p-16">
                <Shapes />
                <div className="max-w-md ">
                    <h1 className="mb-5 text-5xl font-bold">Discover a World of Books at Readify</h1>
                    <p className="mb-5">Welcome to Book Haven, your premier destination for book lovers everywhere. Dive into our extensive collection of fiction, non-fiction, and everything in between. Whether you are searching for a thrilling mystery, a heartwarming romance, or a thought-provoking memoir, we have something for everyone.</p>
                    <Link href='/bookStore'><button className="btn btn-primary">Explore Our Catalog</button></Link>
                </div>
            </div> */}
            <div className="box">
                <div className="container">
                    {/* <div className="shape1"

                    ></div> */}
                    <motion.div
                        className="shape1"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                    <motion.div
                        className="shape2"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                    {/* <div className="shape2"></div> */}
                    <div className="clock text-3xl">
                        <h1> Discover a World of Books at <span className='text-secondary font-bold text-4xl'>Readify</span></h1>
                        {/* <div id="day"></div>
                        <div className="wrapper">
                            <div id="time"></div>
                            <div id="midday"></div>
                        </div> */}
                    </div>

                </div>
                <Link href='/bookStore'>
                    <motion.div className='watch-me text-primary' whileHover={{ scale: [null, 1.5, 1.4] }}
                        transition={{ duration: 0.3 }}>Explore our Catalog &nbsp;<i className="fab fa-youtube"></i></motion.div>
                </Link>
            </div>
        </div>
    )
}
