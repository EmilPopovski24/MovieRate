import { useContext } from "react";

import { MovieContext } from "../../contexts/MovieContext";
import { MovieItem } from "./MovieItem/MovieItem";

import "./Catalog.css";


export const Catalog = () => {

    const { movies } = useContext(MovieContext);

    return (
        <>
        {movies.length > 0 && (
            <h1 className="catalog-movies">Movies</h1>
        )}
        <div className='catalog-page'>
            {movies.map(x=> <MovieItem key={x._id} {...x} />)}
        </div>
        {movies.length === 0 && (
            <h1 className="catalog-movies">No movies for review</h1>
        )}
        </>
    )
}