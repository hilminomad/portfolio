import React from 'react'
import ExpertiseVector from '../../components/expertiseVector';


const Expertise = () => {
  return (
    <section className='projects expertise' id='1'>
      <div className='projects__container expertise__container'>
        <div className='projects__text'>
          <h2 className='projects__title'>Expertise</h2>
          <div className="projects__subtitle_container">
            <div className="projects__vector_container">
              <ExpertiseVector/>
            </div>
            <p className='projects__paragraph'>
            Weaving narratives into captivating websites.
            <br />My goal is to craft immersive digital journeys that elevate your business endeavors.
            </p>
          </div>
        </div>
        <div className='expertise__content'>
          <div className='expertise__field_container'>
            <div className='expertise__field'>
              <div className='expertise__field_title'>
                <h3>Frontend Development</h3>
              </div>
              <div className='expertise__text'>
                <p>
                  I passionately craft visually stunning websites while
                  prioritizing clean code and excellent user experience, I
                  ensure client satisfaction and delivering exceptional software
                  solutions.
                </p>
              </div>
            </div>
            <div className='expertise__field expertise__variation'>
              <div className='expertise__field_title'>
                <h3>Webflow Development</h3>
              </div>
              <div className='expertise__text '>
                <p>
                I'm a Webflow specialist, creating elegant and responsive websites with fast turnarounds. From custom animations to CMS integration, I leverage Webflow's power for visually appealing, easy-to-manage sites.
                </p>
              </div>
            </div>
            <div className='expertise__field'>
              <div className='expertise__field_title'>
                <h3>SEO & Content</h3>
              </div>
              <div className='expertise__text'>
                <p>
                In the digital realm, visibility is crucial, and my SEO expertise ensures higher search rankings. I optimize your site with top industry practices, including keyword research, on-page enhancements, and effective content and link strategies. Boosting organic traffic and online presence, I drive your business ahead in the competitive online landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
