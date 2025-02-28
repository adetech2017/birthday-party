import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Don't miss out! RSVP now to secure your spot.</p>
            <a href="tel:08077323091" className={styles.rsvpButton}>Call Ghazali to RSVP</a>
        </footer>
    );
};

export default Footer;