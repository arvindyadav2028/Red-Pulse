import { BrowserRouter, Routes, Route} from "react-router-dom"

import Landing from "./pages/Landing.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import Signup from "./pages/Signup.jsx"
import UserPage from "./pages/UserPage.jsx"

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/user" element={<UserPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App