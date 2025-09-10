import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext"
import styles from "../../styles/EventCreateForm.module.css";


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
        formData,
    );
        
      setSuccess(true);
      setFormData({
        title: "",
        description: "",
        location: "",
        start_time: "",
        end_time: "",
      });

      history.push("/events?created=1");
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
      {success && <p className={styles.success}>Event submitted for approval!</p>}
      {error && <p className={styles.error}>{JSON.stringify(error)}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className={styles.textarea}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Start Time</label>
          <input
            type="datetime-local"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>End Time</label>
          <input
            type="datetime-local"
            name="end_time"
            value={formData.end_time}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Submit Event</button>
      </form>
    </div>
  );
  
}

export default EventCreateForm;
