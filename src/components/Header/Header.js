import React from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
    return (
        <motion.header 
            className={styles.header}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className={styles.photoContainer}>
                <img
                    src="/dr-rabiu-olowo.jpeg"
                    alt="Dr. Rabiu Olowo"
                    className={styles.photo}
                />
            </div>
            <h1 className={styles.title}>Celebrating Dr. Rabiu Olowo’s 40th Birthday</h1>
            <p className={styles.subtitle}>Join us for an unforgettable celebration!</p>
        </motion.header>
    );
};

export default Header;