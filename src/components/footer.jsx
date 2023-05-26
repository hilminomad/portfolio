const Footer = () => {
  return (
    <section className='projects footer'>
      <div className='projects__container'>
        <div className='projects__text'>
          <h2 className='projects__title'>Contact</h2>
          <p className='projects__paragraph'>
            Looking for a website?
            <br />
            Have a question or just want to <br />
            drop a friendly greeting? <br />
            Feel free to get in touch with me.
          </p>
        </div>
        <a href='' className='footer__email'>
          <h2>m.ali.elansari@gmail.com</h2>
        </a>
        <div className='footer_contact'>
          <a href='' className='footer__social_link'>
            +212 6 50 50 50 50
          </a>
          <a href='' className='footer__social_link'>
            WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
