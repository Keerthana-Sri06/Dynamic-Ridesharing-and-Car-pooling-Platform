import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

// Users
export const registerUser = (userData) =>
  axios.post(`${BASE_URL}/users/registers`, userData);

export const loginUser = (credentials) =>
  axios.post(`${BASE_URL}/users/login`, credentials);

// Drivers
export const registerDriver = (driverData) =>
  axios.post(`${BASE_URL}/driver/register`, driverData);

export const loginDriver = (credentials) =>
  axios.post(`${BASE_URL}/driver/login`, null, {
    params: credentials
  });
