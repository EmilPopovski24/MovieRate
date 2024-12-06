import "./AddMovie.css";

export const AddMovie = () => {
    return (
        <>
        <section id="addMovieSection">
        <form id="addMovieForm" method="POST">
            <div className="container">

                <h3 className="addmovie-header">Add a Movie</h3>

                <label htmlFor="title" className="form-label">Movie Title:</label>
                <input  type="addmoviename" name ="title" className="form-control" id="title" aria-describedby="emailHelp" required/>
            
                <label htmlFor="year" className="form-label">Year:</label>
                <input  type="year" name="year" className="form-control" id="year" aria-describedby="emailHelp" required/>
            
                <label htmlFor="genre" className="form-label">Genre:</label>
                <input  type="genre" name ="genre" className="form-control" id="genre" aria-describedby="emailHelp" required/>
            
                <label htmlFor="director" className="form-label">Director:</label>
                <input  type="director" name="director" className="form-control" id="director" aria-describedby="emailHelp" required/>
            
                <label htmlFor="coverUrl" className="form-label">Cover URL:</label>
                <input  type="coverUrl" name="coverUrl" className="form-control" id="coverUrl" aria-describedby="emailHelp" required/>
            
                <label htmlFor="summary">Summary:</label>
                <textarea className="form-control" name="summary" id="summary" required></textarea>
                
                <button type="submit" className="btn-primary">Submit</button>
                
            </div>
        </form>
        </section>

        </>
    )
}