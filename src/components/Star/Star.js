import React, { useEffect, useState } from "react";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';
import favMoviesServices from "../../services/movies/favMovies";

export default function Star (props){
    
    const [status, setStatus] = useState(false);

    useEffect(()=> {
        
        if(favMoviesServices.checkFavMovie(props.movie.id)){
            setStatus(true)
        }

      },[]);

    function toggleFavMovie(status){
        favMoviesServices.toggleFavMovie(props.movie.id); 
        setStatus(status);
    }
    

    if(status){
        return (
        <IconButton  aria-label="delete" onClick={()=> {toggleFavMovie(false)}} data-testid= {"star-"+props.movie.id} key={props.movie.id}>
            <StarIcon color="primary"></StarIcon>
      </IconButton>)
    }

    return (
        <IconButton aria-label="delete" onClick={()=> {toggleFavMovie(true)}} data-testid= {"star-"+props.movie.id} key={props.movie.id}>
            <StarBorderIcon></StarBorderIcon>
      </IconButton>)

}