import axios from 'axios';

const KEY = 'AIzaSyDgi_OMsLrPrt6ztiC2lESCtcTO2V6LpSk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});