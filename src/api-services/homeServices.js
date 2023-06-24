import customizeAxios from "../axios"

export const getNowPlaying = (page) => {
    return customizeAxios.get(`/movie/now_playing?language=en-US&page=${page}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY_AUTH}`
        }
    })
}

export const getTopRate = (page) => {
    return customizeAxios.get(`/movie/top_rated?language=en-US&page=${page}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY_AUTH}`
        }
    })
}