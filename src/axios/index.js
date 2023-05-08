import axios from 'axios';

const request = axios.create({
    baseURL: ''
})

export const getAPI = async (url, options = {}) => {
    const data = await request.get(url, options)
    return data
}

export default request