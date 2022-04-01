import * as React from 'react';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
        myTextStyle: {
        variant: 'h1',
        fontSize: '16px',
        paddingRight: '30px',
        fontWeight: 'bold', 
        color: 'white', 
        transition: '0.3s', 
        '&:hover': { opacity: '0.8', cursor: 'pointer'}
       }
 });

export default function MyAccount() {
  let history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <div>
      <Typography
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={classes.myTextStyle}
      >
        My Account
      </Typography>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={function handlePosts() {history.push(`/my_posts`)}}>My posts</MenuItem>
        <MenuItem onClick={function handleBookmarks() {history.push(`/my_bookmarks`)}}>My bookmarks</MenuItem>
      </Menu>
    </div>
  );
}