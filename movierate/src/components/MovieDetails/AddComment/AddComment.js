import { useForm } from '../../../hooks/useForm';

import './AddComment.css';

export const AddComment = ({
    onCommentSubmit,
    username
}) => {

    const { values, changeHandler, onSubmit } = useForm({
        username,
        comment:'',
    }, onCommentSubmit)

    return(
        <article className="addcomment">
            <h4>Add your comment:</h4>
                <form className="form" onSubmit={onSubmit}>
                    <textarea name ="comment" className="comment-area" placeholder="Your comment..." value={values.comment} onChange={changeHandler}></textarea>
                    <input className ="submit-comment-btn"  type="submit" value="Publish" />
                </form>                       
        </article>

    )
}