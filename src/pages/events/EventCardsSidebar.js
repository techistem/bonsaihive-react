import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/EventCardsSidebar.module.css";

function EventCardsSidebar() {
  const [events, setEvents] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch upcoming events - you can add ordering or filtering here
        const { data } = await axiosReq.get("/events/?ordering=start_time");
        setEvents(data.results);
        setHasLoaded(true);
      } catch (err) {}
    };

    fetchEvents();
  }, []);

  const handleShowMore = () => {
    setVisibleCount(visibleCount + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(3);
  };

  return (
    <div className={styles.EventCardsSidebar}>
      <h5 className={styles.header}>Upcoming Events</h5>
      {!hasLoaded ? (
        <p>Loading...</p>
      ) : events.length ? (
        <>
          <Row xs={1} md={1} className="g-4">
            {events.slice(0, visibleCount).map((event) => (
              <Col key={event.id}>
                <Card
                  as={Link}
                  to={`/events/${event.id}`}
                  className={styles.Card}
                >
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>
                      {event.title}
                    </Card.Title>
                    <Card.Text className={styles.cardDate}>
                      {new Date(event.start_time).toLocaleDateString()}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {/* Show More / Show Less Buttons */}
          {events.length > 3 && (
            <div className={styles.showMoreContainer}>
              {visibleCount < events.length ? (
                <button
                  className={styles.showMoreButton}
                  onClick={handleShowMore}
                >
                  Show More
                </button>
              ) : (
                <button
                  className={styles.showMoreButton}
                  onClick={handleShowLess}
                >
                  Show Less
                </button>
              )}
            </div>
          )}
        </>
      ) : (
        <p>No upcoming events found.</p>
      )}
    </div>
  );
}

export default EventCardsSidebar;
