import React from 'react';
import { useGlobalContext } from '../../context';

const Hero = () => {
  const { imageEnter, textEnter, Leave } = useGlobalContext();
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
              <div  className='hero__icons'>
                <a  onMouseEnter={textEnter} onMouseLeave={Leave} href='https://github.com/hilminomad' target='blank'>
                  <img
                    src='https://res.cloudinary.com/dvvsyxugn/image/upload/v1685092161/github_1_v2sbtk.png'
                    alt='github'
                  />
                </a>
                <a onMouseEnter={textEnter} onMouseLeave={Leave} href='https://www.linkedin.com/in/mohamed-ali-el-ansari-76112b134/' target='blank'>
                  <img
                    src='https://res.cloudinary.com/dvvsyxugn/image/upload/v1685092164/linkedin_1_vqq6os.png'
                    alt='linkedin'
                  />
                </a>
              </div>
            </div>
            <div className='hero__img'>
              <img onMouseEnter={imageEnter} onMouseLeave={Leave} 
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
