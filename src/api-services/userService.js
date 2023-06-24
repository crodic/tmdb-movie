import customizeAxios from "../axios"

export const createNewGuestSession = () => {
    return customizeAxios.get("/authentication/guest_session/new", {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmU2OTU4MWFiNjFmODZlNmJhNzhkMzc3ZDZjNDczNCIsInN1YiI6IjY0MDgzMjQ4NTNmODMzMDA3Y2IyOTUwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUh31hwh0jBBTAtw-b0QRGRbPSukg2_QdEEbaBHQviQ'
        }
    })
}

export const createRequestToken = () => {
    return customizeAxios.get("/authentication/token/new", {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmU2OTU4MWFiNjFmODZlNmJhNzhkMzc3ZDZjNDczNCIsInN1YiI6IjY0MDgzMjQ4NTNmODMzMDA3Y2IyOTUwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUh31hwh0jBBTAtw-b0QRGRbPSukg2_QdEEbaBHQviQ'
        }
    })
}

export const createSessionId = (requestToken) => {
    return customizeAxios.post("/authentication/session/new", {
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmU2OTU4MWFiNjFmODZlNmJhNzhkMzc3ZDZjNDczNCIsInN1YiI6IjY0MDgzMjQ4NTNmODMzMDA3Y2IyOTUwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUh31hwh0jBBTAtw-b0QRGRbPSukg2_QdEEbaBHQviQ'
        },
        body: JSON.stringify({ request_token: requestToken })
    })
}

export const deleteSessionId = (sessionId) => {
    return customizeAxios.post("/authentication/session/new", {
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmU2OTU4MWFiNjFmODZlNmJhNzhkMzc3ZDZjNDczNCIsInN1YiI6IjY0MDgzMjQ4NTNmODMzMDA3Y2IyOTUwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUh31hwh0jBBTAtw-b0QRGRbPSukg2_QdEEbaBHQviQ'
        },
        body: JSON.stringify({ session_id: sessionId })
    })
}

