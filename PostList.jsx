import { useState, useEffect } from "react";
import axios from "axios";

const PostList = ({ refresh }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts");
        setPosts(res.data);
      } catch (err) {
        console.error(err);
        alert("Error fetching posts");
      }
    };
    fetchPosts();
  }, [refresh]); // refresh triggers re-fetch

  return (
    <div className="posts-wrapper">
  <h2>All Help Requests</h2>
  {posts.length === 0 ? (
    <p>No posts yet</p>
  ) : (
    posts.map((post) => (
      <div key={post._id} className="post">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <p><strong>Category:</strong> {post.category}</p>
      </div>
    ))
  )}
</div>

  );
};

export default PostList;
