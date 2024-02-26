import { Books } from '../components/Books'
import { FilterComponent } from './FilterComponent'

const getAllBooks = async () => {
    try {
        const res = await fetch('https://readify-library-service-next.vercel.app/api/books', {
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

export const BookStoreHome = async () => {

    try {
        const books = await getAllBooks() ?? {}; // Optional chaining
        console.log(books);

        return (
            <div className='flex justify-center items-center flex-col py-16'>
                <div className='flex gap-10'>
                    <div>
                        <h1 className='text-center text-4xl pb-20 text-primary'>All Books</h1>
                    </div>
                    <FilterComponent books={books?.books} />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {books.books && books?.books?.map((book) => (
                        <Books key={book?._id} book={book} />
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.log('Error loading books', error);
        // Handle the error or display a fallback message
        return (
            <div className='flex justify-center items-center flex-col py-16'>
                <h1 className='text-center text-4xl pb-20 text-primary'>Error Loading Books</h1>
            </div>
        );
    }
};
