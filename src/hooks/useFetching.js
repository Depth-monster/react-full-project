import { useState } from "react";
//custom hook


export const useFetching = (callback) => {
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async (...args) => {
    try {
      setIsPostLoading(true);
      await callback(...args)
    } catch (e) {
      setError(e.message);
    } finally {
      setIsPostLoading(false);
    }
  };

  return [fetching, isPostLoading, error];
};
