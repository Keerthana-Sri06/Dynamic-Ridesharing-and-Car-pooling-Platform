// src/pages/HostRide.js
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function HostRide() {
  const [car, setCar] = useState("")
  const [source, setSource] = useState("")
  const [destination, setDestination] = useState("")
  const [seats, setSeats] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"))

  // Redirect if not driver
  if (!user || user.role !== "DRIVER") {
    return (
      <div className="container">
        <div className="card" style={{ maxWidth: 500, margin: "40px auto", textAlign: "center" }}>
          <h2>Access Denied</h2>
          <p style={{ color: "#9ca3af" }}>Only Drivers can host rides. Please log in as a Driver.</p>
        </div>
      </div>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      // API call for ride posting
      const token = localStorage.getItem("token")
      const res = await fetch("http://localhost:8080/api/rides", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ car, source, destination, seats })
      })
      if (!res.ok) throw new Error("Failed to host ride")
      navigate("/dashboard") // redirect to rides list or dashboard
    } catch (err) {
      setError(err.message || "Something went wrong")
    }
  }

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: 560, margin: "40px auto" }}>
        <h2 style={{ marginTop: 0 }}>Host a Ride</h2>
        <form className="form-grid" onSubmit={handleSubmit}>
          <div>
            <label>Car Details</label>
            <input
              value={car}
              onChange={(e) => setCar(e.target.value)}
              placeholder="e.g., Maruti Swift - TN 01 AB 1234"
              required
            />
          </div>
          <div>
            <label>Source</label>
            <input
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Enter starting point"
              required
            />
          </div>
          <div>
            <label>Destination</label>
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination"
              required
            />
          </div>
          <div>
            <label>Available Seats</label>
            <input
              type="number"
              min="1"
              max="10"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              required
            />
          </div>
          {error && <div className="badge" role="alert">{error}</div>}
          <button className="btn btn-primary" type="submit">Post Ride</button>
        </form>
      </div>
    </div>
  )
}
