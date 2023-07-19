import React from "react";
import PostList from "./redux/features/Posts/postList";
import PostForm from "./redux/features/Posts/PostForm";

const App = () => {
  return (
    <main>
      <PostList />
      <PostForm />
    </main>
  );
};

export default App;
