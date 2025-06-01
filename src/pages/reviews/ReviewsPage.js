import React, { useEffect, useState } from "react";
import { Container, Alert, Card, Spinner } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import ReviewCreateForm from "../reviews/ReviewCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/ReviewsPage.module.css";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState("");
  const [expandedIds, setExpandedIds] = useState([]);

  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axiosReq.get("/reviews/");
        setReviews(data.results);
      } catch {
        setError("An error occurred while loading reviews.");
      } finally {
        setHasLoaded(true);
      }
    };
    fetchReviews();
  }, []);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const truncateText = (text, id) => {
    const maxLength = 200;
    if (text.length <= maxLength || expandedIds.includes(id)) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  if (error) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (!hasLoaded) {
    return (
      <Container className={`${styles.container} text-center mt-5`}>
        <Spinner animation="border" role="status" />
        <span className="sr-only">Loading...</span>
      </Container>
    );
  }

  return (
    <Container className={styles.container}>
      <div className={styles.reviewBox}>
        {currentUser && (
          <div className="mb-3">
            <ReviewCreateForm />
          </div>
        )}
        <h3 className={styles.header}>All Reviews</h3>
        {reviews.length ? (
          reviews.map((review) => (
            <Card key={review.id} className={`${styles.reviewCard} mb-3`}>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>{review.title}</Card.Title>
                <Card.Subtitle className={`mb-2 ${styles.cardSubtitle}`}>
                  {review.owner} | Rating: {review.rating}
                </Card.Subtitle>
                <Card.Text>
                  {truncateText(review.content, review.id)}
                  {review.content.length > 200 && (
                    <span
                      onClick={() => toggleExpand(review.id)}
                      style={{ color: "#A2AD63", cursor: "pointer", marginLeft: "8px" }}
                    >
                      {expandedIds.includes(review.id) ? "Show Less" : "Read More"}
                    </span>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Alert variant="info">No reviews yet.</Alert>
        )}
      </div>
    </Container>
  );
};

export default ReviewsPage;
