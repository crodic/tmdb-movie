import customizeAxios from "../axios";

export const getUpComingMovie = (page) => {
    return customizeAxios.get("/movie/upcoming", {
        params: { language: 'en-US', page: page },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY_AUTH}`
        }
    })
}

export const getMovieByID = (id, type) => {
    return customizeAxios.get(`/${type ? type : "movie"}/${id}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY_AUTH}`
        }
    })
}

export const getMovieByKeyword = (keyword, page) => {
    return customizeAxios.get(`/search/keyword?query=${keyword}&page=${page}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY_AUTH}`
        }
    })
}

export const getVideoByID = (id, type) => {
    return customizeAxios.get(`/${type}/${id}/videos`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY_AUTH}`
        }
    })
}