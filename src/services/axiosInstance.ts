import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGEyZjIzNTcwMDJlYmQ3OWQwZmEyNTYyMTY3YzY2ZSIsIm5iZiI6MTc2NjQ3MzgzNC4xOTEsInN1YiI6IjY5NGE0MDZhNDg4MTQ4ZDA2MmIxZDAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GRMc1ZdSlD70BgK7eVYYB9ZpznoyjHS1TEbpLjtptEM`,
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
