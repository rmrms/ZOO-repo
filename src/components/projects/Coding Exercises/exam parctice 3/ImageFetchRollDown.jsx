import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ImageFetchRollDown = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [numImages, setNumImages] = useState(15);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://picsum.photos/v2/list?page=1&limit=${numImages}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setImages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [numImages]);

  const handleNumImagesChange = (newNumImages) => {
    setNumImages(newNumImages);
    setLoading(true);
    setError(null);
    setImages([]);
  };

  return (
    <div className="container mt-5">
      <h1>Random Images</h1>
      <div className="dropdown mb-3">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Number of Images
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleNumImagesChange(5)}
            >
              5 Images
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleNumImagesChange(10)}
            >
              10 Images
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleNumImagesChange(15)}
            >
              15 Images
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleNumImagesChange(20)}
            >
              20 Images
            </button>
          </li>
        </ul>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="alert alert-danger">{error}</p>}
      <div className="row">
        {images.map((image) => (
          <div key={image.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={image.download_url}
                alt={image.author}
                className="card-img-top"
              />
              <div className="card-body">
                <p className="card-text">Author: {image.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageFetchRollDown;
