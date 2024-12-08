import { useEffect, useState } from "react"
import { MovieContext } from "../../contexts/MovieContext";
import { useParams } from "react-router-dom";
import { movieServiceFactory } from "../../services/movieService";


export const MovieDetails = () => {

    const [movie, setMovie] = useState({});
    const { movieId } = useParams();
    const movieService = movieServiceFactory()

    useEffect(()=> {
        movieService.getOneMovie(movieId)
            .then(result => {
                setMovie(result)
            })
    },[movieId])


    return(
        <>
        <section className="main">
            <section className="movie-section">   
                <div>
                    <img className="movie-img" src={movie.coverUrl} alt={movie.title} />
                </div>      
                <div className="info">
                    <div className="movie-title">
                        <h4>{movie.title} ({movie.year})</h4>
                    </div>
                    <div className="movie-info">
                        <ul className="movie-info-ul">
                            <li className="movie-info-li"><b>Director: </b>{movie.director}</li>
                            <li className="movie-info-li"><b>Genre: </b>{movie.genre}</li>
                            <li className="movie-info-summary"><p id="text">{movie.summary}</p></li>
                        </ul>
                    </div>
                </div>
            </section> 
        </section> 
        </>
    )
}