import axios from "axios";
import config from "../config";

export const registerUser = async(user) => {
    try {
        let res = await axios.post(config.ip+'/user/register', JSON.stringify(user), {
            headers:{
                "Content-Type":"application/json"
            }
        });
        console.log(res);
        if(res.status === 200) return res;
    } catch (error) {
        console.log(error);
        return error;
    }
}
 
 