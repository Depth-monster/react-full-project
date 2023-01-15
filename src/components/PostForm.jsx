import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const PostForm = ({ createPost }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addPost = (e) => {
    e.preventDefault();

    const newPost = { ...post, id: Date.now() };
    createPost(newPost);
    // setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })} //attention
        type="text"
        placeholder="Post title"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Post description"
      />
      <MyButton onClick={addPost}>Add post</MyButton>
    </form>
  );
};

export default PostForm;
