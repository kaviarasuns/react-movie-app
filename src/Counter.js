import { useState } from "react";
import IconButton from '@mui/material/IconButton';

export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counters-container">
      <IconButton
        color="primary"
        className="like-button"
        aria-label="Movie details">
      </IconButton>
      <button className="like-button" onClick={() => setLike(like + 1)}> 👍 {like}</button>
      <button className="dislike-button" onClick={() => setDislike(dislike + 1)}> 😕 {dislike}</button>
    </div>
  );
}
