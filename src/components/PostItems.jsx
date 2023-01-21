import React from "react";
import MyButton from "../UI/button/MyButton";
import { useNavigate } from "react-router";

const PostItems = (props) => {
  const navigate = useNavigate();
  //console.log(navigate);
  // debugger
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.posts.id}. {props.posts.title}
        </strong>
        <div>{props.posts.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/${props.posts.id}`)}>
          Open
        </MyButton>
        <MyButton onClick={() => props.removePost(props.posts)}>
          delete
        </MyButton>
      </div>
    </div>
  );
};

export default PostItems;
