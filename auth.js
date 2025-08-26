import axios from "axios";

// Base URL for backend (Spring Boot)
const BASE_URL = "http://localhost:8080/api";

/* ---------------- USER ENDPOINTS ---------------- */

// ✅ Register a new user
export const registerUser = async (userData) => {
  return axios.post(`${BASE_URL}/users/registers`, userData);
};

// ✅ Login user
export const loginUser = async (credentials) => {
  return axios.post(`${BASE_URL}/users/login`, credentials);
};

// ✅ Get all registered users (optional, for admin/testing)
export const getAllUsers = async () => {
  return axios.get(`${BASE_URL}/users/registers`);
};

/* ---------------- DRIVER ENDPOINTS ---------------- */

// ✅ Register a new driver
export const registerDriver = async (driverData) => {
  return axios.post(`${BASE_URL}/driver/register`, driverData);
};

// ✅ Login driver (Spring expects email + password as query params)
export const loginDriver = async ({ email, password }) => {
  return axios.post(`${BASE_URL}/driver/login`, null, {
    params: { email, password },
  });
};

/* ---------------- LOGOUT ---------------- */

// ✅ Clear session from localStorage
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("session");
};
