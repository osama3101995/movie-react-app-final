

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Star from '../../components/Star/Star';
import "./MoviesTable.css";
import { useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';


export default function MoviesTable(props) {


  function Row(props) {
    const { movie } = props;
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <TableRow key={movie.id}  data-testid={"movierow"}>

          <TableCell>
              <Star movie={movie}></Star>
            </TableCell>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
            <TableCell>{movie.original_title}</TableCell>
            <TableCell className="desktop-only">{movie.release_date}</TableCell>
            <TableCell className="desktop-only">{movie.vote_average}</TableCell>
        </TableRow>
        <TableRow data-testid={"movie-row-"+movie.id}>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
 

              
              <Grid container spacing={3}>
                <Grid item md={4} sm={12}>
                <img style={{maxWidth: "100%", maxHeight: "20em"}} src={"https://image.tmdb.org/t/p/original/"+movie.poster_path}></img>
                </Grid>
                <Grid item md={8} sm={12}>
                  <h1>{movie.original_title}</h1>
                  <p>{movie.overview}</p>
                </Grid>
              </Grid>





              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }
  





  return (
    <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow style={{backgroundColor : "black", color: "#fff"}}>
          <TableCell style={{color: "#fff"}}>Watch Later</TableCell>
          <TableCell style={{color: "#fff"}}></TableCell>
          <TableCell  style={{ color: "#fff"}}>Name</TableCell>
          <TableCell  style={{color: "#fff"}} className="desktop-only">Release Date</TableCell>
          <TableCell style={{color: "#fff"}} className="desktop-only">Vote</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.movies.map((movie) => (

           <Row key={movie.id} movie={movie}  ></Row>


        ))}
      </TableBody>
    </Table>
  </TableContainer>

  );
}
