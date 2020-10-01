import axios from "axios";

export const searchApi = async (input) => {
  try {
    let res = await axios.get("http://localhost:5000/search?value=" + input);
    return res ? res.data[0] : {};
  } catch (err) {
    return err;
  }
};
