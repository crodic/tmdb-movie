import axios from "axios";
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

export const getMovieByID = (id) => {
    return customizeAxios.get(`/movie/${id}`, {
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

export const getVideoByID = (id) => {
    return customizeAxios.get(`/movie/${id}/videos`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY_AUTH}`
        }
    })
}