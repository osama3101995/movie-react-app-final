

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import getMovies from "../../services/movies/getMovies";
import { useEffect, useState } from 'react';
import Star from '../../components/Star/Star';
import TextField from '@material-ui/core/TextField';
import "./MovieList.css";
import MoviesTable from '../../components/MoviesTable/MoviesTable';


export default function MovieList() {


  const [movies, setMovies] = useState([])
  const [allMovies, setAllMovies] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=> {
    getMovies().then((res)=>{
      //console.log(res)
      setMovies(res.results)
      setAllMovies(res.results)
    })
  },[]);

  useEffect(()=> {
    if(search === ""){
      setMovies(allMovies)
    }
    else{
      let filterMovies = allMovies.filter( x => x.original_title.toLowerCase().includes(search.toLowerCase()))
      setMovies(filterMovies)

    }
  },[search]);



  return (
    <div>
      
      <Container maxWidth="md"  data-testid={"movielist"}>

        <br></br>

        <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth
        onChange={ (e) => {
          setSearch(e.target.value)
        }} 
        type="text"
        inputProps={{ "data-testid": "movielist-search-field" }}
        value={search} />

        <br></br>

        <br></br>




        <MoviesTable movies={movies}></MoviesTable>


      </Container>


    </div>
  );
}
