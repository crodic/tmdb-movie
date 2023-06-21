import customizeAxios from "../axios"

export const getGenresMovie = () => {
    return customizeAxios.get("/genre/movie/list", {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY_AUTH}`
        }
    })
}

export const filterMovie = ({ page: page, genres: genres, type: type }) => {
    return customizeAxios.get(`/discover/${type === "" ? "movie" : type}?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genres}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY_AUTH}`
        }
    })
}