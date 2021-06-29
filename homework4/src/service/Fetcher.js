
const BASE_URL = 'https://fakestoreapi.com';

const fetcher = ({url, ...options}) => fetch(`${BASE_URL}${url}`, options).then(response => response.json()).catch((err) => {
    console.error(err.message);
})

export default {
    get: (url, options) => fetcher({method: 'GET', url, ...options}),
}