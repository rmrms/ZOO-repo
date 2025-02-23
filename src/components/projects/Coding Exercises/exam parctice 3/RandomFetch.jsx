import { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownButton,
  Table,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const RandomFetch = () => {
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
      <DropdownButton
        id="dropdown-basic-button"
        title="Select Format"
        className="mb-3"
      >
        <Dropdown.Item onClick={() => handleFormatChange("table")}>
          Striped Table
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleFormatChange("boxes")}>
          Small Boxes
        </Dropdown.Item>
      </DropdownButton>
      {loading && <p>Loading...</p>}
      {error && <p className="alert alert-danger">{error}</p>}
      {format === "table" && (
        <Table striped bordered hover>
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
        </Table>
      )}
      {format === "boxes" && (
        <Container>
          <Row>
            {data.map((item) => (
              <Col key={item.id} md={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.body}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default RandomFetch;
