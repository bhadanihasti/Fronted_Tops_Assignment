import React, { useState, useEffect } from "react";

function post() {
  const [post, setPost] = useState([]);

  const getPost = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <h1>Post Details</h1>
      <ul>
        {post.map((index, item) => (
          <li key={item}>{index.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default post;
