'use client'

import { useRouter } from "next/navigation"

export const RemoveBtn = ({ id }) => {
    const router = useRouter()

    const removeBook = async () => {
        const confirmed = confirm("Are you sure?")

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/books?id=${id}`, {
                method: "DELETE",
            })

            if (res.ok) {
                router.refresh()
            }
        }
    }

    return (
        <div onClick={removeBook}>
            <button className="btn btn-xs btn-accent">Delete</button>
        </div>
    )
}
