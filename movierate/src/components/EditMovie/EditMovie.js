import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

import { MovieContext } from "../../contexts/MovieContext";
import { movieServiceFactory } from "../../services/movieService";
import { useService } from "../../hooks/useService";
import { useForm } from "../../hooks/useForm";

import "./EditMovie.css";

export const EditMovie = () => {

    const { movieId } = useParams();
    const { onEditMovieSubmit } = useContext(MovieContext);
    const movieService = useService(movieServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        title:'',
        year: '',
        genre:'',
        director:'',
        coverUrl:'',
        summary:'',
    }, onEditMovieSubmit);

    useEffect(() => {
        movieService.getOneMovie(movieId)
            .then(result => {
                changeValues(result)
            })
    },[movieId])

    return (
        <>
        <section id="editMovieSection">
        <form id="editMovieForm" onSubmit={onSubmit} >
            <div className="container">

                <h3 className="edit-header">Edit Movie Details</h3>

                <label htmlFor="title" className="form-label">Movie Title:</label>
                <input  type="addmoviename" name ="title" className="form-control" id="title" aria-describedby="emailHelp" value={values.title} onChange={changeHandler} />
            
                <label htmlFor="year" className="form-label">Year:</label>
                <input  type="year" name="year" className="form-control" id="year" aria-describedby="emailHelp" value={values.year} onChange={changeHandler} />
            
                <label htmlFor="genre" className="form-label">Genre:</label>
                <input  type="genre" name ="genre" className="form-control" id="genre" aria-describedby="emailHelp" value={values.genre} onChange={changeHandler}/>
            
                <label htmlFor="director" className="form-label">Director:</label>
                <input  type="director" name="director" className="form-control" id="director" aria-describedby="emailHelp" value={values.director} onChange={changeHandler}/>
            
                <label htmlFor="coverUrl" className="form-label">Cover URL:</label>
                <input  type="coverUrl" name="coverUrl" className="form-control" id="coverUrl" aria-describedby="emailHelp" value={values.coverUrl} onChange={changeHandler} />
            
                <label htmlFor="summary">Summary:</label>
                <textarea  name="summary" id="summary" className="form-control" value={values.summary} onChange={changeHandler}></textarea>
                
                <button type="submit" className="btn-primary">Confirm changes</button>

            </div> 
        </form>
        </section>
        </>
    )
}