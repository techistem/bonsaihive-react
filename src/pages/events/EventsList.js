import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/EventCardsSidebar.module.css";


function EventsList() {
  const currentUser = useCurrentUser();
  const history = useHistory();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get("/events/?ordering=start_time");
        setEvents(data.results || data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch events:", error);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) 
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <div className="spinner"></div>
        <p>Loading events...</p>
      </div>
    );

  if (error)
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <div className="EventCardsSidebar">
      <h2 className={styles.header}>Upcoming Events</h2>

      {currentUser && (
        <button
          onClick={() => history.push("/events/create")}
          style={{ marginBottom: "1rem" }}
        >
          Create New Event
        </button>
      )}

      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        events.map((event) => (
          <Link
            key={event.id}
            to={`/events/${event.id}`}
            className={styles.Card}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{event.title}</h3>
              <p>{event.description || "No description available."}</p>
              <p className={styles.CardDate}>
                {event.start_time
                  ? new Date(event.start_time).toLocaleDateString()
                  : "Start date not specified."}
              </p>
              {event.end_time && (
                <p style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>
                  <strong>End:</strong> {new Date(event.end_time).toLocaleDateString()}
                </p>
              )}
              {event.location && (
                <p style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>
                  <strong>Location:</strong> {event.location}
                </p>
              )}
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default EventsList;
