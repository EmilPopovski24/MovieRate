import { requestFactory } from "./requester";

const ratesUrl = 'http://localhost:3030/data/rates';

export const rateServiceFactory = (token) => {

    const request = requestFactory(token);

    const addRate = async(data) => {
        const result = await request.post(ratesUrl, data)
        return result;
    };

    const getAllRates = async(movieId) => {
        const query = encodeURIComponent(`movieId="${movieId}"`);
        const author = encodeURIComponent(`author=_ownerId:users`);
        const result = await request.get(`${ratesUrl}?where=${query}&load=${author}`);
        const rates = Object.values(result)
        return rates
    };
    
    return {
        addRate,
        getAllRates    
    }
}