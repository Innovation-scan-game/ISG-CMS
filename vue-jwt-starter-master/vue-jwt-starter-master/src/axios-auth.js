import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://cardisc.azurewebsites.net/api'
});

export default instance;