import React from 'react';
const Hero = () => {
  return (
    <>
      <section className='hero__section'>
        <div className='hero__container'>
          <div className='hero__title'>
            <h1>Mohamed Ali Elansari</h1>
          </div>
          <div className='hero__content'>
            <div className='hero__text'>
              <h2>
                Front End Developer
                <br />
                With a touch of
                <br />
                Creativity
              </h2>
              <p>
                I covert storytelling into websites.
                <br />
              </p>
              <p>
                My goal is to harmonize use aesthetics and captivating digital
                experiences business objectives. I create captivating digital
                experiences that enchant audiences while driving tangible
                results.
              </p>
            </div>
            <div className='hero__img'>
              <img
                src='https://res.cloudinary.com/dvvsyxugn/image/upload/v1684621584/images_sqmoys.webp'
                alt='Mohamed Ali Elansari'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
