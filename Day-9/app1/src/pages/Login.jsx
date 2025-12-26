import React from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router'

import { useState } from 'react'
import { loginUser } from '../services/userservice'

import { toast } from 'react-toastify'


function Login() {

const [email,setEmail]=useState('')
const[password,setPassword]=useState('')
const navigate=useNavigate()




const signin= async (event)=>{
           
           if(email==""){
             toast.warn("email must required")
           }
           else if(password==""){
              toast.warn("password must required")
           }
          else{
          const result = await loginUser(email, password)
            console.log(result)
            if (result.status == 'success') {
                
                navigate('/home')
                toast.success('Login successful')
            }
            else
                toast.error(result.error)
          }
        
}



  return (
    <div>
       <div className='container w-50'>
            <div className=" mt-3 mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" onChange={e =>setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Enter password" onChange={e=>setPassword(e.target.value)} />
            </div>

            <div className="mb-3">
                <button className="btn btn-success" onClick={signin}>Signin</button>
            </div>

            <div>
                Don't have an account? then to register<Link to="/register">Click Here</Link> 
            </div>
        </div>
      
    </div>
  )
}


export default Login
