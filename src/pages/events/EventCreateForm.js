import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/EventCreateForm.module.css";
import { format } from "date-fns";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function EventCreateForm() {
  const currentUser = useCurrentUser();
  const history = useHistory();

  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    location: "",
    start_time: "",
    end_time: "",
  });

  const { title, description, location } = eventData;

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const start_time = eventData.start_time
    ? format(new Date(eventData.start_time), "yyyy-MM-dd HH:mm")
    : null;
  const end_time = eventData.end_time
    ? format(new Date(eventData.end_time), "yyyy-MM-dd HH:mm")
    : null;

  if (!currentUser) {
    return <p>You need to log in to create a new event.</p>;
  }

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("start_time", start_time);
    if (end_time) {
      formData.append("end_time", end_time);
    }

    try {
      await axios.post("/events/", formData);

      setSuccess(true);
      setEventData({
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
    <div className={styles.container}>
      <h2 className={styles.title}>Create New Event</h2>
      {success && (
        <p className={styles.success}>Event submitted for approval!</p>
      )}
      {error && <p className={styles.error}>{JSON.stringify(error)}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className={styles.formGroup}>
          <Form.Label className={styles.label}>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            pattern="^\S+$"
            value={title}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </Form.Group>
        <Form.Group className={styles.formGroup}>
          <Form.Label className={styles.label}>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            pattern="^\S+$"
            value={description}
            onChange={handleChange}
            required
            className={styles.textarea}
          />
        </Form.Group>
        <Form.Group className={styles.formGroup}>
          <Form.Label className={styles.label}>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </Form.Group>
        <Form.Group className={styles.formGroup}>
          <Form.Label className={styles.label}>Start Time</Form.Label>
          <Form.Control
            type="datetime-local"
            name="start_time"
            value={start_time}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </Form.Group>
        <Form.Group className={styles.formGroup}>
          <Form.Label className={styles.label}>End Time</Form.Label>
          <Form.Control
            type="datetime-local"
            name="end_time"
            value={end_time}
            onChange={handleChange}
            className={styles.input}
          />
        </Form.Group>
        <Button type="submit" className={styles.button}>
          Submit Event
        </Button>
      </Form>
    </div>
  );
}

export default EventCreateForm;
