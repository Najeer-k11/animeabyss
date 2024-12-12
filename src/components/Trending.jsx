import React, { useEffect, useState } from 'react';

async function getData(type) {
    try {
        const res = await fetch(`https://api.jikan.moe/v4/top/${type}?limit=18`);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const response = await res.json();
        return response.data; // Ensure this returns an array
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return []; // Return an empty array on error
    }
}

async function Trending({ type }) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await getData(type);
            setResults(data);
            setLoading(false);
        };
        
        fetchData().catch(err => {
            console.error(err);
            setError('Failed to load data');
            setLoading(false);
        });
    }, [type]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={`flex flex-col space-y-2 mt-5 lg:mt-6 mx-auto lg:mx-0 xl:mx-0 2xl:mx-2 xl:mt-10 md:mt-4`}>
            <h2 className={`text-[28px] text-button font-medium`}>Discover</h2>
            <div className={`grid lg:gap-auto xl:gap-auto md:gap-2 gap-2 grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 md:grid-cols-4`}>
                {results.map((item) => (
                    <div key={item.mal_id} className={`relative space-y-3 col-span-1 rounded-xl`}>
                        <img className={`rounded-xl grayscale-0 md:grayscale-0 cursor-pointer hover:grayscale-0 object-cover w-full h-auto xl:filter xl:grayscale lg:filter lg:grayscale transition-opacity duration-500`} src={item.images.jpg.image_url} alt={item.title} />
                        <div className='lg:flex xl:flex xl:flex-col space-y-2 space-x-2 lg:flex-col md:flex-col md:flex flex flex-col'>
                            <p className={`px-2 py-1 w-fit line-clamp-1 text-ellipsis bg-darkbg border-2 rounded-lg border-green-500/20 font-semibold text-xs lg:text-xs xl:text-sm text-textcol`}>{item.title}</p>
                            <div className={`lg:flex xl:flex xl:flex-row space-x-2 md:flex flex flex-row`}>
                                <p className={`px-2 py-0 xl:py-1 w-fit bg-button border-2 rounded-lg border-green-500/20 font-semibold text-xs lg:text-xs xl:text-sm text-darkbg flex justify-center items-center`}>{item.score}</p>
                                <span className={`text-xs py-1`}><svg className="text-yellow-500 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                </svg></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Trending;
