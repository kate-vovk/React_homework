import Fetcher from "../service/Fetcher";

export const getProducts = (options={}) => {
    
    const {limit = 5} = options;
    return Fetcher.get(`/products?limit=${limit}`);
}