import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-apollo';
import { DELETE_POST } from '../../graphql/postQueries'; 
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import { useHistory } from "react-router-dom";
import { Dialog } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

function DeleteButton({user, postId}){
    let history = useHistory();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const [deletePost] = useMutation(DELETE_POST, {
        variables: { postId },
        update(){
            history.push('/posts');
            window.location.reload(false);
        }
    });

    return(
        <div style={{display: "inline"}}>
            <IconButton aria-label="delete" onClick={handleClickOpen}>
                <DeleteOutlineIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="delete-dialog-title"
                aria-describedby="delete-dialog-description"
            >
            <DialogTitle id="delete-dialog-title">
                {"Delete this post?"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="delete-dialog-description">
            Are you sure you want to delete this post?
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={deletePost} autoFocus>
                Delete
                </Button>
            </DialogActions>
            </Dialog>
        </div>
    );
}

export default DeleteButton;