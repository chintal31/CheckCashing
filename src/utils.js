import axios from "axios";

export const getAxiosInstance = () => {
  console.log("API_END_POINT", process.env.API_END_POINT);
  const axiosInstance = axios.create({
    baseURL: `http://localhost:5000`,
  });

  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      //If user is unauthenticated.
      // if (error.response.status == 401) {
      //   Router.push("/");
      // }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export function userNameInitials(firstName, lastName) {
  let userInitials = "";
  if (firstName && lastName) {
    let firstLetter = firstName.charAt(0);
    let lastLetter = lastName.charAt(0);
    userInitials = userInitials.concat(firstLetter, lastLetter).toUpperCase();
  }
  return userInitials;
}
