import BlogPost from "./BlogPost";

const BlogList = ({ posts, removePost }) => {
  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <BlogPost key={post.id} post={post} removePost={removePost} />
        ))
      )}
    </div>
  );
};

export default BlogList;