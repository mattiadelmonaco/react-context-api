import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

import axios from "axios";
import PostsListComp from "../components/PostsListComp";

export default function PostList() {
  const [postData, setPostData] = useState([]);

  // CRUD

  // index
  const fetchPosts = () => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setPostData(res.data));
  };

  useEffect(fetchPosts, []);

  return (
    <section className="ms-container">
      <SearchBar />
      <PostsListComp postData={postData} />
    </section>
  );
}
