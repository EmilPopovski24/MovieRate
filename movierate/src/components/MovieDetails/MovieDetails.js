import { useContext, useEffect, useState, Link } from "react"
import { useParams } from "react-router-dom";

import { movieServiceFactory } from "../../services/movieService";
import { AuthContext } from "../../contexts/AuthContext";
import { useService } from "../../hooks/useService";

import './MovieDetails.css';

export const MovieDetails = () => {

    const [movie, setMovie] = useState({});
    const { movieId } = useParams();
    const { userId } = useContext(AuthContext);
    const movieService = useService(movieServiceFactory);

    useEffect(()=> {
        movieService.getOneMovie(movieId)
            .then(result => {
                setMovie(result)
            })
    },[movieId]);

    // console.log(`id - ${movie._id}`)
    // console.log(`userId - ${userId}`);
    // console.log(movie)

    // const isOwner = movie._ownerId === userId;

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
                        <div>
                        {/* {isOwner && (
                        <div className="owner-actions">
                            <li ><Link to={`/catalog/${movie._id}/edit`}>Edit</Link></li>
                            <li >Delete</li>
                        </div>
                        )} */}
                        </div>
                    </div> 
                </div>
            </section> 
        </section> 
        </>
    )
}