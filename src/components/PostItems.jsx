import React from 'react';
import MyButton from '../UI/button/MyButton';

const PostItems = (props) => {
    debugger
    return (
        <div className="post">
        <div className="post__content">
          <strong>{props.number}. {props.posts.title}</strong>
          <div>{props.posts.body}</div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => props.removePost(props.posts)}>delete</MyButton>
        </div>
      </div>
    );
};

export default PostItems;