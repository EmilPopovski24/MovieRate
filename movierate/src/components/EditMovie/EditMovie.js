import "./EditMovie.css";

export const EditMovie = () => {
    return (
        <>
        <section id="editMovieSection">
        <form id="editMovieForm" >
            <div className="container">

                <h3 className="edit-header">Edit Movie Details</h3>

                <label htmlFor="title" className="form-label">Movie Title:</label>
                <input  type="addmoviename" name ="title" className="form-control" id="title" aria-describedby="emailHelp" />
            
                <label htmlFor="year" className="form-label">Year:</label>
                <input  type="year" name="year" className="form-control" id="year" aria-describedby="emailHelp" />
            
                <label htmlFor="genre" className="form-label">Genre:</label>
                <input  type="genre" name ="genre" className="form-control" id="genre" aria-describedby="emailHelp" />
            
                <label htmlFor="director" className="form-label">Director:</label>
                <input  type="director" name="director" className="form-control" id="director" aria-describedby="emailHelp" />
            
                <label htmlFor="coverUrl" className="form-label">Cover URL:</label>
                <input  type="coverUrl" name="coverUrl" className="form-control" id="coverUrl" aria-describedby="emailHelp" />
            
                <label htmlFor="summary">Summary:</label>
                <textarea  name="summary" id="summary" className="form-control"></textarea>
                
                <button type="submit" className="btn-primary">Confirm changes</button>

            </div> 
        </form>
        </section>

        </>
    )
}