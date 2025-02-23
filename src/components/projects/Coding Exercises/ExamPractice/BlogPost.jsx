const BlogPost = ({ post, removePost }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.content}</p>
        <button className="btn btn-danger" onClick={() => removePost(post.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
