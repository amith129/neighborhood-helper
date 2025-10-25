import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import "./App.css"; // make sure the path is correct

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div id="app-container">
      {/* MAIN HEADING */}
      <h1 className="main-heading">Neighborhood Helper 🏘️</h1>

      {/* Form for new posts */}
      <PostForm onPost={() => setRefresh(!refresh)} />

      {/* All posts */}
      <PostList refresh={refresh} />
    </div>
  );
}

export default App;
