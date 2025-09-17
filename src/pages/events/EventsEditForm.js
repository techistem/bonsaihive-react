import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { format } from 'date-fns';

function EventsEditForm({
    show,
    handleClose,
    eventData,
}) {

    const [eventsData, setEventsData] = useState({
        title: "",
        description: "",
        location: "",
        start_time: "",
        end_time: "",
    });


    const { title, description, location } = eventsData || {};
    const [error, setError] = useState(null);
    const [validationError, setValidationError] = useState("");

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axios.get(`/events/${eventData?.id}/`);
                setEventsData(data);
                setError(null);
            } catch (error) {
                console.error("Error fetching event:", error);
                setError("An error occurred while loading the event. Please try again.");
            }
        };
        handleMount();
    }, [eventData.id, show]);

    const start_time = eventsData.start_time ? format(new Date(eventsData.start_time), "yyyy-MM-dd HH:mm") : null;
    const end_time = eventsData.end_time ? format(new Date(eventsData.end_time), "yyyy-MM-dd HH:mm") : null;

    const handleChange = (e) => {
        setEventsData({
            ...eventsData,
            [e.target.name]: e.target.value
        });
        setValidationError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        // Frontend validation: start_time < end_time
        if (
            start_time &&
            end_time &&
            start_time >= end_time
        ) {
            setValidationError("End time must be after start time.");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("location", location);
        formData.append("start_time", start_time);
        if (end_time) {
            formData.append("end_time", end_time);
        } else {
            formData.append("end_time", "");
        }

        try {
            await axios.put(`/events/${eventsData.id}/`, formData);


            
            handleClose();
            window.location.reload();
        } catch (err) {
            setError(err.response?.data || "Failed to update event.");
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <Alert variant="danger">{JSON.stringify(error)}</Alert>}
                {validationError && <Alert variant="warning">{validationError}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={eventsData.title}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            value={eventsData.description}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            name="location"
                            value={eventsData.location}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            step="1"
                            name="start_time"
                            value={eventsData.start_time}
                            onChange={handleChange}
                            required
                        />

                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            step="1"
                            name="end_time"
                            value={eventsData.end_time}
                            onChange={handleChange}
                        />

                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update Event
                    </Button>
                    <Button variant="secondary" onClick={handleClose} className="ml-2">
                        Cancel
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default EventsEditForm;