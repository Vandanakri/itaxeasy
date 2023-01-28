import React, {useState} from 'react';
import logo from "../images/logo2.c00f4d085e2f20279eec.png";
import {Link} from 'react-scroll';

function NavBar() {
  const [nav,setnav] = useState(false);
  const changeBackground = () => {
    if (window.screenY >= 50) {
      setnav(true);
    }
    else {
      setnav(false);
    }
  }
  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to='main' className='logo' smooth={true} duration={2000}>
        <img src={logo} alt='' />
      </Link>
      <input className='menu-btn' type="checkbox" id='menu-btn' />
      <label className='menu-icon' for='menu-btn'>
        <span className="nav-icon"></span>
      </label>
      <ul className='menu'>
        <li><Link to='#' smooth={true} duration={1000}>Our Products</Link></li>
        <li><Link to='#' smooth={true} duration={1000}>Our Service</Link></li>
        <li><Link to='#' smooth={true} duration={1000}>Finance Calculater</Link></li>
        <li><Link to='#' smooth={true} duration={1000}>Register a Startup</Link></li>
        <li><Link to='#' smooth={true} duration={1000}>API's</Link></li>
        <li><Link to='#' smooth={true} duration={1000}>Downloads</Link></li>
        <div className='signup'>
          <li className='li'><Link to='#' smooth={true} duration={1000}>Signup</Link></li>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar;