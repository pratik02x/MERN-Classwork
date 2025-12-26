import config from "./config";
import axios from "axios"
export async function signinUser(email,password){
    const URL=config.BASE_URL + "/common/auth/login"

    const body={email,password}

    const response= await axios.post(URL,body);

    return response.data;
}

export async function userRegister(name,email,Course_id,mobile){
    const URL=config.BASE_URL+"/student/register-to-course"

    const body={name,email,Course_id,mobile};

    const response= await axios.post(URL,body);

    return response.data;
}