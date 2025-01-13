/* eslint-disable no-useless-catch */
// services/api.js
import axios from "axios";

// Function to get the JWT token from localStorage
const getAuthToken = () => {
  return localStorage.getItem("authToken"); // Replace with the key where the token is stored
};

// Function to create a course
export const createCourse = async (courseData) => {
  const token = getAuthToken(); // Get token from localStorage

  if (!token) {
    throw new Error("Authorization token is missing");
  }

  try {
    const response = await axios.post(
      `https://lexicon-lms.onrender.com/courses`,
      courseData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
