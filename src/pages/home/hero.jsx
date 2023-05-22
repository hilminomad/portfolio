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
                I convert storytelling into websites. I aim to create visually
                appealing digital experiences that assist you in achieving your
                business goals.
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
