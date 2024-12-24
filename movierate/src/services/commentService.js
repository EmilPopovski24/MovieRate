import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

    const request = requestFactory();

     export const addComment = async(movieId, commentData) => {
        const result = await request.post(baseUrl, {movieId, commentData});
        return result
    }

    export const getAllComments = async(movieId) => {
        const query = encodeURIComponent(`movieId="${movieId}"`);
        const author = encodeURIComponent(`author=_ownerId:users`);
        const result = await request.get(`${baseUrl}?where=${query}&load=${author}`);
        const comments = Object.values(result);
        return comments
    }