import axios from "axios";

export const loginFn = async (user) => {
  // console.log(user);
  try {
    let res = await axios.post(
      "http://localhost:8080/user/login",
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
