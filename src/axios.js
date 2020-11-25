import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-clone-c1d79.cloudfunctions.net/api' //the API (cloud function) URL
})

export default instance;

//http://localhost:5001/clone-c1d79/us-central1/api