import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const ImageFetch3rd = () => {
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

  const handleNumImagesChange = (e) => {
    setNumImages(e.target.value);
    setLoading(true);
    setError(null);
  };

  return (
    <div className="container mt-5">
      <h1>Random Images</h1>
      <div className="mb-3">
        <Form.Label>Select Number of Images: {numImages}</Form.Label>
        <Form.Range
          min={1}
          max={50}
          value={numImages}
          onChange={handleNumImagesChange}
        />
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

export default ImageFetch3rd;
