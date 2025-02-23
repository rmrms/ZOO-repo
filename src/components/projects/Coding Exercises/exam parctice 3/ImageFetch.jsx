import { useState, useEffect } from "react";

const ImageFetch = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=1&limit=15"
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
  }, []);

  return (
    <div className="container mt-5">
      <h1>Random Images</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="alert alert-dange">{error}</p>}
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

export default ImageFetch;
