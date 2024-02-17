import { FaSearch } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";


export const UpperNav = () => {
    return (

        <div className="text-primary flex justify-between text-sm lg:text-lg py-2 px-3">
            <div>
                <h3 className='uppercase'>Contact us on 01617910378</h3>
            </div>
            <div className="flex items-center gap-4">
                <FaSearch />
                <div className="flex items-center">
                    <div className="flex items-center gap-1">
                        <MdEdit />
                        <h3>Register</h3>
                    </div>/
                    <div className="flex items-center gap-1">
                        <IoIosPerson />
                        <h3>Login</h3>
                    </div>
                </div>
                <div>
                    <h3>Your cart: 0 items - $0.00</h3>
                </div>
            </div>
        </div>

    )
}
