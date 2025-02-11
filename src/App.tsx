import NavBar from "./components/navbar/NavBar"
import "../src/index.css"
import AllRoutes from "./routes/AllRoutes"
import Footer from "./components/Footer/Footer"



function App() {

  return (
    <>
    <div className="app">
      <NavBar/>
      <AllRoutes/>
    </div>
    <Footer/>
    </>
  )
}

export default App
