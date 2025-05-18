import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useHistory, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

const ReviewCreateForm = () => {
  useRedirect("loggedOut");

  const [reviewData, setReviewData] = useState({
    title: "",
    content: "",
  });
  const [rating, setRating] = useState(0); // 0–5 scale
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const { id } = useParams(); // post id

  const handleRating = (rate) => {
    setRating(rate / 20); // because rate is 0–100, we convert it to 0–5
  };

  const handleChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", reviewData.title);
    formData.append("content", reviewData.content);
    formData.append("rating", rating);
    formData.append("post", id);

    try {
      await axiosReq.post("/reviews/", formData);
      history.goBack(); // go back to the post page or previous
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container className={appStyles.Content}>
        <h3 className="text-center">Leave a Review</h3>

        <Form.Group>
          <Form.Label>Rating (1-5)</Form.Label>
          <div className="d-flex justify-content-center mb-2">
            <Rating
              onClick={handleRating}
              initialValue={rating * 20}
              size={25}
              allowFraction
              transition
              showTooltip
              tooltipArray={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
            />
          </div>
          {errors?.rating?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Form.Group>

        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={reviewData.title}
            onChange={handleChange}
            placeholder="Enter review title"
          />
          {errors?.title?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Form.Group>

        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="content"
            value={reviewData.content}
            onChange={handleChange}
            placeholder="Write your review..."
          />
          {errors?.content?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Form.Group>

        <div className="text-center mt-3">
          <Button
            variant="secondary"
            onClick={() => history.goBack()}
            className={`mr-2 ${btnStyles.Button}`}
          >
            Cancel
          </Button>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            type="submit"
          >
            Submit Review
          </Button>
        </div>
      </Container>
    </Form>
  );
};

export default ReviewCreateForm;
