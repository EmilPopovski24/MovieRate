import { useContext } from "react"
import { MovieContext } from "../../contexts/MovieContext"
import { MovieItem } from "./MovieItem/MovieItem";


export const Catalog = () => {

    const { movies } = useContext(MovieContext);

    return (
        <>
        {movies.length > 0 && (
                <h1 className="catalog-pets">Pets</h1>
            )}
            <div id='catalog-page'>
                {movies.map(x=> <MovieItem key={x._id} {...x} />)}
            </div>
            {movies.length === 0 && (
                <h1 className="catalog-pets">No pet accounts yet</h1>
            )}

        </>
    )
}