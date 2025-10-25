import { useState } from "react";
import axios from "axios";

const PostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/posts", {
        title,
        description,
        category,
      });
      onPostCreated(res.data); // notify parent
      setTitle("");
      setDescription("");
      setCategory("");
    } catch (err) {
      console.error(err);
      alert("Error creating post");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Help Request</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
