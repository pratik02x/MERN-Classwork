import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import {Routes,Route} from "react-router"
import { ToastContainer } from "react-toastify"

function App() {
  

  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>

      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
