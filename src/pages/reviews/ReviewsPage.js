import React, { useEffect, useState } from "react";
import { Container, Spinner, Alert, Card } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axiosReq.get("/reviews/");
        setReviews(data);
        setHasLoaded(true);
      } catch (err) {
        setError("An error occurred while loading reviews.");
      }
    };

    fetchReviews();
  }, []);

  if (!hasLoaded && !error) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status" />
        <span className="sr-only">Loading...</span>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container>
      <h3 className="my-4">Reviews</h3>
      {reviews.length ? (
        reviews.map((review) => (
          <Card key={review.id} className="mb-3">
            <Card.Body>
              <Card.Title>{review.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {review.owner} - Rating: {review.rating}/5
              </Card.Subtitle>
              <Card.Text>{review.content}</Card.Text>
              <small className="text-muted">
                Created: {review.created_at}
              </small>
            </Card.Body>
          </Card>
        ))
      ) : (
        <Alert variant="info">No reviews yet.</Alert>
      )}
    </Container>
  );
};

export default ReviewsPage;
