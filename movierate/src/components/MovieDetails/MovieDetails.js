import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";

import { movieServiceFactory } from "../../services/movieService";
import { AuthContext } from "../../contexts/AuthContext";
import { MovieContext } from "../../contexts/MovieContext";
import { AddComment } from "./AddComment/AddComment";
import { useService } from "../../hooks/useService";
import * as commmentService from '../../services/commentService';

import './MovieDetails.css';


export const MovieDetails = () => {

    const navigate = useNavigate();
    const [movie, setMovie] = useState({});
    // const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const { movieId } = useParams();
    const { userId, isAuthenticated, username } = useContext(AuthContext);
    const { deleteMovie } = useContext(MovieContext);
    // const { commmentService } = useService(commentServiceFactory);
    const movieService = useService(movieServiceFactory);

    useEffect(()=> {
        movieService.getOneMovie(movieId)
            .then(result => {
                setMovie(result)
                return commmentService.getAllComments(movieId)
            })
            .then(result => {
                setComments(result);
            })
    }, [movieId]);


    // useEffect(()=> {
    //     Promise.all([
    //         movieService.getOneMovie(movieId),
    //         commmentService.getAllComments(movieId)
    //     ])
    //         .then(([movieData, comments]) => {
    //                 setMovie({
    //                     ...movieData,
    //                     comments, 
    //                 })
    //             })
    // }, [movieId]);


    const onDeleteMovie = async() => {
        // eslint-disable-next-line
        const result = confirm(`Are you sure you want to delete ${movie.title}?`)
            if (result) {
                await deleteMovie(movie._id);
            }       
        navigate("/catalog")
    };

    const onCommentSubmit = async (values) => {        
        const response = await commmentService.addComment(movieId, values.comment);
        // console.log(response)
        //new reference for new data
        setMovie (state => ({
            ...state, 
            comments: [...comments, response
            //     {...response,
            //     author:{
            //         username,
            //     }
            // }
        ]
        }))  
        // setComment('');  
    };

    console.log(comments)

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
                        <div>
                        {isOwner && (
                        <div className="owner-actions">
                            <button className="btn-primary"><Link to={`/catalog/${movie._id}/editmovie`}>Edit</Link></button>
                            <button className="btn-primary" onClick={onDeleteMovie}>Delete</button>
                        </div>
                        )}
                        </div>
                        { isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
                        <div className="movie-comments">
                            <ul className="comments-ul" >   
                            <h5>Comments:</h5>                   
                                {comments && Object.values(comments).map(x => (                                  
                                    <li key={x._id} className="comment-li">
                                        <p className="comment-text"><b>{x.author.email}: </b>{x.commentData}</p>
                                    </li>
                                ))}
                            </ul>  
                        </div>
                    </div> 
                </div>
            </section> 
        </section> 
        </>
    )
}