// eslint-disable-next-line no-unused-vars
import axios from "axios";

export const fetchCourses = async () => {
  try {
    const response = await axios.get(
      "https://lexicon-lms.onrender.com/courses"
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching courses", error);
    throw error;
  }
};
