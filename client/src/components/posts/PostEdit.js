import React, {useContext} from 'react';
import { AuthContext } from '../../util/auth';
import { Query, Mutation } from 'react-apollo';
import { GET_POST, UPDATE_POST } from '../../graphql/postQueries';
import { useHistory } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function PostEdit(props) {
  const { user } = useContext(AuthContext);
  let history = useHistory();

  function handleCancel(id) {
    props.history.push(`/posts/${id}`);
  }

  let title, description, rating, location, image;
  return (
    <Query query={GET_POST} variables={{ id: props.match.params._id }}>
      {function({ loading, error, data }) {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        const { post } = data;
        if(user === null || post.userId !== user.id){
          history.push(`/posts/${post.id}`);
        }
        return (
          <div>
            <Mutation mutation={UPDATE_POST}>
              {function(updatePost, { loading, error }) { 
                document.title = `Edit ${post.title} | Pausing Moments`;
                return( 
                  <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 4,
                      marginBottom: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Typography component="h1" variant="h5">
                      Edit {post.title}
                    </Typography>
                    <Box component="form" onSubmit={function(event) {
                      console.log(title);
                        event.preventDefault();
                        updatePost({ 
                          variables: {
                            id: post.id,
                            title: title.value,
                            description: description.value,
                            rating: rating.value,
                            location: location.value,
                            image: image.value
                          }
                        });
                        props.history.push(`/posts/${post.id}`);
                    }} noValidate sx={{ mt: 3 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            label="Title"
                            defaultValue = {post.title}
                            inputRef={function(node) { return title = node; }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            label="Location"
                            defaultValue = {post.location}
                            inputRef={function(node) { return location = node; }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            label="Rate your experience (1 to 5)"
                            defaultValue = {post.rating}
                            inputRef={function(node) { return rating = node; }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            label="Description"
                            defaultValue = {post.description}
                            inputRef={function(node) { return description = node; }}
                            multiline
                            rows={5}
                          />
                        </Grid>
                        
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            label="Image link"
                            inputRef={function(node) { return image = node; }}
                            defaultValue = {post.image}
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        style={{backgroundColor:"#d47863"}}
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Save Changes
                      </Button>
                      <Button
                        fullWidth
                        variant="contained"
                        style={{backgroundColor:"#adadad"}}
                        onClick={function() { handleCancel(post.id) }}
                      >
                        Cancel
                      </Button>
                      <Grid container justifyContent="flex-end">
                      </Grid>
                    </Box>
                  </Box>
                </Container>
                )
              }}
            </Mutation>
          </div>
        );
      }}
    </Query>      
  )
}

export default PostEdit;