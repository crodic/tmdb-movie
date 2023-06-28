import customizeAxios from "../axios"

export const getPeople = (page) => {
    return customizeAxios.get(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY_AUTH}`
        }
    })
}