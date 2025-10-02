import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/EventCardsSidebar.module.css";
import EventCard from "./EventCard";

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
        events.map((event) => <EventCard key={event.id} event={event} />)
      )}
    </div>
  );
}

export default EventsList;
