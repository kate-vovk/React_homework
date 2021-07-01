import Fetcher from "../service/Fetcher";

export const getElectronics = (options={}) => {
    const {limit=5} = options;
    console.log(limit);
    return Fetcher.get(`/products/category/electronics?limit=${limit}`, limit);
}