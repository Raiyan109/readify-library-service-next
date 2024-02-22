"use client"
import { CgMenuGridO } from "react-icons/cg";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Profile() {

    const { data: session, status, update } = useSession()
    if (status === "authenticated") {
        return (
            <div>
                <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
                    <div className="h-full">

                        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                            <div className="flex flex-col h-full">
                                {/* <!-- Card top --> */}
                                <div className="flex-grow p-5">
                                    <div className="flex justify-between items-start">
                                        {/* <!-- Image + name --> */}
                                        <header>
                                            <div className="flex mb-2">
                                                <a className="relative inline-flex items-start mr-5" href="#0">
                                                    <div className="absolute top-0 right-0 -mr-2 bg-white rounded-full shadow" aria-hidden="true">
                                                        <svg className="w-8 h-8 fill-current text-yellow-500" viewBox="0 0 32 32">
                                                            <path d="M21 14.077a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 010 1.5 1.5 1.5 0 00-1.5 1.5.75.75 0 01-.75.75zM14 24.077a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />
                                                        </svg>
                                                    </div>
                                                    <img className="rounded-full" src="https://preview.cruip.com/mosaic/images/user-64-01.jpg" width="64" height="64" alt="User 01" />
                                                </a>
                                                <div className="mt-1 pr-1">
                                                    <a className="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                                                        <h2 className="text-xl leading-snug justify-center font-semibold">{session?.user?.name}</h2>
                                                    </a>
                                                    <div className="flex items-center"><span className="text-sm font-medium text-gray-400 -mt-0.5 mr-1">-&gt;</span> <span>{session?.user?.email}</span></div>
                                                </div>

                                            </div>
                                            <button className="btn btn-primary" onClick={() => update()}>Edit name</button>
                                        </header>
                                        {/* <!-- Menu button --> */}
                                        <div className="relative inline-flex flex-shrink-0">
                                            <div className="dropdown dropdown-hover">
                                                <div tabIndex={0} role="button" className="btn m-1 btn-accent"><CgMenuGridO /></div>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-primary rounded-box w-52">
                                                    <li className="hover:bg-secondary rounded-md"
                                                        onClick={() => signOut({ callbackUrl: "/login" })}
                                                    ><a>Sign out</a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Bio --> */}
                                    <div className="mt-2">
                                        <div className="text-sm">Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.</div>
                                    </div>
                                </div>
                                {/* <!-- Card footer --> */}
                                <div className="border-t border-gray-200">
                                    <div className="flex divide-x divide-gray-200r">
                                        <a className="block flex-1 text-center text-sm text-indigo-500 hover:text-indigo-600 font-medium px-3 py-4" href="#0">
                                            <div className="flex items-center justify-center">
                                                <svg className="w-4 h-4 fill-current flex-shrink-0 mr-2" viewBox="0 0 16 16">
                                                    <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                                                </svg>
                                                <span>Send Email</span>
                                            </div>
                                        </a>
                                        <a className="block flex-1 text-center text-sm text-gray-600 hover:text-gray-800 font-medium px-3 py-4 group" href="#0">
                                            <div className="flex items-center justify-center">
                                                <svg className="w-4 h-4 fill-current text-gray-400 group-hover:text-gray-500 flex-shrink-0 mr-2" viewBox="0 0 16 16">
                                                    <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                                                </svg>
                                                <span>Edit Profile</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
    return <a href="/api/auth/signin">Sign in</a>
}