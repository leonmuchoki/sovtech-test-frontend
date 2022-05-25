const baseUri = 'https://localhost:44370';
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

const getChuckCategories = () => {
    return fetch(`${baseUri}/categories`,{
        method: 'GET',
        headers: headers
        })
        .then((response) =>  {
            if (response.ok)
                return response.json();
            throw response;
        })
        .then((data) => data)
        .catch((error) => {
            console.error(error);
            return error;
        });
};

export default {
    getChuckCategories,
};