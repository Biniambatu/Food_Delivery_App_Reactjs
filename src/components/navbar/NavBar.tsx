import './NavBar.css'
import { assets } from "../../assets/assets"
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo'/>
        <ul className='navbar-menu'>
          <Link to='/'><li onClick={() => setMenu("home")} className={menu === "home" ? "active" : "" }>home</li></Link>
          <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : "" }>menu</li>
          <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : "" }>mobile-app</li>
          <li onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : "" }>contact us</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <NavLink to='/cart'>
              <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
            </NavLink>
            
          </div>
          <button>sign in</button>
        </div>
    </div>
  )
}

export default NavBar