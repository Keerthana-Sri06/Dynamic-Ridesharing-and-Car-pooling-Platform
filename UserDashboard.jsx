import { useState } from "react";
import axios from "axios";

export default function UserDashboard() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [rides, setRides] = useState([]);

  const searchRides = async () => {
    try {
      const res = await axios.get("http://localhost:8080/rides/search", {
        params: { source, destination }
      });
      setRides(res.data);
    } catch (err) {
      alert("Error searching rides");
    }
  };

  const bookRide = (rideId) => {
    alert(`Ride with ID ${rideId} booked successfully!`);
    // Later: make API call to save booking in DB
  };

  return (
    <div className="dashboard-container">
      <h2>User Dashboard</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button onClick={searchRides}>Search</button>
      </div>

      <div className="ride-results">
        {rides.length > 0 ? (
          rides.map((ride) => (
            <div key={ride.id} className="ride-card">
              <h3>{ride.source} ➝ {ride.destination}</h3>
              <p>Car: {ride.carModel} ({ride.carNumber})</p>
              <p>Seats Available: {ride.availableSeats}</p>
              <p>Departure: {ride.departureTime}</p>
              <p>Driver: {ride.driver?.name}</p>
              <button onClick={() => bookRide(ride.id)}>Book Ride</button>
            </div>
          ))
        ) : (
          <p>No rides found.</p>
        )}
      </div>
    </div>
  );
}
