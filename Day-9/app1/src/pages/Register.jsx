// import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { resgisterUser } from '../services/userservice';
import { toast } from 'react-toastify'
function Register() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[course_id,setcourse_id]=useState("");
  const[mobile_no,setMobile]=useState("");
  const navigate = useNavigate();

  const signup=async(event)=>{

    if(name==""){
      toast.error("Name required")
    }
    else if(email==""){
        toast.error("eamil required")
    }
    else if(course_id==""){
        toast.error("course id required")
    }
    else if(mobile_no==""){
        toast.error("mobile number reduired")
    }



    const result= await resgisterUser(name,email,course_id,mobile_no);

    if(result.status=="success"){
        navigate("/");
        toast.success("registered success");
        

    }
    else{
        toast.error(result.error);
    }
  }
  
  return (
    
      <div className='container w-50'>
            <div class=" mt-3 mb-3">
                <label for="inputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputName" placeholder="Enter name" onChange={e=>setName(e.target.value)}required />
            </div>

            <div class="mb-3">
                <label for="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} required />
            </div>

            <div className="mb-3">
                <label for="inputPassword" className="form-label">Course_Id</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Enter password"
                onChange={e=>setcourse_id(e.target.value)} required />
            </div>

            <div className="mb-3">
                <label for="inputMobile" className="form-label">Mobile</label>
                <input type="tel" className="form-control" id="inputMobile" placeholder="Enter Mobile number" onChange={e=>setMobile(e.target.value)} required />
            </div>


            <div className="mb-3">
                <button className="btn btn-success" onClick={signup}>Signup</button>
            </div>

            <div>
                Already have an account? then to login <Link to='/' >Click Here</Link>
            </div>
        </div>
   
  )
}

export default Register
