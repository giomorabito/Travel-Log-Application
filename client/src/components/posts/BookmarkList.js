import React from 'react';
import { Query } from 'react-apollo';
import { GET_USER_BOOKMARKS } from '../../graphql/postQueries';
import Grid from '@mui/material/Grid';
import PostCard from '../elements/PostCard';
import { Alert } from '@mui/material';
import { Container } from '@mui/material';

function BookmarkList() { 
document.title = "My Bookmarks | Pausing Moments";

  return(
      <div>
      <Container align='center'>
      <h1>My Bookmarks</h1>
      </Container>
      <Query query={GET_USER_BOOKMARKS}> 
        {function({ loading, error, data }) { 
          if (loading) return "Loading...";
          if (error) return (
            <Alert severity="error">{error.message}</Alert>
          );
          const { userBookmarks } = data; 
          if (userBookmarks.length === 0) return (
            <Container align='center'>
            <subtitle>You haven't bookmarked any posts yet.</subtitle>
            </Container>
          );
          return(
            <Grid alignItems="center" justifyContent="center" container spacing={2} marginTop marginBottom>
            {userBookmarks.map(post => { 
              return(
                <Grid item>
                <PostCard post={post}/>
                </Grid>
              );     
            })}
            </Grid>
          );
        }}
      </Query>
      </div>
  )
}

export default BookmarkList;