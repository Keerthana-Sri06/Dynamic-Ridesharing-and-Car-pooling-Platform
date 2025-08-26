// src/pages/Home.jsx
import { useNavigate, Link } from "react-router-dom";
import "./themes.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <header className="main-header">
        <h1>Smart Ride</h1>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Share miles, save money—travel smarter together.</h2>
          <p>
            Dynamic ride-sharing and car-pooling for everyday commutes and long trips.
            Post a ride or find a seat in seconds.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate("/user/auth")}>
              Join Ride
            </button>
            <button className="btn-secondary" onClick={() => navigate("/driver/auth")}>
              Host Ride
            </button>
          </div>

          <p className="hero-links">
            New here?{" "}
            <Link to="/user/auth">User Register</Link> |{" "}
            <Link to="/driver/auth">Driver Register</Link>
          </p>
        </div>

        <div className="hero-image">
          <img src="src/carpooling.jpg" alt="Carpooling illustration" />
        </div>
      </section>
    </div>
  );
}
