import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function DataDisplay({ data }) {
  return (
    <div>
      <h2>Fetched Data:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const PracticeProblem1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData(["Item 1", "Item 2", "Item 3"]);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1>Advanced Practice Problem with useState, useEffect, and Props</h1>
      {loading ? <p>Loading...</p> : <DataDisplay data={data} />}
    </div>
  );
};

export default PracticeProblem1;
