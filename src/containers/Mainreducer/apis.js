import { getAxiosInstance } from "../../utils";

export const searchApi = async (input) => {
  let res = getAxiosInstance()
    .get("/search?value=" + input)
    .catch((error) => {
      return error.response;
    });
  console.log(res);
  return res;
};

export const signupApi = async (values) => {
  return getAxiosInstance()
    .post("/signup", values)
    .catch((error) => {
      return error.response;
    });
};

export const loginApi = async (values) => {
  return getAxiosInstance()
    .post("/login", values)
    .catch((error) => {
      return error.response;
    });
};

export const addBankApi = async (values) => {
  return getAxiosInstance()
    .post("/addBank", values)
    .catch((error) => {
      return error.response;
    });
};
