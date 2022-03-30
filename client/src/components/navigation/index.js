import React, {useContext} from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../util/auth';

const Navigation = () => {
  const classes = useStyles();

  const { user, logout } = useContext(AuthContext);

  const menuBar = user ? (
    <AppBar elevation={1} position="sticky">
        <Toolbar className={classes.toolbar}>
            <Typography fontFamily="DM Serif Display, serif" variant="h5" noWrap sx={{ flexGrow: 1 }}>
                <Link className={classes.link} to='/'>Pausing Moments</Link>
            </Typography>
            <Link style={{paddingRight:'30px'}} className={classes.link} to='/addpost'>Add Post</Link>
            <Link style={{paddingRight:'30px'}} className={classes.link} to='/posts'>Posts</Link>
            <Button onClick={logout} style={{backgroundColor:'white', paddingLeft:'15px', paddingRight:'15px', fontWeight:'bold', color: '#d47863'}}>
                Logout
            </Button>
        </Toolbar>
    </AppBar>
  ): (
    <AppBar elevation={1} position="sticky">
        <Toolbar className={classes.toolbar}>
            <Typography fontFamily="DM Serif Display, serif" variant="h5" noWrap sx={{ flexGrow: 1 }}>
                <Link className={classes.link} to='/'>Pausing Moments</Link>
            </Typography>
            <Link style={{paddingRight:'30px'}} className={classes.link} to='/posts'>Posts</Link>
            <Link to='/login' style={{textDecoration:'none'}}>
            <Button style={{backgroundColor:'white', paddingLeft:'15px', paddingRight:'15px', fontWeight:'bold', color: '#d47863' }}>
                Log In
            </Button>
            </Link>
        </Toolbar>
    </AppBar>
  );

  return (
    menuBar
  )
}

const useStyles = makeStyles({
    toolbar: {
        background: '#d47863',
    },
    link: {
        textDecoration: 'none',
        fontWeight: 'bold',
        color: 'white',
        transition: '0.3s',
        '&:hover': {
            opacity: '0.8',
        },
    },
})

export default Navigation;