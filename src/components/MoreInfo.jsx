import { useNavigate } from "react-router-dom";




export default function MoreInfo() {
    const navigate = useNavigate();

    return (
        <div
        className="min-vh-100 text-white"
        style={{
            backgroundImage: "url('/bck-image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backdropFilter: "blur(5px)",
        }}
        >
            <div className="container py-5">
                {/* Header Section */}
                <h1 className="text-center display-4 fw-bold mb-4">
                🎉 Dr. Rabiu Olowo @40 - Celebration Details
                </h1>
                <h3 className="text-center fw-bold text-warning">
                📅 Date: 14th June 2025
                </h3>

                {/* Biography Section */}
                <div className="card bg-dark bg-opacity-75 text-white mb-4 shadow">
                    <div className="card-body">
                        <h2 className="card-title fs-3 fw-bold">📜 Biography</h2>
                        <p className="card-text fs-5">
                            Rabiu Olowo is a visionary leader and philanthropist known for his immense contributions 
                            to finance, governance, and community development. With over two decades of excellence 
                            in public service, he has led transformative initiatives that uplift businesses and individuals alike.
                        </p>
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="card bg-dark bg-opacity-75 text-white mb-4 shadow">
                    <div className="card-body">
                        <h2 className="card-title fs-3 fw-bold">🏆 Achievements</h2>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent text-white">✅ Successfully restructured the financial framework of Lagos State.</li>
                            <li className="list-group-item bg-transparent text-white">✅ Recognized as one of the top financial minds in Africa.</li>
                            <li className="list-group-item bg-transparent text-white">✅ Led innovative tax reforms that boosted economic growth.</li>
                            <li className="list-group-item bg-transparent text-white">✅ Received multiple awards for excellence in governance and finance.</li>
                        </ul>
                    </div>
                </div>

                {/* Contributions Section */}
                <div className="card bg-dark bg-opacity-75 text-white mb-4 shadow">
                    <div className="card-body">
                        <h2 className="card-title fs-3 fw-bold">🌍 Contributions</h2>
                        <p className="card-text fs-5">
                            Beyond finance and governance, Rabiu Olowo is deeply committed to youth empowerment 
                            and education. He has sponsored scholarship programs, entrepreneurship initiatives, 
                            and mentorship opportunities for thousands of young Nigerians.
                        </p>
                    </div>
                </div>

                {/* Order of Events Section */}
                <div className="card bg-dark bg-opacity-75 text-white mb-4 shadow">
                    <div className="card-body">
                        <h2 className="card-title fs-3 fw-bold">📅 Order of Events</h2>
                        <ul className="list-group list-group-flush fs-5">
                            <li className="list-group-item bg-transparent text-white">🎤 Opening Speech - 10:00 AM</li>
                            <li className="list-group-item bg-transparent text-white">🎶 Music & Entertainment - 11:00 AM</li>
                            <li className="list-group-item bg-transparent text-white">🍽️ Lunch & Networking - 1:00 PM</li>
                            <li className="list-group-item bg-transparent text-white">🎂 Cake Cutting - 3:00 PM</li>
                            <li className="list-group-item bg-transparent text-white">🎙️ Closing Remarks - 5:00 PM</li>
                        </ul>
                    </div>
                </div>

                {/* Photo Gallery Section */}
                <div className="card bg-dark bg-opacity-75 text-white mb-4 shadow">
                    <div className="card-body">
                        <h2 className="card-title fs-3 fw-bold">📸 Photo Gallery</h2>
                        <div className="row g-3">
                            <div className="col-6 col-md-4">
                                <img src="/images/photo1.jpeg" alt="Rabiu Olowo 1" className="img-fluid rounded shadow" />
                            </div>
                            <div className="col-6 col-md-4">
                                <img src="/images/photo2.jpeg" alt="Rabiu Olowo 2" className="img-fluid rounded shadow" />
                            </div>
                            <div className="col-6 col-md-4">
                                <img src="/images/photo3.jpeg" alt="Rabiu Olowo 3" className="img-fluid rounded shadow" />
                            </div>
                            <div className="col-6 col-md-4">
                                <img src="/images/photo4.jpg" alt="Rabiu Olowo 4" className="img-fluid rounded shadow" />
                            </div>
                            <div className="col-6 col-md-4">
                                <img src="/images/photo5.jpg" alt="Rabiu Olowo 5" className="img-fluid rounded shadow" />
                            </div>
                            <div className="col-6 col-md-4">
                                <img src="/images/photo6.jpg" alt="Rabiu Olowo 6" className="img-fluid rounded shadow" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* RSVP Section */}
                <div className="card bg-dark bg-opacity-75 text-white mb-4 shadow">
                    <div className="card-body text-center">
                        <h2 className="card-title fs-3 fw-bold">📩 RSVP</h2>
                        <p className="fs-5">Kindly confirm your attendance by contacting:</p>
                        <h3 className="text-warning">📞 Ghazali</h3>
                        <p className="fs-5">📧 Email: ghazali@example.com</p>
                        <p className="fs-5">📱 Phone: +234 812 345 6789</p>
                    </div>
                </div>

                {/* Back Button */}
                <div className="text-center mt-4">
                    <button
                        onClick={() => navigate("/")}
                        className="btn btn-primary btn-lg fw-bold shadow"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
