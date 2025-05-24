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
    <div style={{ background: "#fff", padding: "1rem", borderRadius: "8px" }}>
      <h2>{event.title}</h2>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Start:</strong> {new Date(event.start_time).toLocaleString()}</p>
      <p><strong>End:</strong> {new Date(event.end_time).toLocaleString()}</p>
      <p><strong>Location:</strong> {event.location}</p>
    </div>
  );
}

export default EventDetail;
