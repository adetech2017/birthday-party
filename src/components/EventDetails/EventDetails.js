import React from 'react';
import styles from './EventDetails.module.css';

const EventDetails = () => {
  return (
    <div className={styles.details}>
      <h2>Event Details</h2>
      <ul>
        <li><strong>Date:</strong> June 14, 2025</li>
        <li><strong>Time:</strong> To be announced</li>
        <li><strong>Location:</strong> To be announced</li>
        <li><strong>RSVP:</strong> Ghazali at 08077323091</li>
      </ul>
    </div>
  );
};

export default EventDetails;