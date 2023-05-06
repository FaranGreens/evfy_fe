import axios from 'axios';

export const request_reset_link =async(email)=>{
    // console.log(email);
    try {
        let res = await axios.post('http://localhost:8080/user/request-reset-link', 
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