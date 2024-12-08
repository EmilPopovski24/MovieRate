import { requestFactory } from "./requester"

const moviesUrl = 'localhost:3030/data/movies'


export const movieServiceFactory = (token) => {

    const request = requestFactory(token);

    const addMovie = async(data) => {
        const result = await request.post(moviesUrl, data)
        return result
    }

    const getAllMovies = () => {
        const result = request.get(moviesUrl);
        const movies = Object.values(result);
        return movies
    }



    return {
        addMovie,
        getAllMovies
    }

}