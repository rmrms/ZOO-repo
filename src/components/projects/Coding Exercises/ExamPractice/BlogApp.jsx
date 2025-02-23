import { useState } from "react";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";

const BlogApp = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (title, content) => {
    const newPost = { id: Date.now(), title, content };
    setPosts([newPost, ...posts]);
  };

  const removePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <div className="container mt-5">
      <h1>My Blog</h1>
      <BlogForm addPost={addPost} />
      <BlogList posts={posts} removePost={removePost} />
    </div>
  );
};

export default BlogApp;
