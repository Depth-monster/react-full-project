import React from "react";
import PostItems from "./PostItems";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, title, removePost }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Post something!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((posts, index) => (
          <CSSTransition
            key={posts.id}
            timeout={500}
            classNames="post"
          >
            <PostItems
              posts={posts}
              removePost={removePost}
              number={index + 1}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
//
