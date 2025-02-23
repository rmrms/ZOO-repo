import { useState, useEffect } from "react";

const RandomFetchPlainBootstrap = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [format, setFormat] = useState("table");

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

  const handleFormatChange = (format) => {
    setFormat(format);
  };

  return (
    <div className="container mt-5">
      <h1>Random Text Fetch</h1>
      <div className="dropdown mb-3">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Format
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleFormatChange("table")}
            >
              Striped Table
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleFormatChange("boxes")}
            >
              Small Boxes
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleFormatChange("list")}
            >
              List Group
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleFormatChange("accordion")}
            >
              Accordion
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleFormatChange("grid")}
            >
              Grid
            </button>
          </li>
        </ul>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="alert alert-danger">{error}</p>}
      {format === "table" && (
        <table className="table table-striped table-bordered table-hover">
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
      {format === "boxes" && (
        <div className="container">
          <div className="row">
            {data.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {format === "list" && (
        <ul className="list-group">
          {data.map((item) => (
            <li key={item.id} className="list-group-item">
              <h5>{item.title}</h5>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
      {format === "accordion" && (
        <div className="accordion" id="accordionExample">
          {data.map((item) => (
            <div className="accordion-item" key={item.id}>
              <h2 className="accordion-header" id={`heading${item.id}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${item.id}`}
                  aria-expanded="true"
                  aria-controls={`collapse${item.id}`}
                >
                  {item.title}
                </button>
              </h2>
              <div
                id={`collapse${item.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${item.id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {format === "grid" && (
        <div className="container">
          <div className="row">
            {data.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="p-3 border bg-light">
                  <h5>{item.title}</h5>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomFetchPlainBootstrap;
