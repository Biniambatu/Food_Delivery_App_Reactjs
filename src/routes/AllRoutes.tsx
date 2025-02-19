import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Cart from "../pages/Cart/Cart"
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder"

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/order" element={<PlaceOrder/>}/>
            <Route path="/pagenotfound" element/>
        </Routes>
    </div>
  )
}

export default AllRoutes