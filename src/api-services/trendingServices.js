import customizeAxios from "../axios";

export const getMovieTrending = () => {
    try {
        let data = customizeAxios.get("/trending/all/day", {
            params: { language: 'en-US', page: 2 },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmU2OTU4MWFiNjFmODZlNmJhNzhkMzc3ZDZjNDczNCIsInN1YiI6IjY0MDgzMjQ4NTNmODMzMDA3Y2IyOTUwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUh31hwh0jBBTAtw-b0QRGRbPSukg2_QdEEbaBHQviQ'
            }
        });
        return data;
    } catch (error) {
        return {};
    }

}