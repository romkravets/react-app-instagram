import React, { Component } from 'react';
import logo from '../../logo.svg';
export default class Header extends Component {
   render() {
      return (
         <header>
            <div className="container h-flex">
               <a href="#" className="logo">
                  <img alt="logo" src={logo}></img>
               </a>
               <nav className="links">
                  <ul>
                     <li>
                        <a href="#" className="menu__links">Home</a>
                     </li>
                     <li>
                        <a href="#" className="menu__links">Profile</a>
                     </li>
                  </ul>
               </nav>
            </div>
         </header>
      )
   }
}

