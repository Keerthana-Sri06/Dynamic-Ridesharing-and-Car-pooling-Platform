import { useState } from "react";

export default function DriverDashboard() {
  const [driverName, setDriverName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [seatsAvailable, setSeatsAvailable] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tripData = { driverName, carModel, location, destination, seatsAvailable };

    try {
      const response = await fetch("http://localhost:8080/api/cars/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tripData),
      });

      if (response.ok) {
        setMessage("✅ Trip posted successfully!");
        setDriverName("");
        setCarModel("");
        setLocation("");
        setDestination("");
        setSeatsAvailable("");
      } else {
        setMessage("❌ Failed to post trip. Try again.");
      }
    } catch (error) {
      console.error("Error posting trip:", error);
      setMessage("⚠️ Server error. Check backend connection.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Driver Dashboard</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium">Driver Name</label>
          <input
            type="text"
            value={driverName}
            onChange={(e) => setDriverName(e.target.value)}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Car Model</label>
          <input
            type="text"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Pickup Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Destination</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Seats Available</label>
          <input
            type="number"
            value={seatsAvailable}
            onChange={(e) => setSeatsAvailable(e.target.value)}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
        >
          Post Ride
        </button>
      </form>

      {message && <p className="mt-4 text-lg font-semibold">{message}</p>}
    </div>
  );
}
