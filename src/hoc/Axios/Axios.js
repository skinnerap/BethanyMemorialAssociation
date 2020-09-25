import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bethanymemorial-f36e7.firebaseio.com/'
});

export default instance;