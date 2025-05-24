import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/EventCardsSidebar.module.css";

function EventCardsSidebar() {
  const [events, setEvents] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch upcoming events - you can add ordering or filtering here
        const { data } = await axiosReq.get("/events/?ordering=start_time");
        setEvents(data.results);
        setHasLoaded(true);
      } catch (err) {
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className={styles.EventCardsSidebar}>
      <h5>Upcoming Events</h5>
      {!hasLoaded ? (
        <p>Loading...</p>
      ) : events.length ? (
        <Row xs={1} md={2} className="g-2">
          {events.map((event) => (
            <Col key={event.id}>
              <Card as={Link} to={`/events/${event.id}`} className={styles.Card}>
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>{new Date(event.start_time).toLocaleDateString()}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No upcoming events found.</p>
      )}
    </div>
  );
}

export default EventCardsSidebar;
