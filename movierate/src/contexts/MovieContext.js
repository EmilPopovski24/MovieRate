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
    });

    const onAddMovieSubmit = async(data) => {
        const newMovie = await movieService.addMovie(data);
        setMovies(state => [...state, newMovie]);
        navigate('/catalog')
    }

    const contextValues = {
        onAddMovieSubmit,
        movies
    }

    return (
        <MovieContext.Provider value={contextValues}>
            {children}
        </MovieContext.Provider>
    )
} 