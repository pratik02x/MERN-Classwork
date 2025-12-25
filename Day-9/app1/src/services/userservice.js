import config from "./config"
import axios from "axios"




export async function loginUser(email,password){
    const URL=config.BASE_URL+"/common/auth/login"
    const body={email,password}


   
    const response= await axios.post(URL,body)
    
    return response.data
}

export async function resgisterUser(name,email,course_id,mobile_no){
    const URL=config.BASE_URL+"/student/register-to-course";
    const body={name,email,course_id,mobile_no}
    
    const response= await axios.post(URL,body);

    return response.data;
}