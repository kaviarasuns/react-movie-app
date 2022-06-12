import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const incrementLike = () => setLike(like + 1)
  return (
    <div className="counters-container">
      
      <IconButton
        color="primary"
        aria-label="Movie details" onClick={incrementLike}>
        <Badge badgeContent={like} color="success">
        <ThumbUpIcon/>
      </Badge>
      </IconButton>
      
      <IconButton
        color="primary"
        aria-label="Movie details" onClick={() => setDislike(dislike + 1)}>
          <Badge badgeContent={dislike} color="error">
      <ThumbDownIcon/>
        </Badge>
      </IconButton>
      
      {/* <button className="like-button" onClick={incrementLike}> 👍 {like}</button> */} 
    </div>
  );
}
