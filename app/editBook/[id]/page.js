import EditBookForm from "@/app/components/EditBookForm";


const getBookById = async (id) => {
    try {
        const res = await fetch(`https://readify-library-service-next.vercel.app/api/books/${id}`, { cache: "no-store" })

        if (!res.ok) {
            throw new Error("Failed to fetch book")
        }
        return res.json()
    } catch (error) {
        console.log(error);
    }
}

export default async function EditBook({ params }) {
    const { id } = params
    const { book } = await getBookById(id)
    const { name } = book

    return <EditBookForm id={id} name={name} />
}