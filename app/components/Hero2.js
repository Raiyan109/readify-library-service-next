import Image from 'next/image';
import bg from '@/public/images/c.jpg'
import { FaGrinHearts } from "react-icons/fa";

export const Hero2 = () => {
    return (
        <div><div className="flex container mx-auto h-screen">
            <div className="grid grid-cols-3 gap-4">
                <div className="p-6 border border-purple-600 rounded-[12px] flex flex-col gap-1 col-span-1 row-span-1">
                    <span className="text-[16px]">Starting from</span>
                    <span className="text-[28px] font-bold">$2000</span>
                </div>

                <div className="p-6 border border-purple-600 rounded-[12px] flex flex-col gap-1 col-span-1 row-span-1">
                    <FaGrinHearts size={40} className='text-purple-600' strokeWidth={1.4} />
                    <span className="text-[28px] font-bold">Custom Web solutions</span>
                </div>

                <div className="p-6 border border-purple-600 rounded-[12px] flex flex-col gap-1 col-span-1 row-span-2">
                    <FaGrinHearts size={40} className='text-purple-600' strokeWidth={1.4} />
                    <span className="text-[28px] font-bold">Fast Turnaround time</span>
                    <div className='flex pt-2'>

                        <Image src={bg} alt='background' width={100} height={100} style={{ objectFit: 'cover', objectPosition: 'center' }} className='w-full h-[100px] object-cover object-center rounded-[8px]' />
                    </div>
                </div>

                <div className="p-6 border border-purple-600 rounded-[12px] flex justify-between gap-6 col-span-2">
                    <div className='flex flex-col gap-4'>
                        <FaGrinHearts size={40} className='text-purple-600' strokeWidth={1.4} />
                        <span className="text-[28px] font-bold">Streamlined <br />Process</span>
                    </div>
                    <div className='flex w-full'>
                        <img src={bg} className='w-full h-[140px] object-cover object-center rounded-[8px]' alt="" />
                    </div>
                </div>


            </div>
        </div></div>
    )
}
