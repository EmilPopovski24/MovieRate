import { requestFactory } from "./requester";

const commentsUrl = 'http://localhost:3030/data/comments';

export const commentServiceFactory = (token) => {

    const request = requestFactory(token);

    const addComment = async(data) => {
        const result = await request.post(commentsUrl, data)
        return result;
    };

    const getAllComments = async(movieId) => {
        const query = encodeURIComponent(`movieId="${movieId}"`);
        const author = encodeURIComponent(`author=_ownerId:users`);
        const result = await request.get(`${commentsUrl}?where=${query}&load=${author}`);
        const comments = Object.values(result)
        return comments
    };
    
    return {
        addComment,
        getAllComments    
    }
}