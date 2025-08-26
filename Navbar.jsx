// src/components/Navbar.jsx
import { Link } from "react-router-dom";
// optional styling file

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">🏠 Home</Link>
      <Link to="/user/auth">👤 User</Link>
      <Link to="/driver/auth">🚗 Driver</Link>
    </nav>
  );
}
