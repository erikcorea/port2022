import React from 'react';
import '../Styling/main.css';
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav>
    <ul className="header">
      <li>
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className='nav-btns'>Home</button>
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className='nav-btns'>About</button>
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className='nav-btns'>Projects</button>
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className='nav-btns'>Contact</button>
        </Link>
      </li>
    </ul>
  </nav>
  )
}




        
