import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function DataDisplay({ data }) {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title">Fetched Data:</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const NumberOne = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
      <h1 className="mb-4">
        Advanced Practice Problem with useState, useEffect and Props
      </h1>
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <DataDisplay data={data} />
      )}
    </div>
  );
};

export default NumberOne;
