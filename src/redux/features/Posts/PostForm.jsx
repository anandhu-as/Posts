import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "./postsSlice";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title && content) {
      dispatch(addPosts(title, content));
      setTitle("");
      setContent("");
    }
  };

  return (
    <section className="p-4 bg-gray-200">
      <h2 className="text-2xl mb-4">Add new Post</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          className="border border-gray-400 rounded p-2 w-100"
          value={title}
          type="text"
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          className="border border-gray-400 rounded p-2 w-100"
          value={content}
          cols="30"
          rows="10"
          onChange={(event) => setContent(event.target.value)}
        ></textarea>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white rounded p-2 mt-4"
        onClick={handleAdd}
      >
        Save
      </button>
    </section>
  );
};

export default PostForm;
