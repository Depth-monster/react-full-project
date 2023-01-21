import React, { useEffect, useState } from "react";

import {usePosts} from '../hooks/usePosts'
import {useFetching} from '../hooks/useFetching'
import PostService from '../API/PostService'
import {getPagesCount} from '../components/utils/pages'
import MyModal from "../UI/MyModal/MyModal"
import MyButton from '../UI/button/MyButton'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import Loader from '../UI/Loader/Loader'
import PostList from '../components/PostList'
import Pagination from '../UI/pagination/Pagination'

function Posts() {
    
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostLoading, errorMessage] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalCount, limit));
    }
  );

  console.log(totalPages);

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  // async function fetchPosts() {
  //   setIsPostLoading(true);
  //   const posts = await PostService.getAll();
  //   setPosts(posts);
  //   setIsPostLoading(false);
  // }
  const changePage = (p) => {
    setPage(p);
    fetchPosts(limit, p);
    
  };
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
      <Pagination changePage={changePage} totalPages={totalPages} page={page} />
    </div>
  );
}

export default Posts;
