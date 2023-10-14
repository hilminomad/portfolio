import React from 'react'
import ProjectsVector from '../../components/projectsVector';
import { useGlobalContext } from '../../context';

const Projects = () => {
  const { buttonEnter, Leave } = useGlobalContext();
  return (
    <section className='projects' id='2'>
      <div className='projects__container'>
        <div className='projects__text'>
          <h2 className='projects__title'>Projects</h2>
          <div className="projects__subtitle_container">
            <div className="projects__vector_container">
              <ProjectsVector/>
            </div>
            <p className='projects__paragraph'>
            Discover a variety of projects, created for both clients and training purposes. These digital endeavors embody the fusion of creativity and technical proficiency, designed to transform ideas into compelling online experiences.
            </p>
          </div>
        </div>
        <div className='projects__grid'>
          
          <div className='projects__card item'>
            <a onMouseEnter={buttonEnter} onMouseLeave={Leave} href='#' target='blank' className='projects__card_container'>
              <div className='projects__card_img'>
                <img
                  src='https://res.cloudinary.com/dvvsyxugn/image/upload/c_scale,h_657/v1697285314/Dady_consulting_y3j30o.jpg'
                  alt=''
                />
              </div>
              <div className='projects__title'>
                <h3>DADY Consulting</h3>
                <p>2023</p>
              </div>
              <p className='projects__description'>
                Digital agency Website (soon) 
              </p>
            </a>
          </div>
          <div  className='projects__card'>
            <a onMouseEnter={buttonEnter} onMouseLeave={Leave} href='https://tartit.webflow.io/' target='blank' className='projects__card_container'>
              <div className='projects__card_img'>
                <img
                  src='https://res.cloudinary.com/dvvsyxugn/image/upload/v1684730926/tartit_upugfk.png'
                  alt=''
                />
              </div>
              <div className='projects__title'>
                <h3>Tartit</h3>
                <p>2023</p>
              </div>
              <p className='projects__description'>Tuareg band website</p>
            </a>
          </div>
          <div  className='projects__card item'>
            <a onMouseEnter={buttonEnter} onMouseLeave={Leave} href=''target='blank' className='projects__card_container'>
              <div className='projects__card_img'>
                <img
                  src='https://res.cloudinary.com/dvvsyxugn/image/upload/v1697283757/ouino_cntggo.png'
                  alt=''
                />
              </div>
              <div className='projects__title'>
                <h3>Ouino</h3>
                <p>2023</p>
              </div>
              <p className='projects__description'>
                Educational game
              </p>
            </a>
          </div>
          <div  className='projects__card'>
            <a onMouseEnter={buttonEnter} onMouseLeave={Leave} href='http://dential.ma/' target='blank' className='projects__card_container'>
              <div className='projects__card_img'>
                <img
                  src="https://res.cloudinary.com/dvvsyxugn/image/upload/v1697290040/Dential_f6nghr.jpg"
                  alt=''
                />
              </div>
              <div className='projects__title'>
                <h3>Dential</h3>
                <p>2022</p>
              </div>
              <p className='projects__description'>E-learning plateform</p>
            </a>
          </div>
          <div  className='projects__card  item'>
            <a onMouseEnter={buttonEnter} onMouseLeave={Leave} href='https://github.com/hilminomad/mern-webapp' target='blank' className='projects__card_container'>
              <div className='projects__card_img'>
                <img
                  src='https://res.cloudinary.com/dvvsyxugn/image/upload/v1697290758/sabai_1_fztmkk.png'
                  alt=''
                />
              </div>
              <div className='projects__title'>
                <h3>SABAI</h3>
                <p>2022</p>
              </div>
              <p className='projects__description'>Remake of an E-commerce with MERN Stack</p>
            </a>
          </div>
          <div  className='projects__card'>
            <a onMouseEnter={buttonEnter} onMouseLeave={Leave} href='https://lets-highfive.com/' target='blank' className='projects__card_container'>
              <div className='projects__card_img'>
                <img
                  src='https://res.cloudinary.com/dvvsyxugn/image/upload/v1697282856/let_s_highfive_vxz3a9.jpg'
                  alt=''
                />
              </div>
              <div className='projects__title'>
                <h3>HIGHFIVE</h3>
                <p>2021</p>
              </div>
              <p className='projects__description'>
                Design studio Website
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
