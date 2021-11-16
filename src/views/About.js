import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  // Animations on slide init
  Aos.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 200,
  });

  return (
    <section
      className="about section bd-container bd-grid"
      id="about"
      data-aos="fade-down"
    >
      <div>
        <span className="section-subtitle">My history</span>
        <h2 className="section-title">About me</h2>
      </div>

      <div className="about__container bd-grid">
        <div className="about__data bd-grid">
          <p className="about__description">
            <span>
              Hi there!!
              <br />
            </span>
            I'm an enthusiastic career changer joining the coding war as Junior
            Web Developer. <br />
            <br />I bring 5+ years experience in Business Continuity, data
            analysis & data visualization. I've recently graduated a one-year
            intensive Weiterbildung as Web & Software Developer in Germany.
            <br />
            <br />
            I'm Looking for a position to apply my experience in Web Development
            and help your business grow by building innovative and secure web
            solutions with an open eye to modern aesthetics & design.
          </p>
          <div>
            <span className="about__number">1+ years</span>
            <span className="about__achievement">Web Dev Experience</span>
          </div>

          <div>
            <span className="about__number">10+ techs</span>
            <span className="about__achievement">Web Dev Technologies</span>
          </div>

          <div>
            <span className="about__number">7+ years</span>
            <span className="about__achievement">
              Transferable skills experience
            </span>
          </div>
        </div>
        <img
          src="/img/pictures/face2.png"
          alt="profile"
          className="about__img"
        />
      </div>
    </section>
  );
};

export default About;
