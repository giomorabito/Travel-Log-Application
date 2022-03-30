import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import LinkIcon from '@mui/icons-material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

function ShareButton({postId}){
    const handleShare = e => {
        e.preventDefault()
    
        const ahref = `${window.location.href}/${postId}`
        const encodedAhref = encodeURIComponent(ahref)
        let link;
    
        switch (e.currentTarget.id) {
          case "facebook":
            link = `https://www.facebook.com/sharer/sharer.php?u=${ahref}`
            open(link)
            break
    
          case "twitter":
            link = `https://twitter.com/intent/tweet?url=${encodedAhref}`
            open(link)
            break
    
          case "copy":
            navigator.clipboard.writeText(ahref)
            break
    
          default:
            break
        }
    }

    const open = socialLink => {
        window.open(socialLink, "_blank")
    }

    return(
        <PopupState variant="popper" popupId="demo-popup-popper">
        {popupState => (
          <div>
            <IconButton aria-label="share" {...bindToggle(popupState)}>
                <ShareIcon />
            </IconButton>
            <Popper {...bindPopper(popupState)} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <List dense={true}>
                      <ListItem
                        button
                        id="facebook"
                        onClick={handleShare}
                      >
                        <ListItemIcon>
                          <FacebookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Facebook" />
                      </ListItem>
                      <ListItem
                        button
                        id="twitter"
                        onClick={handleShare}
                      >
                        <ListItemIcon>
                          <TwitterIcon />
                        </ListItemIcon>
                        <ListItemText primary="Twitter" />
                      </ListItem>
                      <ListItem
                        button
                        id="copy"
                        onClick={handleShare}
                      >
                        <ListItemIcon>
                          <LinkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Copy Link" />
                      </ListItem>
                    </List>
                  </Paper>
                </Fade>
              )}
            </Popper>
         </div>
        )}
      </PopupState>
    );
}

export default ShareButton;