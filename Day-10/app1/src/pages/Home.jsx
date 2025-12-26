import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";

import { getcourses } from "../services/coursesService";

function Home() {
const [course,setcourse]=useState([])

useEffect(()=>{
     console.log("home component loaded")
     getcourse();
},[])

const getcourse= async (event)=>{
    const result= await getcourses();

    if(result.status=="success"){
        setcourse(result.data);
    }
}

  return (
        <>
       <Navbar/>
       <div className="container">
            <div className="row">
                {course.map(e => {
                    return <div className="mt-3 col-4">
                        <div className="card" style={{ width: "20rem" }}>
                            <div className="card-body">
                                <h5 className="card-title" style={{ height: "2rem" }}>{e.course_id}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{e.course_name}</h6>
                                <p className="card-text" style={{ height: "3rem" }}>{e.description}</p>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Rs. {e.fees}</h6>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Rs. {e.start_date}</h6>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Rs. {e.end_date}</h6>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Rs. {e.video_expire_days}</h6>
                                <button className="btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>

    </>
  )

}
export default Home
