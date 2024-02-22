import { Books } from '../components/Books'

const getAllBooks = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/books', {
            cache: 'no-store'
        })
        if (!res.ok) {
            throw new Error('Failed to fetch books')
        }

        return res.json()
    } catch (error) {
        console.log('error loading books', error);
    }
}

export default async function BookStore() {
    const { books } = await getAllBooks()
    console.log(books);


    return (
        <div className='flex justify-center items-center flex-col py-16'>
            <h1 className='text-center text-4xl pb-20 text-primary'>All Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {books.map((book) => (
                    <Books key={book.id} book={book} />
                ))}
            </div>
        </div>
    )
}
