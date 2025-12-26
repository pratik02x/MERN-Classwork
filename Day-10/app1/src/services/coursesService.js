import axios from "axios";
import config from "./config";

export async function getcourses(){
          
    const URL=config.BASE_URL+"/common/course/all-active-course";
    const response= await axios.get(URL);
    return response.data;
}