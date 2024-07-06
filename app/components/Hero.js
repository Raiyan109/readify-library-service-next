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
                    <motion.div className='watch-me text-primary btn-twitter' whileHover={{ scale: [null, 1.5, 1.4] }}
                        transition={{ duration: 0.3 }}>Explore our Catalog &nbsp;<i className="fab fa-youtube"></i></motion.div>
                </Link>
            </div>
        </div>
    )
}
