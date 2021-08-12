import React from 'react';
import logo from './../../assests/logo.png';
import "./Nav.css";

const  Nav=()=> {
    return (
       <div className="nav-container">
           <div className="nav-left">
           <img src={logo} alt="logo" className="flash-logo" />
           <a href="/Typing-Press/"> 
           <p className="flash-logo-text">Typing Press ✍️</p>
           </a>
           </div>
           <div className="nav-right">
               <a target="_blank" className="nav-aam-link"
               href="https://github.com/Harshitsaini-12/Typing-Press"
                rel="noreferrer">
                See Code 👨🏻‍💻
                </a>
           </div>
       </div>
      );
}
 
export default Nav;