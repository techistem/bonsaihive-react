import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import styles from "../../styles/ReviewsPage.module.css";
import { MoreDropdown } from "../../components/MoreDropdown";
import ReviewEditForm from "../reviews/ReviewEditForm";

function ReviewCard({
  review,
  is_owner,
  handleDelete,
  setEditReviewId,
  editReviewId,
  setReviews,
  expandedIds,
  toggleExpand,
  truncateText,
}) {
  return (
    <Card key={review.id} className={`${styles.reviewCard} mb-3`}>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <Card.Subtitle className={`mb-2 ${styles.cardSubtitle}`}>
          {review.owner_username} | Rating: {review.rating}
        </Card.Subtitle>
        {is_owner && (
          <MoreDropdown
            handleEdit={() => setEditReviewId(review.id)}
            handleDelete={() => handleDelete(review.id)}
          />
        )}
      </Card.Header>
      <Card.Title className={styles.cardTitle}>{review.title}</Card.Title>
      <Card.Body>
        {editReviewId === review.id ? (
          <ReviewEditForm
            review={review}
            setReviews={setReviews}
            setEditReviewId={setEditReviewId}
          />
        ) : (
          <Card.Text>
            {truncateText(review.content, review.id)}
            {review.content.length > 200 && (
              <span
                onClick={() => toggleExpand(review.id)}
                style={{
                  color: "#A2AD63",
                  cursor: "pointer",
                  marginLeft: "8px",
                }}
              >
                {expandedIds.includes(review.id) ? "Show Less" : "Read More"}
              </span>
            )}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default ReviewCard;
