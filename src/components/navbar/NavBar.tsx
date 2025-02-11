import './NavBar.css'
import { assets } from "../../assets/assets"
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NavBar = ({setShowLogin, showLogin}:any) => {
  const total = useSelector(state => state.foodReducer.total);

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
        <ul className='navbar-menu'>
          <Link to='/'><li onClick={() => setMenu("home")} className={menu === "home" ? "active" : "" }>home</li></Link>
          <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : "" }>menu</a>
          <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : "" }>mobile-app</a>
          <a href='#footer'  onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : "" }>contact us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <NavLink to='/cart'>
              <img src={assets.basket_icon} alt="" />
              {total === 0 ?  ""  : <div className="dot"></div>}
            
            </NavLink>
          </div>
          <button onClick={() => setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default NavBar