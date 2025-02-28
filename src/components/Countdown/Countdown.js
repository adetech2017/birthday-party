import React, { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const targetDate = new Date('2025-06-14T00:00:00');
        const now = new Date();
        const difference = targetDate - now;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return (
        <div className={styles.countdown}>
            <h2>Countdown to the Big Day</h2>
            <div className={styles.timer}>
                {Object.entries(timeLeft).map(([key, value]) => (
                    <div key={key} className={styles.timeBox}>
                        <span className={styles.value}>{value}</span>
                        <span className={styles.label}>{key}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Countdown;