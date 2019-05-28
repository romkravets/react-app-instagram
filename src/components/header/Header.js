import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
export default class Header extends Component {
   render() {
      return (
         <header>
            <div className="container h-flex">
               <Link to="/" className="logo">
                  <img alt="logo" src={logo}></img>
               </Link>
               <nav className="links">
                  <ul>
                     <li>
                        <Link to="/" className="menu__links">Home</Link>
                     </li>
                     <li>
                        <Link to="/profile" className="menu__links">Profile</Link>
                     </li>
                  </ul>
               </nav>
            </div>
         </header>
      )
   }
}

