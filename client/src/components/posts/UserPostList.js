import React from 'react';
import { Query } from 'react-apollo';
import { GET_USER_POSTS } from '../../graphql/postQueries';
import Grid from '@mui/material/Grid';
import PostCard from '../elements/PostCard';
import { Alert } from '@mui/material';
import Container from '@mui/material/Container';

function UserPostList() {
  document.title = "My Posts | Pausing Moments";
  return(
    <div>
    <Container align='center'>
    <h1>My Posts</h1>
    </Container>
      <Query query={GET_USER_POSTS}> 
        {function({ loading, error, data }) { 
          if (loading) return "Loading...";
          if (error) return (
            <Alert severity="error">{error.message}</Alert>
          );
          const { userPosts } = data;
          if (userPosts.length === 0) return (
            <Container align='center'>
            <subtitle>You haven't made any posts yet.</subtitle>
            </Container>
          ); 
          return(
            <Grid alignItems="center" justifyContent="center" container spacing={2} marginTop marginBottom>
            {userPosts.map(post => { 
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

export default UserPostList;