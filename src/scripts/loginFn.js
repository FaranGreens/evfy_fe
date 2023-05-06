import axios from "axios";
import config from "../config";

export const loginFn = async (user) => {
  // console.log(user);
  try {
    let res = await axios.post(
      `${config.ip}/user/login`,
      JSON.stringify(user),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if(res.data)return res
  } catch (error) {
    return error;
  }
};
