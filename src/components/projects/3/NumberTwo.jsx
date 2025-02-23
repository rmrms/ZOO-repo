import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NumberTwo.css";

export default function NumberTwo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/");
      const result = await response.json();
      setData(result.results[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Ultra Modern Profile Design</h1>
      <div className="d-flex justify-content-center mb-4">
        <button className="btn btn-primary" onClick={fetchData}>
          {loading ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            "Fetch Data"
          )}
        </button>
      </div>
      {data && (
        <div className="card profile-card shadow-sm" style={{ width: "18rem" }}>
          <div className="profile-img-container">
            <img
              src={data.picture.large}
              className="card-img-top profile-img"
              alt="User"
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">
              {data.name.first} {data.name.last}
            </h5>
            <p className="card-text">Email: {data.email}</p>
            <p className="card-text">
              Location: {data.location.city}, {data.location.country}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
