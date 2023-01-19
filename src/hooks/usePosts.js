import { useMemo } from "react";

// useSortedPosts only sorts an array
export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    console.log("Use memo works");
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
};


// usePosts is used for searching already sorted array 
//(Search in sort array)
export const usePosts = (post, sort, query) => {
  const sortedPosts = useSortedPosts(post, sort);

  const sortedSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    ); //search by titles
  }, [query, sortedPosts]);
  return sortedSearchedPosts; // and finally it returns sorted and searched array
};
///