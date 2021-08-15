import axios from 'axios';
import React from 'react';
import getMovies from './getMovies';


class FavMoviesServices extends React.Component {

 toggleFavMovie(movieId){    
    
    let favMovies = localStorage.getItem("favMovies");
    if(!favMovies){
        localStorage.setItem("favMovies", JSON.stringify([movieId]));
        return
    }
    
    if( !this.checkFavMovie(movieId)){
        this.addFavMovie(movieId)
        return
    }
    else{
        this.removeFavMovie(movieId)
        return
    }

}

 checkFavMovie(movieId){    

    let favMovies = JSON.parse(localStorage.getItem("favMovies"));

    if(favMovies ){
        const index = favMovies.indexOf(movieId);
        
        if (index > -1) {
          return true
        }
    }

    
    return false;
}


getFavMovies(){    
    return getMovies().then(function (response) {
            let favMovies = JSON.parse(localStorage.getItem("favMovies"));
            let favMoviesOnly = response.results.filter( x => favMovies?.includes(x.id))
            //console.log(favMoviesOnly)
            return favMoviesOnly
        });
}


 addFavMovie(movieId){    
    let favMovies = JSON.parse(localStorage.getItem("favMovies"));
    localStorage.setItem("favMovies", JSON.stringify([...favMovies, movieId]));
}

 removeFavMovie(movieId){    

    let favMovies = JSON.parse(localStorage.getItem("favMovies"))?.filter(item => item !== movieId);
    localStorage.setItem("favMovies", JSON.stringify(favMovies));
    

}

}


const favMoviesServices = new FavMoviesServices();
export default favMoviesServices;