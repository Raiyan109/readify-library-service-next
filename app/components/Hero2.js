import Image from 'next/image';
import bg from '@/public/images/c.jpg'
import { FaGrinHearts } from "react-icons/fa";

export const Hero2 = () => {
    return (
        <div className=''>
            <div className="flex justify-center items-center py-20 px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-10 md:p-20 border border-purple-600 rounded-[12px] flex flex-col gap-1 col-span-1 row-span-1">
                        <span className="text-[16px]">Starting from</span>
                        <span className="text-[28px] font-bold">$2000</span>
                    </div>

                    <div className="p-10 md:p-20 border border-purple-600 rounded-[12px] flex flex-col gap-1 col-span-1 row-span-1">
                        <FaGrinHearts size={40} className='text-purple-600' strokeWidth={1.4} />
                        <span className="text-[28px] font-bold">Custom Web solutions</span>
                    </div>

                    <div className="p-10 md:p-20 border border-purple-600 rounded-[12px] flex flex-col gap-1 col-span-1 row-span-1 lg:row-span-2">
                        <FaGrinHearts size={40} className='text-purple-600' strokeWidth={1.4} />
                        <span className="text-[28px] font-bold">Fast Turnaround time</span>
                        <div className='flex pt-2'>
                            <Image src={bg} alt='background' width={100} height={100} style={{ objectFit: 'cover', objectPosition: 'center' }} className='w-full h-[100px] object-cover object-center rounded-[8px]' />
                        </div>
                    </div>

                    <div className="p-10 md:p-20 border border-purple-600 rounded-[12px] flex flex-col md:flex-row justify-between gap-4 md:gap-20 col-span-1 sm:col-span-2 lg:col-span-2">
                        <div className='flex flex-col gap-4'>
                            <FaGrinHearts size={40} className='text-purple-600' strokeWidth={1.4} />
                            <span className="text-[28px] font-bold">Streamlined <br />Process</span>
                        </div>
                        <div className='flex w-full'>
                            <img src={bg} className='w-full h-[140px] object-cover object-center rounded-[8px]' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
