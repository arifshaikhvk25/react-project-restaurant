import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (

    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>

      <ul className='app__navbar-links'>

        <li className="p__opensans"> <a href="#about">About</a> </li>
        <li className="p__opensans"> <a href="#menu">Menu</a> </li>
        <li className="p__opensans"> <a href="#home">Home</a> </li>
        <li className="p__opensans"> <a href="#awards">Awards</a> </li>
        <li className="p__opensans"> <a href="#contact">Contact</a> </li>

      </ul>

      <div className="app__navbar-login">
        <a className='P__opensans' href="#login"> Log In / Register</a>
        <div />        {/*empty div to create a space */}
        <a href="/" className="P__opensans">Book Table</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='white' fontSize={25} onClick={() => { setToggleMenu(true) }} />

        {

          toggleMenu && (

            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu className=" overlay__close" fontSize={25} onClick={() => { setToggleMenu(false) }} />
              {/* <ul className='app__navbar-smallscreen_links'>

              <li className="p__opensans"> <a href="#home">Home</a> </li>
              <li className="p__opensans"> <a href="#about">About</a> </li>
              <li className="p__opensans"> <a href="#menu">Menu</a> </li>
              <li className="p__opensans"> <a href="#awards">Awards</a> </li>
              <li className="p__opensans"> <a href="#contact">Contact</a> </li>

            </ul> */}

              <ul className="app__navbar-smallscreen_links">
                <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
                <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              </ul>


            </div>
          )
        }

      </div>

    </nav>

  )
};

export default Navbar;
