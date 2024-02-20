import bg from '@/public/images/hero-bg.jpg'

export const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg.src})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content glass rounded-2xl p-16">
                <div className="max-w-md ">
                    <h1 className="mb-5 text-5xl font-bold">Discover a World of Books at Readify</h1>
                    <p className="mb-5">Welcome to Book Haven, your premier destination for book lovers everywhere. Dive into our extensive collection of fiction, non-fiction, and everything in between. Whether you are searching for a thrilling mystery, a heartwarming romance, or a thought-provoking memoir, we have something for everyone.</p>
                    <button className="btn btn-primary">Explore Our Catalog</button>
                </div>
            </div>
        </div>
    )
}
