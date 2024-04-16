import axios from 'axios';

export const fetchNews = () => async dispatch => {
    dispatch({ type: 'FETCH_NEWS_REQUEST' });

    try {
        const response = await axios.get('http://localhost:3001/api/news');
        dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_NEWS_FAILURE', payload: error });
    }
};
