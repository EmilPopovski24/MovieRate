import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";

import "./MovieItem.css";

export const MovieItem = ({
    title,
    year,
    genre,
    director,
    coverUrl,
    _id
}) => {

    const { isAuthenticated } = useContext(AuthContext);

    return(
        <>
        <div className="allMovies">
                <div className="card" style={{width: "18rem"}}>
                    <img src={coverUrl} className="card-img-top" alt={title} /> 
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{year}</p>
                    <p className="card-text"><b>Director: </b>{director}</p>
                    <p className="card-text"><b>Genre: </b>{genre}</p>
                    {isAuthenticated && (<Link to={`/catalog/${_id}`} className="details-button">Details</Link>)}
                </div>
            </div>
        </div> 

        </>
    )
}