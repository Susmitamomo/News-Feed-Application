// src/features/news/newsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    const response = await axios.get('http://localhost:3001/api/news'); // Adjust the API endpoint as needed
    return response.data;
});

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        newsData: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [fetchNews.pending]: state => {
            state.loading = true;
            state.error = null;
        },
        [fetchNews.fulfilled]: (state, action) => {
            state.loading = false;
            state.newsData = action.payload;
        },
        [fetchNews.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    }
});

export const newsActions = newsSlice.actions;
export default newsSlice.reducer;
