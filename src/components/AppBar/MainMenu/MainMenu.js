import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "./MainMenu.css";


export default function MainMenu(props) {
  
  const [state, setState] = React.useState(false);



  return (
    <div>
        <React.Fragment key={'left'}>

            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => {setState(true)}} data-testid="menubutton">
            <MenuIcon />
            </IconButton>

            <Drawer anchor={'left'} open={state} onClose={() => {setState(false)}}  data-testid="menubar">
                <div

                role="presentation"
                onClick={() => {setState(false)}}
                >

                <List className="sidebar" >

                  
                <Link to="/">
                <ListItem button key='Home' >
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText primary='Home' />
                </ListItem>
              </Link>
              <NavLink to="/watch-later">
                <ListItem button key='Watch Later' >
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText primary='Watch Later' />
                </ListItem>
              </NavLink>


                </List>
                <Divider />
                </div>
            </Drawer>
        </React.Fragment>
    </div>
  );
}