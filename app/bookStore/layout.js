'use client'
import Link from "next/link";
import BookStore from "./page";
import { MdSpaceDashboard } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function BookStoreLayout() {
    const router = useRouter()
    return (
        <div>
            <div className="flex">
                <div className="drawer p-5 z-10">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
                            <MdSpaceDashboard />
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <h1 className="p-5 text-2xl font-bold">Dashboard</h1>
                            <Link href='/addBook'>
                                <div className="bg-secondary hover:bg-accent text-black font-semibold text-lg rounded-lg w-full px-2 py-3">Add New Book</div>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="p-8">
                    <button className="btn btn-primary" onClick={() => router.back()}>Back</button>
                </div>
            </div>
            <BookStore />
        </div>
    )
}