import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { signinUser } from '../services/userService';
import { toast } from 'react-toastify'
import { LoginContext } from '../App';


export default function Login() {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const{loginStatus,setloginStatus}=useContext(LoginContext)
    const signin= async (event)=>{

       console.log("btn clicked")
        const result=await signinUser(email,password);

        if(result.status=="success"){
            sessionStorage.setItem("token",result.data.token);
            setloginStatus(true);
             navigate("/home")
             toast.success("login successfull")

        }

        else{
            
            toast.error(result.error);
        }


    }

  return (
    <div className='container w-50'>
        <div className=" mt-3 mb-3">
                <label for="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} />
        </div>

        <div className="mb-3">
                <label for="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Enter password" onChange={e=>setPassword(e.target.value)} />
        </div>

        <div className="mb-3">
                <button className="btn btn-success" onClick={signin} >Signin</button>
         </div>

        <div>
                Don't have an account? then to register <Link to='/register' >Click Here</Link>
        </div>
    </div>
  )
}
