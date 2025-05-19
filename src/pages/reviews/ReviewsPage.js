import React, { useEffect, useState } from "react";
import { Container, Alert, Card } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { Spinner } from "react-bootstrap";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axiosReq.get("/reviews/");
        setReviews(data.results); 
      } catch {
        setError("An error occurred while loading posts with reviews.");
      } finally {
        setHasLoaded(true);
      }
    };
    fetchReviews();
  }, []);

  if (error) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (!hasLoaded) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status" />
        <span className="sr-only">Loading...</span>
      </Container>
    );
  }

  return (
    <Container>
      <h3 className="my-4">All Reviews</h3>
      {reviews.length ? (
        reviews.map(review => (
          <Card key={review.id} className="mb-3">
            <Card.Body>
              <Card.Title>{review.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {review.owner} | Rating: {review.rating}
              </Card.Subtitle>
              <Card.Text>{review.content}</Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <Alert variant="info">No posts with reviews yet.</Alert>
      )}
    </Container>
  );
};

export default ReviewsPage;
