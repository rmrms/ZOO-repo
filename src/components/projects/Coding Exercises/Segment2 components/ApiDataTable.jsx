import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ApiDataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="container mt-5">
      <button className="btn btn-primary mb-3" onClick={toggleExpand}>
        {isExpanded ? "Hide" : "Expand"} API Data Table
      </button>
      {isExpanded && (
        <>
          <h1>API Data Table</h1>
          {loading && <p>Loading...</p>}
          {error && <p className="alert alert-danger">{error}</p>}
          {!loading && !error && (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default ApiDataTable;
