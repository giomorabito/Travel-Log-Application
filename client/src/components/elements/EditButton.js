import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { useHistory } from "react-router-dom";


function EditButton({postId}){
    let history = useHistory();

    return(
        <div key={postId} style={{display: "inline"}}>
            <IconButton aria-label="edit" onClick={function handleEdit() {
        history.push(`/posts/${postId}/edit`)}}>
                <ModeEditOutlineOutlinedIcon />
            </IconButton>
        </div>
    );
}

export default EditButton;