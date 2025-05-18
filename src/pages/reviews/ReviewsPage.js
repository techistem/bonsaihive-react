import React, { useEffect, useState } from "react";
import { Container, Alert, Card } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { Spinner } from "react-bootstrap";

const ReviewsPage = () => {
  const [posts, setPosts] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get("/posts/");
        const postsWithReviews = data.filter(post => post.review_id !== null);
        setPosts(postsWithReviews);
      } catch {
        setError("An error occurred while loading posts with reviews.");
      } finally {
        setHasLoaded(true);
      }
    };
    fetchPosts();
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
      <h3 className="my-4">Posts with Reviews</h3>
      {posts.length ? (
        posts.map(post => (
          <Card key={post.id} className="mb-3">
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {post.owner} - Average Rating: {post.average_rating || "N/A"}
              </Card.Subtitle>
              <Card.Text>{post.content}</Card.Text>
              <hr />
              <h5>Review: {post.review_title}</h5>
              <p>{post.review_content}</p>
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
