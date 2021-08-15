import axios from "axios";

export default async function getMovies(){    
    return axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9fa5ca7441567afb9d97620f4c743a5b',
     
      })
        .then(function (response) {
            return ( response.data)
        });
}