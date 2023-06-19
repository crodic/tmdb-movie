import customizeAxios from "../axios";

export const getUpComingMovie = (page) => {
    return customizeAxios.get("/movie/upcoming", {
        params: { language: 'en-US', page: page },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmU2OTU4MWFiNjFmODZlNmJhNzhkMzc3ZDZjNDczNCIsInN1YiI6IjY0MDgzMjQ4NTNmODMzMDA3Y2IyOTUwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUh31hwh0jBBTAtw-b0QRGRbPSukg2_QdEEbaBHQviQ'
        }
    })
}

export const getMovieByID = (id) => {
    return customizeAxios.get(`/movie/${id}`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmU2OTU4MWFiNjFmODZlNmJhNzhkMzc3ZDZjNDczNCIsInN1YiI6IjY0MDgzMjQ4NTNmODMzMDA3Y2IyOTUwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUh31hwh0jBBTAtw-b0QRGRbPSukg2_QdEEbaBHQviQ',
        }
    })
}