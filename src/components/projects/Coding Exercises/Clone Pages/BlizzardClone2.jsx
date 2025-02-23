import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BlizzardClone2 = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Blizzard Clone
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Games
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Esports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container-fluid bg-dark text-white text-center py-5">
        <h1 className="display-4">Welcome to Blizzard Clone</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="btn btn-primary btn-lg">Learn More</button>
      </div>

      {/* Games Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Our Games</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt="Game 1"
              />
              <div className="card-body">
                <h5 className="card-title">Game 1</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt="Game 2"
              />
              <div className="card-body">
                <h5 className="card-title">Game 2</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt="Game 3"
              />
              <div className="card-body">
                <h5 className="card-title">Game 3</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Latest News</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/600x300"
                className="card-img-top"
                alt="News 1"
              />
              <div className="card-body">
                <h5 className="card-title">News 1</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/600x300"
                className="card-img-top"
                alt="News 2"
              />
              <div className="card-body">
                <h5 className="card-title">News 2</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>&copy; 2025 Blizzard Clone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlizzardClone2;
