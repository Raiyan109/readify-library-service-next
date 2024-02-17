import logo from '@/public/images/readify-logo.png'
import Image from 'next/image'

export const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <a className="text-xl flex flex-col justify-start items-start">
                    <Image src={logo} height={90} width={90} />
                    <p className='text-primary'>Library Services</p>
                </a>
            </div>
        </div>
    )
}
