import React from 'react';
import { useMutation } from 'react-apollo';
import { CREATE_POST } from '../../graphql/postQueries'; 
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from '../../util/hooks';
import { useHistory } from "react-router-dom";

function PostAdd() {
  let history = useHistory();

  function handleCancel(id) {
    history.push(`/posts/`);
  }

  document.title = "Create a post | Pausing Moments";

  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    title: '',
    rating: '',
    description: '',
    location: '',
    image: '',
  });

  const [createPost] = useMutation(CREATE_POST, {
    variables: values,
    update(){
      history.push('/posts');
      window.location.reload(false);
    }
  });

  function createPostCallback() {
    createPost();
  }

  return (
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
            Create a post
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Title of post"
                  name="title"
                  value={values.title}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="location"
                  label="Location of travel"
                  name="location"
                  value={values.location}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="rating"
                  label="Rate your travel (1 to 5)"
                  name="rating"
                  value={values.rating}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  value={values.description}
                  onChange={onChange}
                  id="description"
                  multiline
                  rows={5}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="image"
                  label="Image link"
                  name="image"
                  value={values.image}
                  onChange={onChange}
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
              Post
            </Button>
            <Button
                        fullWidth
                        variant="contained"
                        style={{backgroundColor:"#adadad"}}
                        onClick={function() { handleCancel() }}
                      >
                        Cancel
                      </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
        </Box>
        
      </Container>
  );
};

export default PostAdd;