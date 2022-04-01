import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-apollo';
import { LIKE_POST } from '../../graphql/postQueries'; 
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import IconButton from '@mui/material/IconButton';

function BookmarkButton({user, post:{id, likeCount, likes}}){
    
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if(user && likes.find((like) => like.userId === user.id)){
            setLiked(true);
        }
        else setLiked(false);
    }, [user, likes]);

    const [likePost] =  useMutation(LIKE_POST, {
        variables: { postId: id }
    });

    const likeButton = user ? (
        liked ? (
            <IconButton aria-label="added to bookmarks">
              <BookmarkIcon />
            </IconButton>
        ) : (
            <IconButton aria-label="add to bookmarks">
              <BookmarkBorderIcon />
            </IconButton>
        )
    ) : (
            <IconButton as={Link} to="/login" aria-label="add to bookmarks">
            <BookmarkBorderIcon />
            </IconButton>
    );

    return(
        <div key={id} onClick={likePost} style={{display: "inline"}}>
            {likeButton}
        </div>
    );
}

export default BookmarkButton;