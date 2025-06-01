import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import styles from "../../styles/ContactCreateForm.module.css";

/**
 * ContactCreateForm component
 * Renders a form for users to submit a contact request and
 * displays input fields for reason and details. This will
 * show a success modal upon submission
 */
const ContactCreateForm = () => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [contactData, setContactData] = useState({
    email: "",
    reason: "",
    content: "",
  });
  const { email, reason, content } = contactData;

  const history = useHistory();
  const [show, setShow] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  /**
   * Closes the success modal and resets submission state
   */
  const handleClose = () => {
    setShow(false);
    setFormSubmitted(false);
  };

  /**
   * Opens the success modal
   */
  const handleShow = () => setShow(true);

  /**
   * Handles input changes and
   * updates the contactData state with current field values
   */
  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Handles form submission, sends contact data to the API 
   * and displays a success message or error if submission fails
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Form submitted!');

    const formData = new FormData();
    formData.append("email", email);
    formData.append("reason", reason);
    formData.append("content", content);

    try {
      await axiosReq.post("/contact/", formData);
      setFormSubmitted(true);
      handleShow();
      setContactData({ email: "", reason: "", content: "" });
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  /**
   * Renders form fields for inputting contact reason and details
   */
  const textFields = (
    <div className="text-center"> 
      <Form.Group>
      <Form.Label className={styles.CustomLabl}>Email Address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={styles.inputField}
        />
      </Form.Group>
      {errors?.email?.map((message, idx) => (
        <Alert variant="warning" key={idx}>{message}</Alert>
      ))}

      <Form.Group>
      <Form.Label className={styles.CustomLabl}>Reason for contacting us</Form.Label>
        <Form.Control
          type="text"
          name="reason"            
          value={reason}
          onChange={handleChange}
          className={styles.inputField}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
      <Form.Label className={styles.CustomLabl}>Details</Form.Label>

        <Form.Control
          as="textarea"
          rows={5}
          name="content"
          value={content}
          onChange={handleChange}
          className={`${styles.textareaNonResizable} ${styles.textareaField}`}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button className={btnStyles.Button} onClick={() => history.goBack()}>
        Cancel
      </Button>
      <Button 
        className={btnStyles.Button} 
        type="submit" 
        disabled={formSubmitted} // Disable after form submission
      >
        {formSubmitted ? "Sending..." : "Send"}
      </Button>
    </div>
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Container className={`${appStyles.Content} ${styles.formContainer}`}>
          {textFields}
        </Container>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formSubmitted ? "Thanks for your feedback! Your message has been sent." : "Sending your message..."}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ContactCreateForm;
