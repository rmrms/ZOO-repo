import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PracticeProject2 = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setPosts(result);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setUsers(result);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchPosts(), fetchUsers()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4">Practice Project 2</h1>
        <p className="lead">
          This is the base of Practice Project 2 component.
        </p>
      </div>
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {error && (
        <div className="alert alert-danger text-center" role="alert">
          Error: {error}
        </div>
      )}
      {!loading && !error && (
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-center">Posts</h2>
            <ul className="list-group">
              {posts.map((item) => (
                <li key={item.id} className="list-group-item">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h2 className="text-center">Users</h2>
            <ul className="list-group">
              {users.map((user) => (
                <li key={user.id} className="list-group-item">
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticeProject2;
