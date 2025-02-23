import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RegNewMember() {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const fetchCandidates = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/?results=20");
      const result = await response.json();
      setCandidates(result.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const handleRowClick = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedCandidates = [...candidates].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Register New Member</h1>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th onClick={() => handleSort("name.first")}>Name</th>
              <th onClick={() => handleSort("email")}>Email</th>
              <th onClick={() => handleSort("phone")}>Phone</th>
              <th onClick={() => handleSort("location.city")}>Location</th>
              <th onClick={() => handleSort("gender")}>Gender</th>
              <th onClick={() => handleSort("dob.age")}>Age</th>
            </tr>
          </thead>
          <tbody>
            {sortedCandidates.map((candidate) => (
              <tr
                key={candidate.login.uuid}
                onClick={() => handleRowClick(candidate)}
              >
                <td>{`${candidate.name.first} ${candidate.name.last}`}</td>
                <td>{candidate.email}</td>
                <td>{candidate.phone}</td>
                <td>{`${candidate.location.city}, ${candidate.location.country}`}</td>
                <td>{candidate.gender}</td>
                <td>{candidate.dob.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedCandidate && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{`${selectedCandidate.name.first} ${selectedCandidate.name.last}`}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedCandidate(null)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={selectedCandidate.picture.large}
                  alt="Profile"
                  className="img-fluid rounded-circle mb-3"
                />
                <p>Email: {selectedCandidate.email}</p>
                <p>Phone: {selectedCandidate.phone}</p>
                <p>
                  Location:{" "}
                  {`${selectedCandidate.location.city}, ${selectedCandidate.location.country}`}
                </p>
                <p>Gender: {selectedCandidate.gender}</p>
                <p>Age: {selectedCandidate.dob.age}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSelectedCandidate(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
