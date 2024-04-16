const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for handling JSON requests
app.use(express.json());

// API route for fetching news data
app.get('/api/news', async (req, res) => {
    try {
        // Make a request to the news API (replace 'YOUR_API_KEY' with your actual API key)
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                country: 'us',
                apiKey: 'Yb6171af13d2f4300b3203eb8eac23544'
            }
        });

        const newsArticles = response.data.articles;
        res.json(newsArticles);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ message: 'Error fetching news data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
