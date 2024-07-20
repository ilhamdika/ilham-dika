import React, { useEffect, useState } from 'react';
import { CardPortfolio } from '@/components/CardPortfolio'; 
import TypeIt from 'typeit-react';
import { DotLoader } from 'react-spinners';
import defaultThumbnail from '@/assets/images/portfolio/webFilm.png'; 

export const Portfolio = () => {
    const [loading, setLoading] = useState(true);
    const [portfolioItems, setPortfolioItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/portfolio`, {
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

                const fixedData = data.map(item => ({
                    ...item,
                    thumbnail: item.thumbnail.replace(/\\/g, '/')
                }));

                setPortfolioItems(fixedData);
            } catch (error) {
                console.error('Error fetching portfolio data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <DotLoader color={'#a9dbd2'} loading={loading} size={150} />
                </div>
            ) : (
                <div className="pt-22 mobile:pt-10">
                    <TypeIt className="dark:text-white justify-center text-center items-center flex text-4xl my-10 font-medium mobile:">
                        Portfolio
                    </TypeIt>
                    <h1 className="dark:text-white justify-center text-center items-center flex text-xl my-10 font-light">
                        This is the result of my work
                    </h1>
                    <div className="grid grid-cols-3 laptop:flex-row desktop:flex-row tablet:flex-row mobile:h-auto mobile:grid-cols-1 my-10">
                        {portfolioItems.map(item => {
                            const thumbnailUrl = item.thumbnail ? `${import.meta.env.VITE_BASE_URL}/${item.thumbnail}` : defaultThumbnail;
                            //console.log('Thumbnail URL:', thumbnailUrl); 

                            return (
                                <CardPortfolio
                                    key={item.id}
                                    className={'bg-slate-900 bg-opacity-50 rounded-xl'}
                                    thumbnail={thumbnailUrl}
                                    title={item.title}
                                    description={item.deskripsi}
                                    href={`${item.shortName}`}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
}

export default Portfolio;
