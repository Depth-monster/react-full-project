import React, { useMemo, useState } from "react";
import Counter from "./components/Counter";
import PostFilter from "./components/PostFilter";
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

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("Use memo works");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    ); //search by titles
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm createPost={createPost} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        posts={sortedSearchedPosts}
        removePost={removePost}
        title="JS posts"
      />
    </div>
  );
}

export default App;
