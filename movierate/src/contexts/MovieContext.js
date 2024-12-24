import { createContext, useEffect, useState } from "react";
import { movieServiceFactory } from "../services/movieService";
import { useNavigate } from "react-router-dom";


export const MovieContext = createContext();

export const MovieProvider = ({
    children
}) => {

    const movieService = movieServiceFactory();
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        if(movies.length > 0) {
            movieService.getAllMovies()        
                .then(result => {
                    setMovies(result)
                })
        }
    },[]);

    const onAddMovieSubmit = async(data) => {
        const newMovie = await movieService.addMovie(data);
        setMovies(state => [...state, newMovie]);
        navigate('/catalog');
    };

    const onEditMovieSubmit = async(values) => {
        const result = await movieService.editMovie(values._id, values);
        setMovies(state => state.map( x => x._id === values._id ? result : x));
        navigate(`/catalog/${values._id}`)
    }

    const deleteMovie = (movieId) => {
        setMovies(state => state.filter(movie => movie._id !==movieId))
    }

    const contextValues = {
        onAddMovieSubmit,
        onEditMovieSubmit,
        deleteMovie,
        movies
    }

    return (
        <MovieContext.Provider value={contextValues}>
            {children}
        </MovieContext.Provider>
    )
} 