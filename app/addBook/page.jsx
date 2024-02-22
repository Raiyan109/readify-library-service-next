export default function AddBook() {
    return (
        <div className="p-12 flex justify-center items-center">
            <div>
                <h1 className="text-center text-2xl font-bold mb-12">Add Book</h1>
                <form className="">
                    <div>
                        <input type="text" placeholder="Book Name" className="input input-bordered input-primary w-full max-w-xs" /></div>

                </form>
            </div>
        </div>
    )
}