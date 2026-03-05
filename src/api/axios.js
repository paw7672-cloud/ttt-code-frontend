import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
  
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "https://ttt-code-backend-1.onrender.com/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosInstance;
//   import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosInstance;