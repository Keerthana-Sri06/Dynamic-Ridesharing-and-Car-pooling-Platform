import api from "./api.js";

// ----------------- USER FLOW -----------------

// Search available rides
// GET /user/rides/search?source=...&destination=...&date=YYYY-MM-DD
export async function searchRides({ source, destination, date }) {
  const res = await api.get("/users/rides/search", {
    params: { source, destination, date },
  });
  // expected: [{ id, driverName, vehicleModel, licensePlate, source, destination, date, time, availableSeats }]
  return res.data;
}

// Book a ride
// POST /user/bookings  body: { rideId, seats }
export async function bookRide({ rideId, seats }) {
  const res = await api.post("/users/bookings", { rideId, seats });
  return res.data;
}

// ----------------- DRIVER FLOW -----------------

// Create/host a ride
// POST /driver/rides  body: { source, destination, date, time, availableSeats, vehicleModel, licensePlate }
export async function createRide(payload) {
  const res = await api.post("/drivers/rides", payload);
  return res.data;
}

// View rides posted by driver (optional, for dashboard)
// GET /driver/rides/my
export async function getMyRides() {
  const res = await api.get("/drivers/rides/my");
  return res.data;
}
import api from "./api.js";

// ----------------- USER FLOW -----------------

// Search available rides
// GET /user/rides/search?source=...&destination=...&date=YYYY-MM-DD
export async function searchRides({ source, destination, date }) {
  const res = await api.get("/users/rides/search", {
    params: { source, destination, date },
  });
  // expected: [{ id, driverName, vehicleModel, licensePlate, source, destination, date, time, availableSeats }]
  return res.data;
}

// Book a ride
// POST /user/bookings  body: { rideId, seats }
export async function bookRide({ rideId, seats }) {
  const res = await api.post("/users/bookings", { rideId, seats });
  return res.data;
}

// ----------------- DRIVER FLOW -----------------

// Create/host a ride
// POST /driver/rides  body: { source, destination, date, time, availableSeats, vehicleModel, licensePlate }
export async function createRide(payload) {
  const res = await api.post("/drivers/rides", payload);
  return res.data;
}

// View rides posted by driver (optional, for dashboard)
// GET /driver/rides/my
export async function getMyRides() {
  const res = await api.get("/drivers/rides/my");
  return res.data;
}
