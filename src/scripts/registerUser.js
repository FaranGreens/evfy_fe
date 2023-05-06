import axios from "axios";
export const registerUser = async(user) => {
    try {
        let res = await axios.post('http://localhost:8080/user/register', JSON.stringify(user), {
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
 
 