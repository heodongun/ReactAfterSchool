import './styles.css';
import { useState } from 'react';

function Comment(props) {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className="wrapper">
      <div className="imageContainer">
        <img
          className="image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-comment.svg/200px-Circle-icons-comment.svg"
          alt="comment icon" 
        />
      </div>
      <div className="contentContainer">
        <span className="nameText" style={{ color: 'darkcyan', fontWeight: 'bold' }}>
          {props.name}
        </span>
        <span className="okText">
          <span onClick={() => setGood(good + 1)}> {good}</span>
          <span onClick={() => setBad(bad + 1)}> {bad}</span>
        </span>
        <span className="commentText">{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;