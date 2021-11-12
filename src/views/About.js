// assets
import face from '../assets/img/face2.png';

const About = () => {
  return (
    <section className="about section bd-container bg-grid" id="about">
      <span className="section-subtitle">My history</span>
      <h2 className="section-title">About me</h2>
      <div className="about__container bd-grid">
        <div className="about__data bd-grid">
          <p className="about__description">
            <span>
              Hallo, I am
              <br />
            </span>
            <p>
              a Junior Web & Software Developer. I am an Enthusiastic career
              changer joining the coding war as Junior Web Developer. Bringing
              5+ years experience in Business Continuity and Data analysis &
              visualization. Recently graduated a one-year intensive
              Weiterbildung as Web Developer. Looking for a position to apply my
              experience in Web Development and help your business grow by
              building innovative and secure web solutions with an open eye to
              modern aesthetics & design.
            </p>
          </p>
          <div>
            <span className="about__number">1+</span>
            <span className="about__achievement">Years of Experience</span>
          </div>

          <div>
            <span className="about__number">10+</span>
            <span className="about__achievement">Projects</span>
          </div>

          <div>
            <span className="about__number">7</span>
            <span className="about__achievement">Best work awards</span>
          </div>

          <img src={face} alt="profile" className="about__img" />
        </div>
      </div>
    </section>
  );
};

export default About;
