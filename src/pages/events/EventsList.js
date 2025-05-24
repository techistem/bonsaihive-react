import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext"; 

function EventsList() {
  const currentUser = useCurrentUser();
  const history = useHistory();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get("/events/?ordering=start_time");
        setEvents(data.results || data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;

  return (
    <div>
      <h2>Upcoming Events</h2>
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
            style={{ textDecoration: "none", color: "inherit" }}
          >

            <div style={{ border: "1px solid #ddd", margin: "1rem 0", padding: "1rem" }}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p><strong>Start Time:</strong> {new Date(event.start_time).toLocaleString()}. 
              </p>
              <p><strong>End Time:</strong> {new Date(event.end_time).toLocaleString()}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default EventsList;
