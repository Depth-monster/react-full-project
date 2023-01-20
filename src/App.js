import React, { useEffect, useMemo, useState } from "react";
import Counter from "./components/Counter";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostItems from "./components/PostItems";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import MyModal from "./UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([
    // {
    //   id: 1,
    //   title: "Delphi and Rust",
    //   body: "Similar sides of languages",
    // },
    // {
    //   id: 2,
    //   title: "Go and Python",
    //   body: "Aaaa which one is more dynamic",
    // },
    // {
    //   id: 3,
    //   title: "ABC PASCAL and JS",
    //   body: "Comparing two technologies",
    // },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostLoading, errorMessage] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  // async function fetchPosts() {
  //   setIsPostLoading(true);
  //   const posts = await PostService.getAll();
  //   setPosts(posts);
  //   setIsPostLoading(false);
  // }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Add post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </MyModal>
      <hr style={{ margin: "10px 0" }} />

      <PostFilter filter={filter} setFilter={setFilter} />
     
      {errorMessage && <h1> {errorMessage} detected in try</h1>}
      
      {isPostLoading ? (
        <Loader />
      ) : (
        <PostList
          posts={sortedSearchedPosts}
          removePost={removePost}
          title="JS posts"
        />
      )}
    </div>
  );
}

export default App;
