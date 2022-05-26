import React from 'react';
import { useNavigate, useHref } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const Header =()=> {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                CHUCK SWAPI
                </Typography>
              {/*   <Link to="categories">Chuck Categories</Link>
                <Link to="/people">Chuck Categories</Link> */}
                <Button color="inherit" onClick={() => navigate("/search")}>SEARCH</Button>
                <Button color="inherit" onClick={() => navigate("/categories")}>Chuck Categories</Button>
                <Button color="inherit" onClick={() => navigate("/people")}>Star Wars people</Button>
            </Toolbar>
        </AppBar>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  

export default Header;