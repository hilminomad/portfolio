import React from 'react'
import ContactVector from './contactVector';
import { useGlobalContext } from '../context';
const Footer = () => {
  const { buttonEnter, Leave } = useGlobalContext();
  return (
    <section className='projects footer' id='3'>
      <div className='projects__container'>
        <div className='projects__text'>
          <h2 className='projects__title'>Contact</h2>
          <div className="projects__subtitle_container">
            <div className="projects__vector_container">
              <ContactVector/>
            </div>
            <p className='projects__paragraph'>
              Looking for a website?
              <br />
              Have a question or just want to <br />
              drop a friendly greeting? <br />
              Feel free to get in touch with me.
            </p>
          </div>
        </div>
        <a  className='footer__email'>
          <h3 style={{textAlign:"center"}}>m.ali.elansari@gmail.com<br/><br/>+212 6 24 57 50 58</h3>
        </a>
        <div className='footer_contact'>
          <a onMouseEnter={buttonEnter} onMouseLeave={Leave} href='https://wa.me/+212684935862' target='blank' className='footer__social_link'>
            WHATSAPP
          </a>
        </div>
        <div className='footer__copy'>
          <p>&copy; 2023 Mohamed Ali Elansari</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
