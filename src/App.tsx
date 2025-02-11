import NavBar from "./components/navbar/NavBar"
import "../src/index.css"
import AllRoutes from "./routes/AllRoutes"
import Footer from "./components/Footer/Footer"
import LoginPopup from "./components/LoginPopup/LoginPopup"
import { useState } from "react"



function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
   
    <> 
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    
    <div className="app">
      <NavBar setShowLogin={setShowLogin} showLogin={showLogin}/>
      <AllRoutes/>
    </div>
    <Footer/>
    </>
  )
}

export default App
