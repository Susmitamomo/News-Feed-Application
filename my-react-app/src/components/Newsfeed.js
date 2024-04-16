// src/components/NewsFeed.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../features/news/newsSlice';

const NewsFeed = () => {
    const dispatch = useDispatch();
    const { newsData, loading, error } = useSelector(state => state.news);

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <ul>
                    {newsData.map(article => (
                        <li key={article.id}>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NewsFeed;
