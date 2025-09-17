import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewEditForm = ({ review, setReviews, setEditReviewId }) => {
  const [title, setTitle] = useState(review.title);
  const [content, setContent] = useState(review.content);
  const [rating, setRating] = useState(review.rating);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosReq.put(`/reviews/${review.id}/`, {
        title,
        content,
        rating,
      });
      setReviews((prevReviews) =>
        prevReviews.map((r) => (r.id === review.id ? data : r))
      );
      setEditReviewId(null);
    } catch (err) {
      console.log(err);
      setError("Failed to update review. Please try again.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-2" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="content">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="rating">
        <Form.Label>Rating</Form.Label>
        <div className="d-flex justify-content-center mb-2">
          <Rating
            initialRating={rating}
            onChange={(rate) => setRating(Math.round(rate))}
            emptySymbol={<FaRegStar size={24} color="#385212" />}
            fullSymbol={<FaStar size={24} color="#fcd93a" />}
            fractions={2}
          />
        </div>
      </Form.Group>
      <Button type="submit" variant="success" className="me-2">
        Save
      </Button>
      <Button variant="secondary" onClick={() => setEditReviewId(null)}>
        Cancel
      </Button>
    </Form>
  );
};

export default ReviewEditForm;
