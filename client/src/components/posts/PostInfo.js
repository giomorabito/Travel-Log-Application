import React, {useContext} from 'react';
import { Query} from 'react-apollo';
import { GET_POST } from '../../graphql/postQueries';
import convertDate from '../actions/ConvertDate';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/Favorite';
import BookmarkButton from '../elements/BookmarkButton';
import DeleteButton from '../elements/DeleteButton';
import ShareButton from '../elements/ShareButton';
import EditButton from '../elements/EditButton';
import { AuthContext } from '../../util/auth';

function PostInfo(props) {
  const { user } = useContext(AuthContext);
  return (
    <Query query={GET_POST} variables={{ id: props.match.params._id }}>  
      {function({ loading, error, data }) {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        const { post } = data;
        const id = post.id;
        const likes = post.likes;
        const likeCount = post.likeCount;
        document.title = `${post.title} | Pausing Moments`;
        return (
        <Grid container justifyContent="center" direction="column" alignItems="center" marginTop={3}>
            <Box component="img" 
            marginBottom={2}
            sx={{
            height: 360,
            width: 600,
            maxHeight: { xs: 225, md: 360 },
            maxWidth: { xs: 375, md: 600 },
            objectFit: 'cover',
            }}
            src={post.image}
            />
            <Box marginBottom={2}>
              <Typography variant="h5" component="div" align="center" marginLeft={1.8}>
                {post.title}
                {user && user.name === post.name && <DeleteButton postId={id} /> || <BookmarkButton user={user} post={{ id, likes, likeCount }} />}
                {user && user.name === post.name && <EditButton postId={id} />}
              </Typography>
              <Typography variant="h6" component="div" align="center">
                Posted by: {post.name}
              </Typography>
              <Rating value={Number.parseInt(post.rating)} size="small" style={{color: "#ffb6c1", verticalAlign:"top"}} icon={<FavoriteIcon fontSize="inherit" />} emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} readOnly />
              <Typography variant="subtitle" paddingLeft={1}>
                {post.location}
              </Typography>
            </Box>
            <Box marginBottom={2} sx={{maxWidth:'600px'}}>
              <Typography variant="body" component="div" align="center" >
                {post.description}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" component="div">
                Published on {convertDate(post.createdAt)}
              </Typography>
            </Box> 
            <ShareButton postId={id} />    
        </Grid>
        );
      }}
    </Query>
  )
}

export default PostInfo