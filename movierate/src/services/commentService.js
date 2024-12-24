import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

export const commentServiceFactory = (token) => {

    const request = requestFactory(token);

    const addComment = async(movieId, commentData) => {
        const result = await request.post(baseUrl, {movieId, commentData});
        return result
    }

    const getAllComments = async(movieId) => {
        const query = encodeURIComponent(`movieId="${movieId}"`)
        const result = await request.get(`${baseUrl}?where=${query}`);
        const comments = Object.values(result);
        return comments
    }


    return {
        addComment,
        getAllComments
    }

}