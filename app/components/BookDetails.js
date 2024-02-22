import { FaFacebook, FaFacebookF, FaHeart, FaLinkedin, FaStar, FaStarAndCrescent, FaStarHalf, FaStarHalfAlt, FaTwitter } from "react-icons/fa";

export default function BookDetailsComponent({ name }) {
    return (
        <div>
            {/* <!-- component --> */}
            <section className="text-gray-700 body-font overflow-hidden ">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg" />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-primary tracking-widest">{name}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <FaStar className="text-accent" />
                                    <FaStar className="text-accent" />
                                    <FaStar className="text-accent" />
                                    <FaStar className="text-accent" />
                                    <FaStarHalfAlt className="text-accent" />

                                    <span className="text-primary ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                    <a className="text-primary">
                                        <FaFacebookF />
                                    </a>
                                    <a className="ml-2 text-primary">
                                        <FaTwitter />
                                    </a>
                                    <a className="ml-2 text-primary">
                                        <FaLinkedin />
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed text-primary/60">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 text-primary">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-accent rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select className="rounded border appearance-none border-primary py-2 focus:outline-none focus:border-accent text-primary pl-3 pr-10">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-primary pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                                <button className="flex ml-auto text-white bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded">Button</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-primary ml-4">
                                    <FaHeart />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}