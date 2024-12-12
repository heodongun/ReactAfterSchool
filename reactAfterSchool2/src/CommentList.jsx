import React from "react";
import Comment from "./Comment"; // Comment 컴포넌트 import

const comments = [
  {
    name: "김민성",
    comment: "안녕하세요. 김민성입니다.",
  },
  {
    name: "박다온",
    comment: "리액트로 프로젝트 만들고 있습니다.",
  },
  {
    name: "백도준",
    comment: "리액트 재미있어요.",
  },
];

function CommentList(props) {
  return (
    <div>
      {}
      {comments.map((comment, index) => (
        <Comment key={index} name={comment.name} comment={comment.comment} />
      ))}
    </div>
  );
}

export default CommentList;