import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../util/auth';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../graphql/postQueries';
import convertDate from '../actions/ConvertDate';
import randomColor from '../actions/RandomColor';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkButton from './BookmarkButton';
import DeleteButton from './DeleteButton';
import ShareButton from './ShareButton';



function PostCard({
    post: { id, createdAt, title, rating, location, image, name, description, likes, likeCount }
  }){
    const { user } = useContext(AuthContext);

    return(
        <div key={id}>
        <Card sx={{width:320}} variant="outlined">
        <CardActionArea component={Link} to={`posts/${id}`}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: randomColor() }} aria-label={name}>
                {name.substring(0,1)}
              </Avatar>
            }
            titleTypographyProps={{fontWeight:'bold'}}
            title={location}
            subheader={
              <Rating value={Number.parseInt(rating,10)} size="small" style={{color: "#ffb6c1"}} icon={<FavoriteIcon fontSize="inherit" />} emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} readOnly />
            }
          />
          <CardMedia
            component="img"
            height="194"
            image={image}
          />
          <CardContent style={{height:"100px", overflow:"auto"}}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description.substring(0,128)}
            </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions disableSpacing style={{display: "flex", justifyContent: "flex-end"}}>
            <Typography variant="body2" color="text.secondary" style={{marginRight: "auto"}}>
              {convertDate(createdAt)}
            </Typography>
            {user && user.name === name && <DeleteButton postId={id} /> || <BookmarkButton user={user} post={{ id, likes, likeCount }} />}
            <ShareButton postId={id}/>
          </CardActions>
        </Card>
        </div>
      );
}

export default PostCard;