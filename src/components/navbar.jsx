import React from 'react'
import { useGlobalContext } from '../context';

const Navbar = () => {

  const { textEnter, buttonEnter, Leave } = useGlobalContext();
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__logo'>
          <a href='#'>
            <p>ME</p>
          </a>
        </div>
        <div className="navbar__links_container">
          <div onMouseEnter={textEnter} onMouseLeave={Leave}  className='navbar__link'>
            <a href='#1'>
              <p>Expertise</p>
            </a>
          </div>
          <div onMouseEnter={textEnter} onMouseLeave={Leave} className='navbar__link'>
            <a href='#2'>
              <p>Projects</p>
            </a>
          </div>
          <div onMouseEnter={textEnter} onMouseLeave={Leave} className='navbar__link'>
            <a href='#3'>
              <p>Contact</p>
            </a>
          </div>
        </div>
        <div className='navbar__links'>
          
          <div onMouseEnter={buttonEnter} onMouseLeave={Leave} className= 'navbar__link navbar__cta'>
            <a  href="mailto:m.ali.elansari@gmail.com" target='blank'>
              <p>Let's Talk</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
