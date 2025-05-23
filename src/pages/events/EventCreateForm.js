import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


function EventCreateForm() {
  const currentUser = useCurrentUser();
  const history = useHistory();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    start_time: "",
    end_time: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  if (!currentUser) {
    return <p>You need to log in to create a new event.</p>;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      await axios.post(
        "/events/",
        formData);
        
      setSuccess(true);
      setFormData({
        title: "",
        description: "",
        location: "",
        start_time: "",
        end_time: "",
      });

      history.push("/events");
    } catch (err) {

      if (err.response?.status === 401) {
        setError("You must be logged in to create an event.");
      } else {
        setError(err.response?.data || "Failed to create event.");
      }
    }
  };

  return (
    <div>
      <h2>Create New Event</h2>
      {success && <p style={{ color: "green" }}>Event submitted for approval!</p>}
      {error && <p style={{ color: "red" }}>{JSON.stringify(error)}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label><br />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label><br />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location</label><br />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Start Time</label><br />
          <input
            type="datetime-local"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>End Time</label><br />
          <input
            type="datetime-local"
            name="end_time"
            value={formData.end_time}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit Event</button>
      </form>
    </div>
  );
}

export default EventCreateForm;
