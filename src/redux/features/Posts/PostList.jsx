import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  return (
    <section className="p-4 bg-gray-200">
      <h2 className="text-2xl mb-4">Posts</h2>
      {posts.map((post) => {
        return (
          <article key={post.id} className="bg-white rounded p-4 mb-4">
            <h3 className="text-xl mb-2">{post.title}</h3>
            <p className="text-gray-800">{post.content}</p>
          </article>
        );
      })}
    </section>
  );
};

export default PostList;
