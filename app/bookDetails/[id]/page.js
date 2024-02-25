import BookDetailsComponent from "@/app/components/BookDetails";



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

export default async function BookDetails({ params }) {
    const { id } = params
    const { book } = await getBookById(id)
    const { name, cover,
        desc, author, genre, pages,
        isRented,
        stock, rentPrice, sellPrice, sold } = book

    return <BookDetailsComponent id={id} name={name} cover={cover} desc={desc} author={author} genre={genre} pages={pages} isRented={isRented} stock={stock} rentPrice={rentPrice} sellPrice={sellPrice} sold={sold} />
}