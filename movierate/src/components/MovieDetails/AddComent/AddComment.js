import './AddComment.css';

export const AddComment = () => {
    return(
        <article className="addcomment">
            <h4>Add your comment:</h4>
                <form className="form">
                    <textarea name ="comment" className="comment-area" placeholder="Your comment..." ></textarea>
                    <input className ="submit-comment-btn"  type="submit" value="Publish" />
                </form>                       
        </article>

    )
}