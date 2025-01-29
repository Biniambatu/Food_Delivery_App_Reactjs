import NavBar from "./components/navbar/NavBar"
import "../src/index.css"
import AllRoutes from "./routes/AllRoutes"



function App() {

  return (
    <div className="app">
      <NavBar/>
      <AllRoutes/>
    </div>
  )
}

export default App
