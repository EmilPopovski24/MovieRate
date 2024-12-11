import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { movieServiceFactory } from "../../services/movieService";

import "./MovieDetails.css";
import { AuthContext } from "../../contexts/AuthContext";

export const MovieDetails = () => {

    const [movie, setMovie] = useState({});
    const { movieId } = useParams();
    const { userId } = useContext(AuthContext);
    const movieService = movieServiceFactory()

    useEffect(()=> {
        movieService.getOneMovie(movieId)
            .then(result => {
                setMovie(result)
            })
    },[movieId])

    const isOwner = movie._ownerId === userId;

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
                        <div className="owner-actions">
                        <ul>
                            <li className="owner-li"><button className="btn-primary">Edit</button></li>
                            <li className="owner-li"><button className="btn-primary">Delete</button></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </section> 
        </section> 
        </>
    )
}