import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await axios.get(`/events/${id}/`);
        setEvent(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching event:", error);
        setError("An error occurred while loading the event. Please try again.");
      }
    };
    fetchEvent();
  }, [id]);
  if (error) return <p style={{ color: "olive green", textAlign: "center" }}>{error}</p>;
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
        <p><strong>Description:</strong> {event.description || "No description available."}</p>
<p><strong>Start:</strong> 
  {event.start_time 
    ? new Date(event.start_time).toLocaleString() 
    : "Start time not specified."}
</p>
<p><strong>End:</strong> 
  {event.end_time 
    ? new Date(event.end_time).toLocaleString() 
    : "End time not specified."}
</p>
<p><strong>Location:</strong> {event.location || "Location not specified."}</p>
</div>
  );
}

export default EventDetail;
