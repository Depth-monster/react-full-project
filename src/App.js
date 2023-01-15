import React, { useState } from "react";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostItems from "./components/PostItems";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Delphi and Rust",
      body: "Similar sides of languages",
    
    },
    {
      id: 2,
      title: "Go and Python",
      body: "Aaaa which one is more dynamic",
    },
    {
      id: 3,
      title: "ABC PASCAL and JS",
      body: "Comparing two technologies",
      
    },
    // {
    //   id: 4,
    //   title: "JS fourth tutorial",
    //   body: "Description of the theme",
    // },
    // {
    //   id: 5,
    //   title: "JS fifth tutorial",
    //   body: "Description of the theme",
    // },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
   
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm createPost={createPost} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by"
          options={[
            { value: "title", name: "Title" },
            { value: "body", name: "Description" },
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList posts={posts} removePost={removePost} title="JS posts" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Post something!</h1>
      )}
    </div>
  );
}

export default App;
