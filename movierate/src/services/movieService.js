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
        const movies = Object.values(result);
        return movies;
    }

    const getOneMovie = async(movieId) => {
        const result = await request.get(`${moviesUrl}/${movieId}`);
        return result
    };

    const editMovie = async(movieId, movieData) => {
        const result = await request.put(`${moviesUrl}/${movieId}`, movieData);
        return result
    }

    return {
        addMovie,
        getAllMovies,
        getOneMovie,
        editMovie
    }

}