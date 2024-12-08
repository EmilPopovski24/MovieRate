import { useContext } from "react"
import { MovieContext } from "../../contexts/MovieContext"


export const Catalog = () => {

    const { movies } = useContext(MovieContext);

    return (
        <>
        {movies.length > 0 && (
            <h2 className="catalog-movies">Movies</h2>
        )}
        </>
    )
}