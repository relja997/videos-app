import axios from 'axios';

const KEY = 'AIzaSyCTIAwA9MRWPgs3SYTEm1rPugH4UlNW3ew';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});