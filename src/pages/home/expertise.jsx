const Expertise = () => {
  return (
    <section className='projects expertise'>
      <div className='projects__container expertise__container'>
        <div className='projects__text'>
          <h2 className='projects__title'>Expertise</h2>
          <p className='projects__paragraph'>
            Looking for a website?
            <br />
            Have a question or just want to <br />
            drop a friendly greeting? <br />
            Feel free to get in touch with me.
          </p>
        </div>
        <div className='expertise__content'>
          <div className='expertise__field_container'>
            <div className='expertise__field'>
              <div className='expertise__field_title'>
                <h3>Frontend Development</h3>
              </div>
            </div>
            <div className='expertise__field'>
              <div className='expertise__field_title'>
                <h3>Webflow Development</h3>
              </div>
            </div>
            <div className='expertise__field'>
              <div className='expertise__field_title'>
                <h3>SEO & Content</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
