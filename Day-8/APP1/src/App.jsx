
import Home  from './pages/Home'
import Orders from './pages/Orders'
import Profile from './pages/profile'
import { Route, Routes } from "react-router"

function App() {


  return (
    <> 
    <Routes>
       <Route path='/home' element={<Home/>}/>
       <Route path='/profile' element={<Profile/>}/>
       
       <Route path='/orders' element={<Orders/>}/>
       
    </Routes>
    </>
  )
}
export default App
