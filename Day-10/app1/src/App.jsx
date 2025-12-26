import { createContext, useState } from 'react'


import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import{Routes,Route} from "react-router"
import { ToastContainer } from 'react-toastify'
import { Navigate } from 'react-router'


export const LoginContext=createContext();

function App() {
    const [loginstatus,setloginStatus]=useState(false);

  return (
    <>

    <LoginContext.Provider value={{loginstatus,setloginStatus}}>
     <Routes>
       <Route path="/*" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>


      <Route path="/home" element={loginstatus ? <Home/> : <Navigate to="/"/>}/> 
      <Route path="/profile" element={loginstatus ? <Profile/> :<Navigate to="/"/>}/>
      
     </Routes>
     <ToastContainer/>
  
    </LoginContext.Provider>
  </>
  )
}

export default App
