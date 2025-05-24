import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await axios.get(`/events/${id}/`);
        setEvent(data);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) return <p>Loading event...</p>;

  return (
    <div style={{
        background: "#f8f9fa",
        padding: "2rem",
        borderRadius: "12px",
        maxWidth: "600px",
        margin: "2rem auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{event.title}</h2>
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Start:</strong> {new Date(event.start_time).toLocaleString()}</p>
        <p><strong>End:</strong> {new Date(event.end_time).toLocaleString()}</p>
        <p><strong>Location:</strong> {event.location}</p>
      </div>
  );
}

export default EventDetail;
