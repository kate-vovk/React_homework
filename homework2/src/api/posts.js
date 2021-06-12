export const getPosts = (url) => 
    fetch(url).then((response) => {
        let res = response.json();
        console.log('response ', res);

        // console.log('response2 ', response.body);
        // console.log(response);
        return res;
    })