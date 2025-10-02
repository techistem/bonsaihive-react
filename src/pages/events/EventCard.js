import React from "react";

import { Link } from "react-router-dom";
import styles from "../../styles/EventCardsSidebar.module.css";

//The EventCard component displays individual event details in a card format. Before, that wasn't implemented

function EventCard({ event }) {
  return (
    <Link
      key={event.id}
      to={`/events/${event.id}`}
      className={styles.Card}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{event.title}</h3>
        <p>{event.description || "No description available."}</p>
        <p className={styles.CardDate}>
          {event.start_time
            ? new Date(event.start_time).toLocaleDateString()
            : "Start date not specified."}
        </p>
        {event.end_time && (
          <p style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>
            <strong>End:</strong>{" "}
            {new Date(event.end_time).toLocaleDateString()}
          </p>
        )}
        {event.location && (
          <p style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>
            <strong>Location:</strong> {event.location}
          </p>
        )}
      </div>
    </Link>
  );
}

export default EventCard;
