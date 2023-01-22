import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  //console.log(params.id)

  const [fetchSomeId, isPostLoading, error] = useFetching(async (id) => {
    const response = await PostService.getPageById(id);
    setPost(response.data);
  });

  const [fetchCommentToPost, isCommentLoading, errorComment] = useFetching(
    async (id) => {
      const response = await PostService.getComments(id);
      console.log(response.data);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchSomeId(params.id);
    fetchCommentToPost(params.id);
  }, []);

  return (
    <div className="App">
      <h1>Post with id :{post.id}</h1>

      {error && <h1>an error has occurred</h1>}
      {isPostLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.body}
        </div>
      )}

      <h2>Comments</h2>

      {errorComment && <h1>an error has occurred</h1>}

      {isCommentLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map(comm => (
            <div key={comm.id}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
