import React from 'react';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../graphql/postQueries';
import Grid from '@mui/material/Grid';
import PostCard from '../elements/PostCard';
import { Alert } from '@mui/material';

function PostList() {
  return(
      <Query query={GET_POSTS}> 
        {function({ loading, error, data }) { 
          if (loading) return "Loading...";
          if (error) return (
            <Alert severity="error">{error.message}</Alert>
          );
          const { posts } = data; 
          return(
            <Grid alignItems="center" justifyContent="center" container spacing={2} marginTop marginBottom>
            {posts.map(post => { 
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
  )
}

export default PostList;