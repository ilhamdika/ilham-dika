import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import defaultThumbnail from '@/assets/images/portfolio/webFilm.png';

export const PortfolioDetail = () => {
    const { shortName } = useParams(); 
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/portfolio/${shortName}`, {
                    method: 'GET',
                    headers: {
                        'x-api-key': import.meta.env.VITE_API_KEY
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                //console.log('Fetched Data:', data);

                setItem(data);
            } catch (error) {
                console.error('Error fetching item data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [shortName]);

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <DotLoader color={'#a9dbd2'} loading={loading} size={150} />
                </div>
            ) : item ? (
                <div className="container mx-auto p-4">
                    <div className="flex flex-col items-center">
                        <img
                            src={item.thumbnail ? `${import.meta.env.VITE_BASE_URL}/${item.thumbnail}` : defaultThumbnail}
                            alt={item.title}
                            className="w-full max-w-md rounded-lg shadow-lg"
                        />
                        <h1 className="text-3xl font-bold mt-4 dark:text-white">{item.title}</h1>
                        <p className="mt-2 text-lg dark:text-white">{item.deskripsi}</p>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{item.keterangan}</p>
                    </div>
                </div>
            ) : (
                <p className="text-center dark:text-white">Item not found</p>
            )}
        </>
    );
}

export default PortfolioDetail;
