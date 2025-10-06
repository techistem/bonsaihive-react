import React, { useEffect, useState } from "react";
import { Container, Alert, Spinner } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import ReviewCreateForm from "../reviews/ReviewCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/ReviewsPage.module.css";
import ReviewCard from "./ReviewCard";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState("");
  const [expandedIds, setExpandedIds] = useState([]);
  const [editReviewId, setEditReviewId] = useState(null);

  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axiosReq.get("/reviews/");
        setReviews(data?.results);
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

  const handleDelete = async (id) => {
    try {
      await axiosReq.delete(`/reviews/${id}/`);
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== id)
      );
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Container className={styles.container}>
      <div className={styles.reviewBox}>
        {currentUser && (
          <div className="mb-3">
            <ReviewCreateForm />
          </div>
        )}
        <h3 className={styles.header}>All Reviews</h3>
        {reviews?.length ? (
          reviews.map((review) => {
            const is_owner = currentUser?.username === review.owner_username;
            return (
              <ReviewCard
                handleDelete={handleDelete}
                review={review}
                is_owner={is_owner}
                setEditReviewId={setEditReviewId}
                editReviewId={editReviewId}
                setReviews={setReviews}
                expandedIds={expandedIds}
                toggleExpand={toggleExpand}
                truncateText={truncateText}
                key={review.id}
              />
            );
          })
        ) : (
          <Alert variant="info">No reviews yet.</Alert>
        )}
      </div>
    </Container>
  );
};

export default ReviewsPage;
