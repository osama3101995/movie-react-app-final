import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MainMenu from './MainMenu/MainMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MainAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid="appbar">
      <AppBar position="static">
        <Toolbar>

          
            <MainMenu></MainMenu>
            <Typography variant="h6" className={classes.title}>
          Find Your Favourite Movies!
        </Typography>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}