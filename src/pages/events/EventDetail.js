import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const currentUser = useCurrentUser();
  const [showEditForm, setShowEditForm] = useState(false);

  const is_owner = currentUser?.username === event?.owner;

  const history = useHistory();

  const handleDelete = async () => {
    try {
      await axios.delete(`/events/${id}/`);
      history.push("/events");
    } catch (err) {
      console.log(err);
    }
  }

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
    // <div style={{
        // background: "#f8f9fa",
        // padding: "2rem",
        // borderRadius: "12px",
        // maxWidth: "600px",
        // margin: "2rem auto",
        // boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      // }}>
        // <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{event.title}</h2>
        // <p><strong>Description:</strong> {event.description || "No description available."}</p>
// <p><strong>Start:</strong> 
  // {event.start_time 
    // ? new Date(event.start_time).toLocaleString() 
    // : "Start time not specified."}
// </p>
// <p><strong>End:</strong> 
  // {event.end_time 
    // ? new Date(event.end_time).toLocaleString() 
    // : "End time not specified."}
//</p>
// <p><strong>Location:</strong> {event.location || "Location not specified."}</p>
// </div>
<Container className="my-4">
      <Card style={{ backgroundColor: "#D9CBA3" }}>
        <Card.Body>
          <Card.Header className="d-flex justify-content-between align-items-center mb-2 rounded" style={{ backgroundColor: "rgba(56, 82, 18, 0.8)", color: "#D9CBA3" }}>
            <h2>{event.title}</h2>
            {is_owner && !showEditForm && (
              <MoreDropdown
                handleEdit={() => setShowEditForm(true)}
                handleDelete={handleDelete}
              />
            )}
          </Card.Header>
          <Card.Text>{event.description}</Card.Text>
          <Card.Text>
            <strong>Start Time:</strong>{" "}
            {event.start_time
              ? new Date(event.start_time).toLocaleString()
              : "Not specified"}
          </Card.Text>
          <Card.Text>
            <strong>End Time:</strong>{" "}
            {event.end_time
              ? new Date(event.end_time).toLocaleString()
              : "Not specified"}
          </Card.Text>
          <Card.Text>
            <strong>Location:</strong> {event.location || "Not specified"}
          </Card.Text>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default EventDetail;
