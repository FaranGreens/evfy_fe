import axios from 'axios';
import config from "../config";

export const request_reset_link =async(email)=>{
    // console.log(email);
    try {
        let res = await axios.post(`${config.ip}/user/request-reset-link`, 
        JSON.stringify(email),
        {
        headers:{
            "Content-Type":"application/json"
        }
    })
        if(res.data) return res;
    } catch (error) {
        return error
    }
}