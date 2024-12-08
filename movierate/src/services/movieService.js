import { requestFactory } from "./requester"

const moviesUrl = 'http://localhost:3030/data/movies'


export const movieServiceFactory = (token) => {

    const request = requestFactory(token);

    const addMovie = async(data) => {
        const result = await request.post(moviesUrl, data)
        return result
    }

    const getAllMovies = async() => {
        const result = await request.get(moviesUrl);
        // const movies = Object.values(result);
        return result
    }



    return {
        addMovie,
        getAllMovies
    }

}