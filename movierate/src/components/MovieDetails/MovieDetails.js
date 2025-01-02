import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";

import { movieServiceFactory } from "../../services/movieService";
import { AuthContext } from "../../contexts/AuthContext";
import { MovieContext } from "../../contexts/MovieContext";
// import { AddComment } from "./AddComment/AddComment";
import { useService } from "../../hooks/useService";
import { commentServiceFactory } from "../../services/commentService";

import './MovieDetails.css';
import { rateServiceFactory } from "../../services/rateService";



export const MovieDetails = () => {

    const navigate = useNavigate();
    const [movie, setMovie] = useState({});
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [rate, setRate] = useState('');
    const [rates, setRates] = useState([]);
    const { movieId } = useParams();
    const { userId, isAuthenticated, username } = useContext(AuthContext);
    const { deleteMovie } = useContext(MovieContext);
    const commentService = useService(commentServiceFactory);
    const movieService = useService(movieServiceFactory);
    const rateService = useService(rateServiceFactory);

    // useEffect(()=> {
    //     movieService.getOneMovie(movieId)
    //         .then(result => {
    //             setMovie(result)
    //             return commentService.getAllComments(movieId)
    //         })
    //         .then(result => {
    //             setComments(result);
    //         })
    // }, [movieId]);

    
    useEffect(()=> {
        Promise.all([
            movieService.getOneMovie(movieId),
            commentService.getAllComments(movieId)
        ])
            .then(([movieData, comments]) => {
                    setMovie({
                        ...movieData,
                        comments, 
                    })
                })
    }, [movieId]);


    const onDeleteMovie = async() => {
        // eslint-disable-next-line
        const result = confirm(`Are you sure you want to delete ${movie.title}?`)
            if (result) {
                await deleteMovie(movie._id);
            }       
        navigate("/catalog")
    };


    const onCommentSubmit = async (e) => {   
        e.preventDefault();
        const response = await commentService.addComment({
            movieId,
            comment
        });
        console.log(response)

        setMovie(state => ({
            ...state, 
            comments: [...movie.comments, {
                ...response,
                author:{
                    username,
                }
            }
        ]
        }));
        setComment('');  
    };

    const onRateSubmit = async(e) => {
        e.preventDefault();
        const response = await rateService.addRate({
            movieId,
            rate
        });
        console.log(response)

        setMovie( state => ({
            ...state,
            rates: [...rates, response]
        }))

        setRate('');  
    }

    console.log(movie.comments)

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
                        {!isOwner && (
                            <div className="owner-actions">
                                <form className="rate-form" onSubmit={onRateSubmit} method="POST">
                                    <select id="rate" value={rate} onChange={(e) => setRate(e.target.value)}>
                                        <option value="1" type="number">1</option>
                                        <option value="2" type="number">2</option>
                                        <option value="3" type="number">3</option>
                                        <option value="4" type="number">4</option>
                                        <option value="5" type="number">5</option>
                                        <option value="6" type="number">6</option>
                                        <option value="7" type="number">7</option>
                                        <option value="8" type="number">8</option>
                                        <option value="9" type="number">9</option>
                                        <option value="10" type="number">10</option>
                                </select>
                                    <button className='btn-primary' type="submit" style={{"marginTop":"10px"}}>Rate</button>
                                </form>
                            </div>
                        )}
                        </div>
                        {isAuthenticated && (
                            <article className="addcomment">
                            <h4>Add your comment:</h4>
                                <form className="form" onSubmit={onCommentSubmit} method="POST">
                                    <textarea name ="comment" className="comment-area" placeholder="Your comment..." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                    <input className ="submit-comment-btn"  type="submit" value="Publish" />
                                </form>                       
                        </article>
                        )}
                        {/* { isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />} */}
                        <div className="movie-comments">
                            <ul className="comments-ul" >   
                            <h5>Comments:</h5>                   
                                {movie.comments && Object.values(movie.comments).map(x => (                                  
                                    <li key={x._id} className="comment-li">
                                        <p className="comment-text"><b>{x.author.email}: </b>{x.comment}</p>
                                        <hr></hr>
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