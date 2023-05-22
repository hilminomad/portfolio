const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__logo'>
          <a href=''>
            <p>ME</p>
          </a>
        </div>
        <div className='navbar__links'>
          <div className='navbar__link'>
            <a href=''>
              <p>Portrfolio</p>
            </a>
          </div>
          <div className='navbar__link'>
            <a href=''>
              <p>About</p>
            </a>
          </div>
          <div className='navbar__link'>
            <a href=''>
              <p>Contact</p>
            </a>
          </div>
          <div className='navbar__link navbar__cta'>
            <a href=''>
              <p>Let's Talk</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
