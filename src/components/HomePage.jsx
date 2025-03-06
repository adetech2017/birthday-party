import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function HomePage() {
    const navigate = useNavigate();
    const eventDate = new Date("2025-06-14T00:00:00Z").getTime();
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        function calculateTimeLeft() {
            const now = new Date().getTime();
            const difference = eventDate - now;

            if (difference <= 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        setTimeLeft(calculateTimeLeft()); // Initial update

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [eventDate]); // ✅ No dependency issues

    return (
        <div
            className="d-flex flex-column align-items-center justify-content-center vh-100 position-relative"
            style={{
                backgroundImage: "url('/bck-image.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark overlay */}
            <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-dark opacity-50"></div>

            {/* Main content */}
            <h1 className="text-center text-white display-1 fw-bold mb-4 z-1">
                Dr. Rabiu Olowo @40
            </h1>

            {/* Countdown Timer */}
            <div className="text-center text-white display-6 fw-bold mb-3 z-1">
                ⏳ Countdown: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </div>

            {/* Location and More Info button */}
            <div className="position-absolute bottom-0 start-0 m-4 z-1">
                <p className="text-white fs-5">📍 Location: Lagos & Abuja</p>
                <button
                    onClick={() => navigate("/more-info")}
                    className="btn btn-light text-primary fw-bold shadow"
                >
                    More Info
                </button>
            </div>
        </div>
    );
}
