import { useContext } from "react";
import "./AddMovie.css";
import { MovieContext } from "../../contexts/MovieContext";
import { useForm } from "../../hooks/useForm";

export const AddMovie = () => {

    const { onAddMovieSubmit } = useContext(MovieContext);
    const { values, changeHandler, onSubmit } = useForm({
        title:'',
        year:'',
        genre: '',
        director: '',
        coverUrl:'',
        summary: ''
    }, onAddMovieSubmit)

    return (
        <>
        <section id="addMovieSection">
        <form id="addMovieForm" method="POST" onSubmit={onSubmit}>
            <div className="container">

                <h3 className="addmovie-header">Add a Movie</h3>

                <label htmlFor="title" className="form-label">Movie Title:</label>
                <input  type="addmoviename" name ="title" className="form-control" id="title" aria-describedby="emailHelp" value={values.title} onChange={changeHandler} required/>
            
                <label htmlFor="year" className="form-label">Year:</label>
                <input  type="year" name="year" className="form-control" id="year" aria-describedby="emailHelp" value={values.year} onChange={changeHandler} required/>
            
                <label htmlFor="genre" className="form-label">Genre:</label>
                <input  type="genre" name ="genre" className="form-control" id="genre" aria-describedby="emailHelp" value={values.genre} onChange={changeHandler} required/>
            
                <label htmlFor="director" className="form-label">Director:</label>
                <input  type="director" name="director" className="form-control" id="director" aria-describedby="emailHelp" value={values.director} onChange={changeHandler} required/>
            
                <label htmlFor="coverUrl" className="form-label">Cover URL:</label>
                <input  type="coverUrl" name="coverUrl" className="form-control" id="coverUrl" aria-describedby="emailHelp" value={values.coverUrl} onChange={changeHandler} required/>
            
                <label htmlFor="summary">Summary:</label>
                <textarea className="form-control" name="summary" id="summary" value={values.summary} onChange={changeHandler} required></textarea>
                
                <button type="submit" className="btn-primary">Submit</button>
                
            </div>
        </form>
        </section>

        </>
    )
}