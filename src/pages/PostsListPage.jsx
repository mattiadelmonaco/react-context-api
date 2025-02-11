import { useState, useEffect } from "react";

import axios from "axios";
import PostsListComp from "../components/PostsListComp";

import { useSearchBarContext } from "../context/SearchBarContext";

export default function PostList() {
  const [postData, setPostData] = useState([]);
  const { search } = useSearchBarContext("");

  // CRUD

  // index
  const fetchPosts = () => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setPostData(res.data));
  };

  useEffect(fetchPosts, []);

  const postsFiltered = postData.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="ms-container">
      <PostsListComp postsFiltered={postsFiltered} />
    </section>
  );
}
