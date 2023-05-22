const Projects = () => {
  return (
    <section className='projects'>
      <div className='projects__container'>
        <div className='projects__text'>
          <h2 className='project__title'>Projects</h2>
          <p className='projects__paragraph'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, non
            provident pariatur fugit nemo nulla assumenda maxime explicabo
            dolorum eveniet ullam amet voluptas rerum quisquam porro doloremque,
            dolor iste harum?
          </p>
        </div>
        <div className='projects__grid'>
          <div className='projects__card'>
            <a href='' className='projects__card_container'>
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
            </a>
          </div>
          <div className='projects__card'>
            <a href='' className='projects__card_container'>
              <div className='projects__card_img'>
                <img
                  src='https://res.cloudinary.com/dvvsyxugn/image/upload/v1684730932/lafalaiz_dpqgu0.png'
                  alt=''
                />
              </div>
              <div className='projects__title'>
                <h3>La falaiz</h3>
                <p>2023</p>
              </div>
            </a>
          </div>
          <div className='projects__card'>
            <a href='' className='projects__card_container'>
              <div className='projects__card_img'>
                <img
                  src='https://res.cloudinary.com/dvvsyxugn/image/upload/v1684730932/lafalaiz_dpqgu0.png'
                  alt=''
                />
              </div>
              <div className='projects__title'>
                <h3>La falaiz</h3>
                <p>2023</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
