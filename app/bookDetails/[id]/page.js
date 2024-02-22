import BookDetailsComponent from "@/app/components/BookDetails";



const getBookById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/books/${id}`, { cache: "no-store" })

        if (!res.ok) {
            throw new Error("Failed to fetch book")
        }
        return res.json()
    } catch (error) {
        console.log(error);
    }
}

export default async function BookDetails({ params }) {
    const { id } = params
    const { book } = await getBookById(id)
    const { name } = book

    return <BookDetailsComponent id={id} name={name} />
}