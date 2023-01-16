import React from "react";
import PostItems from "./PostItems";

const PostList = ({ posts, title, removePost }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Post something!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((posts, index) => (
        <PostItems
          posts={posts}
          removePost={removePost}
          number={index + 1}
          key={posts.id}
        />
      ))}
    </div>
  );
};

export default PostList;
