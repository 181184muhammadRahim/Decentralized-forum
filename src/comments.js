import React from "react";

function Comments(props) {
  let comment = props.comments;
  let print = comment.map((comment) => {
    console.log(comment.message);
    return <h3>{comment.message}</h3>;
  });

  return <div>{print}</div>;
}

export default Comments;
