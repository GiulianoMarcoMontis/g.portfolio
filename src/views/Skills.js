import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  // Animations on slide init
  Aos.init({
    offset: 100,
    duration: 600,
    easing: 'ease-in-out',
    delay: 100,
  });

  return (
    <section className="skills section bd-container bd-grid" id="skills">
      <div>
        <span className="section-subtitle">What I bring with</span>
        <h2 className="section-title">Skills</h2>
      </div>

      <div className="skills__container bd-grid">
        {/* Development */}
        <div className="skills__data" data-aos="slide-right">
          <svg
            className="skills__icon"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            width="80px"
            height="80px"
          >
            <path d="M 11 13 C 8.8026661 13 7 14.802666 7 17 L 7 67 L 8 67 L 73 67 L 73 17 C 73 14.802666 71.197334 13 69 13 L 11 13 z M 11 15 L 69 15 C 70.116666 15 71 15.883334 71 17 L 71 24 L 71 65 L 9 65 L 9 24 L 9 17 C 9 16.860417 9.014681 16.724772 9.0410156 16.59375 C 9.2253582 15.676595 10.022917 15 11 15 z M 9 24 A 1 1 0 0 0 10 25 A 1 1 0 0 0 11 24 A 1 1 0 0 0 10 23 A 1 1 0 0 0 9 24 z M 71 24 A 1 1 0 0 0 70 23 A 1 1 0 0 0 69 24 A 1 1 0 0 0 70 25 A 1 1 0 0 0 71 24 z M 14 23 A 1 1 0 0 0 13 24 A 1 1 0 0 0 14 25 A 1 1 0 0 0 15 24 A 1 1 0 0 0 14 23 z M 18 23 A 1 1 0 0 0 17 24 A 1 1 0 0 0 18 25 A 1 1 0 0 0 19 24 A 1 1 0 0 0 18 23 z M 22 23 A 1 1 0 0 0 21 24 A 1 1 0 0 0 22 25 A 1 1 0 0 0 23 24 A 1 1 0 0 0 22 23 z M 26 23 A 1 1 0 0 0 25 24 A 1 1 0 0 0 26 25 A 1 1 0 0 0 27 24 A 1 1 0 0 0 26 23 z M 30 23 A 1 1 0 0 0 29 24 A 1 1 0 0 0 30 25 A 1 1 0 0 0 31 24 A 1 1 0 0 0 30 23 z M 34 23 A 1 1 0 0 0 33 24 A 1 1 0 0 0 34 25 A 1 1 0 0 0 35 24 A 1 1 0 0 0 34 23 z M 38 23 A 1 1 0 0 0 37 24 A 1 1 0 0 0 38 25 A 1 1 0 0 0 39 24 A 1 1 0 0 0 38 23 z M 42 23 A 1 1 0 0 0 41 24 A 1 1 0 0 0 42 25 A 1 1 0 0 0 43 24 A 1 1 0 0 0 42 23 z M 46 23 A 1 1 0 0 0 45 24 A 1 1 0 0 0 46 25 A 1 1 0 0 0 47 24 A 1 1 0 0 0 46 23 z M 50 23 A 1 1 0 0 0 49 24 A 1 1 0 0 0 50 25 A 1 1 0 0 0 51 24 A 1 1 0 0 0 50 23 z M 54 23 A 1 1 0 0 0 53 24 A 1 1 0 0 0 54 25 A 1 1 0 0 0 55 24 A 1 1 0 0 0 54 23 z M 58 23 A 1 1 0 0 0 57 24 A 1 1 0 0 0 58 25 A 1 1 0 0 0 59 24 A 1 1 0 0 0 58 23 z M 62 23 A 1 1 0 0 0 61 24 A 1 1 0 0 0 62 25 A 1 1 0 0 0 63 24 A 1 1 0 0 0 62 23 z M 66 23 A 1 1 0 0 0 65 24 A 1 1 0 0 0 66 25 A 1 1 0 0 0 67 24 A 1 1 0 0 0 66 23 z M 43.960938 31.486328 A 1.0001 1.0001 0 0 0 43.037109 32.230469 L 36.037109 57.230469 A 1.0001 1.0001 0 1 0 37.962891 57.769531 L 44.962891 32.769531 A 1.0001 1.0001 0 0 0 43.960938 31.486328 z M 30.037109 35.988281 A 1.0001 1.0001 0 0 0 29.199219 36.400391 L 22.75 45 L 29.199219 53.599609 A 1.0003905 1.0003905 0 1 0 30.800781 52.400391 L 25.25 45 L 30.800781 37.599609 A 1.0001 1.0001 0 0 0 30.037109 35.988281 z M 50.933594 35.990234 A 1.0001 1.0001 0 0 0 50.199219 37.599609 L 55.75 45 L 50.199219 52.400391 A 1.0003905 1.0003905 0 1 0 51.800781 53.599609 L 58.25 45 L 51.800781 36.400391 A 1.0001 1.0001 0 0 0 50.933594 35.990234 z" />
          </svg>
          <h3 className="skills__title">Web Development</h3>
          <p className="skills__description">
            By learning the foundations to become a full stack web developer, I
            discovered the love for coding, solving challenges and quickly
            getting accustomed to new programming languages and documentations
          </p>
        </div>

        {/* Design */}
        <div className="skills__data" data-aos="slide-left">
          <svg
            className="skills__icon"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            width="80px"
            height="80px"
          >
            <path d="M 61.179688 7.8027344 L 54.255859 17.75 C 53.993083 17.628156 53.718653 17.546351 53.4375 17.544922 C 53.30453 17.544246 53.171331 17.556975 53.041016 17.582031 C 52.519755 17.682257 52.037355 17.984293 51.732422 18.460938 L 51.728516 18.466797 L 38.306641 40.001953 C 38.275474 40.001584 38.284469 40.000069 38.251953 40 C 34.244852 39.9924 30.290433 41.874157 27.785156 45.394531 C 25.61367 48.446025 25.630826 52.635674 25.251953 57.070312 C 24.885483 61.359774 24.215084 65.886374 21.453125 70 L 7 70 L 7 72 L 22 72 A 1.0001 1.0001 0 0 0 22.164062 71.986328 C 25.958092 71.355323 31.227631 70.483812 36.222656 68.777344 C 41.217681 67.070875 45.993433 64.534414 48.675781 60.388672 C 51.022665 56.761844 51.627122 52.434852 50.302734 48.601562 L 66.558594 28.628906 L 66.5625 28.625 C 67.188572 27.843284 67.112337 26.715147 66.451172 26.007812 L 73.167969 16.357422 L 71.525391 15.214844 L 64.824219 24.841797 L 55.939453 18.832031 L 62.820312 8.9472656 L 61.179688 7.8027344 z M 68 13 A 1 1 0 0 0 67 14 A 1 1 0 0 0 68 15 A 1 1 0 0 0 69 14 A 1 1 0 0 0 68 13 z M 66.013672 16.162109 A 1 1 0 0 0 65.013672 17.162109 A 1 1 0 0 0 66.013672 18.162109 A 1 1 0 0 0 67.013672 17.162109 A 1 1 0 0 0 66.013672 16.162109 z M 64 19 A 1 1 0 0 0 63 20 A 1 1 0 0 0 64 21 A 1 1 0 0 0 65 20 A 1 1 0 0 0 64 19 z M 53.417969 19.539062 L 53.427734 19.546875 L 65 27.375 L 65 27.376953 L 61.996094 31.068359 A 1 1 0 0 0 62 31 A 1 1 0 0 0 61 30 A 1 1 0 0 0 60 31 A 1 1 0 0 0 61 32 A 1 1 0 0 0 61.267578 31.962891 L 49.21875 46.765625 A 1.0001 1.0001 0 0 0 49.003906 46.707031 L 40.349609 40.507812 L 53.417969 19.539062 z M 52 24 A 1 1 0 0 0 51 25 A 1 1 0 0 0 52 26 A 1 1 0 0 0 53 25 A 1 1 0 0 0 52 24 z M 55 26 A 1 1 0 0 0 54 27 A 1 1 0 0 0 55 28 A 1 1 0 0 0 56 27 A 1 1 0 0 0 55 26 z M 58 28 A 1 1 0 0 0 57 29 A 1 1 0 0 0 58 30 A 1 1 0 0 0 59 29 A 1 1 0 0 0 58 28 z M 38.248047 42 C 38.671776 42.0009 38.886719 42.027344 38.886719 42.027344 A 1.0001 1.0001 0 0 0 39.052734 42.039062 L 48.121094 48.535156 C 49.584539 51.923642 49.193434 55.910026 46.998047 59.302734 C 44.709395 62.839993 40.359897 65.250484 35.576172 66.884766 C 31.562227 68.256064 27.442896 69.026875 23.927734 69.630859 C 26.224617 65.49798 26.910821 61.141681 27.244141 57.240234 C 27.630017 52.723622 27.78055 48.850192 29.414062 46.554688 C 31.538785 43.569062 34.867148 41.993593 38.248047 42 z M 45.009766 51.830078 C 44.459766 51.830078 44 52.270313 44 52.820312 C 43.99 53.370313 44.428516 53.829844 44.978516 53.839844 L 44.990234 53.839844 C 45.540234 53.839844 45.99 53.399609 46 52.849609 C 46 52.299609 45.559766 51.840078 45.009766 51.830078 z M 44.037109 55.658203 C 43.649219 55.614609 43.261844 55.800156 43.058594 56.160156 C 42.779594 56.640156 42.950453 57.249297 43.439453 57.529297 C 43.590453 57.609297 43.760922 57.650391 43.919922 57.650391 C 44.269922 57.650391 44.608828 57.470391 44.798828 57.150391 L 44.798828 57.140625 C 45.067828 56.660625 44.898922 56.049297 44.419922 55.779297 C 44.297422 55.711797 44.166406 55.672734 44.037109 55.658203 z M 41.402344 58.626953 C 41.147469 58.594453 40.879656 58.660078 40.660156 58.830078 C 40.229156 59.170078 40.148516 59.790469 40.478516 60.230469 C 40.679516 60.490469 40.978297 60.619141 41.279297 60.619141 C 41.489297 60.619141 41.699672 60.550156 41.888672 60.410156 C 42.318672 60.070156 42.398359 59.439766 42.068359 59.009766 C 41.898359 58.789766 41.657219 58.659453 41.402344 58.626953 z M 37.794922 60.677734 C 37.664609 60.682578 37.533203 60.712031 37.408203 60.769531 L 37.419922 60.769531 C 36.919922 61.009531 36.700453 61.609375 36.939453 62.109375 C 37.109453 62.469375 37.470609 62.679688 37.849609 62.679688 C 37.990609 62.679688 38.139531 62.650078 38.269531 62.580078 C 38.769531 62.340078 38.977047 61.75 38.748047 61.25 C 38.568047 60.875 38.185859 60.663203 37.794922 60.677734 z M 34.203125 62.160156 C 34.073859 62.150156 33.940797 62.165937 33.810547 62.210938 C 33.281547 62.380937 32.999688 62.950703 33.179688 63.470703 C 33.309687 63.890703 33.710859 64.160156 34.130859 64.160156 C 34.230859 64.160156 34.339453 64.139375 34.439453 64.109375 L 34.439453 64.099609 C 34.960453 63.929609 35.251312 63.359844 35.070312 62.839844 C 34.942813 62.449844 34.590922 62.190156 34.203125 62.160156 z" />
          </svg>
          <h3 className="skills__title">Design</h3>
          <p className="skills__description">
            One of my hobbies has been to volunteer as designer to produce
            logos, posters, flyers and other advertisment materials for
            companies, concert halls, cultural associacions and more
          </p>
        </div>

        {/* teamwork */}
        <div className="skills__data" data-aos="slide-right">
          <svg
            className="skills__icon"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            width="80px"
            height="80px"
          >
            <path d="M 31 6 C 28.802937 6 27 7.8029372 27 10 L 27 21 C 27 23.197063 28.802937 25 31 25 L 32 25 L 32 30.070312 L 37.070312 25 L 49 25 C 51.197063 25 53 23.197063 53 21 L 53 10 C 53 7.8029372 51.197063 6 49 6 L 31 6 z M 31 8 L 49 8 C 50.114937 8 51 8.8850628 51 10 L 51 21 C 51 22.114937 50.114937 23 49 23 L 36.242188 23 L 34 25.242188 L 34 23 L 31 23 C 29.885063 23 29 22.114937 29 21 L 29 10 C 29 8.8850628 29.885063 8 31 8 z M 46.292969 10.292969 L 39 17.585938 L 35.707031 14.292969 L 34.292969 15.707031 L 39 20.414062 L 47.707031 11.707031 L 46.292969 10.292969 z M 17 26 C 12.592874 26 9 29.592874 9 34 C 9 38.407126 12.592874 42 17 42 C 21.407126 42 25 38.407126 25 34 L 25 33 L 24.796875 33 C 24.282076 29.084164 21.052768 26 17 26 z M 61 26 C 56.592874 26 53 29.592874 53 34 C 53 38.407126 56.592874 42 61 42 C 61.275445 42 61.548001 41.986375 61.816406 41.958984 C 63.695246 41.767248 65.384373 40.920314 66.652344 39.652344 C 68.101453 38.203235 69 36.203563 69 34 L 69 33 L 68.796875 33 C 68.282076 29.084164 65.052768 26 61 26 z M 17 28 C 20.326874 28 23 30.673126 23 34 C 23 37.326874 20.326874 40 17 40 C 13.673126 40 11 37.326874 11 34 C 11 30.673126 13.673126 28 17 28 z M 61 28 C 64.326874 28 67 30.673126 67 34 C 67 37.326874 64.326874 40 61 40 C 57.673126 40 55 37.326874 55 34 C 55 33.79207 55.010859 33.587095 55.03125 33.384766 C 55.337112 30.349828 57.881056 28 61 28 z M 39 33 C 34.041484 33 30 37.041484 30 42 C 30 46.958516 34.041484 51 39 51 C 43.958516 51 48 46.958516 48 42 L 48 41 L 47.796875 41 C 47.275261 36.532432 43.604108 33 39 33 z M 39 35 C 42.877484 35 46 38.122516 46 42 C 46 45.877484 42.877484 49 39 49 C 35.122516 49 32 45.877484 32 42 C 32 38.122516 35.122516 35 39 35 z M 17 44 C 9.3062063 44 3 50.306206 3 58 L 3 62 L 25.269531 62 C 24.457834 63.84109 24 65.868987 24 68 L 24 72 L 54 72 L 54 69 L 54 68 C 54 65.868987 53.542166 63.84109 52.730469 62 L 75 62 L 75 58 C 75 50.306206 68.693794 44 61 44 C 54.158556 44 48.446319 48.988522 47.257812 55.503906 C 44.884282 53.926028 42.045242 53 39 53 C 35.954758 53 33.115718 53.926028 30.742188 55.503906 C 29.553681 48.988522 23.841444 44 17 44 z M 17 46 C 23.245162 46 28.37815 50.832416 28.921875 56.941406 C 27.934708 57.842395 27.067924 58.868215 26.347656 60 L 5 60 L 5 58 C 5 51.397794 10.397794 46 17 46 z M 61 46 C 67.602206 46 73 51.397794 73 58 L 73 60 L 51.652344 60 C 50.932076 58.868215 50.065292 57.842395 49.078125 56.941406 C 49.62185 50.832416 54.754838 46 61 46 z M 39 55 C 46.153388 55 52 60.846612 52 68 L 52 70 L 26 70 L 26 68 C 26 60.846612 31.846612 55 39 55 z M 7 56 C 6.449 56 6 56.449 6 57 C 6 57.551 6.449 58 7 58 C 7.551 58 8 57.551 8 57 C 8 56.449 7.551 56 7 56 z M 11 56 C 10.449 56 10 56.449 10 57 C 10 57.551 10.449 58 11 58 C 11.551 58 12 57.551 12 57 C 12 56.449 11.551 56 11 56 z M 15 56 C 14.449 56 14 56.449 14 57 C 14 57.551 14.449 58 15 58 C 15.551 58 16 57.551 16 57 C 16 56.449 15.551 56 15 56 z M 19 56 C 18.449 56 18 56.449 18 57 C 18 57.551 18.449 58 19 58 C 19.551 58 20 57.551 20 57 C 20 56.449 19.551 56 19 56 z M 23 56 C 22.449 56 22 56.449 22 57 C 22 57.551 22.449 58 23 58 C 23.551 58 24 57.551 24 57 C 24 56.449 23.551 56 23 56 z M 27 56 C 26.449 56 26 56.449 26 57 C 26 57.551 26.449 58 27 58 C 27.551 58 28 57.551 28 57 C 28 56.449 27.551 56 27 56 z M 51 56 C 50.449 56 50 56.449 50 57 C 50 57.551 50.449 58 51 58 C 51.551 58 52 57.551 52 57 C 52 56.449 51.551 56 51 56 z M 55 56 C 54.449 56 54 56.449 54 57 C 54 57.551 54.449 58 55 58 C 55.551 58 56 57.551 56 57 C 56 56.449 55.551 56 55 56 z M 59 56 C 58.449 56 58 56.449 58 57 C 58 57.551 58.449 58 59 58 C 59.551 58 60 57.551 60 57 C 60 56.449 59.551 56 59 56 z M 63 56 C 62.449 56 62 56.449 62 57 C 62 57.551 62.449 58 63 58 C 63.551 58 64 57.551 64 57 C 64 56.449 63.551 56 63 56 z M 67 56 C 66.449 56 66 56.449 66 57 C 66 57.551 66.449 58 67 58 C 67.551 58 68 57.551 68 57 C 68 56.449 67.551 56 67 56 z M 71 56 C 70.449 56 70 56.449 70 57 C 70 57.551 70.449 58 71 58 C 71.551 58 72 57.551 72 57 C 72 56.449 71.551 56 71 56 z M 29 66 C 28.449 66 28 66.449 28 67 C 28 67.551 28.449 68 29 68 C 29.551 68 30 67.551 30 67 C 30 66.449 29.551 66 29 66 z M 33 66 C 32.449 66 32 66.449 32 67 C 32 67.551 32.449 68 33 68 C 33.551 68 34 67.551 34 67 C 34 66.449 33.551 66 33 66 z M 37 66 C 36.449 66 36 66.449 36 67 C 36 67.551 36.449 68 37 68 C 37.551 68 38 67.551 38 67 C 38 66.449 37.551 66 37 66 z M 41 66 C 40.449 66 40 66.449 40 67 C 40 67.551 40.449 68 41 68 C 41.551 68 42 67.551 42 67 C 42 66.449 41.551 66 41 66 z M 45 66 C 44.449 66 44 66.449 44 67 C 44 67.551 44.449 68 45 68 C 45.551 68 46 67.551 46 67 C 46 66.449 45.551 66 45 66 z M 49 66 C 48.449 66 48 66.449 48 67 C 48 67.551 48.449 68 49 68 C 49.551 68 50 67.551 50 67 C 50 66.449 49.551 66 49 66 z" />
          </svg>
          <h3 className="skills__title">Teamwork</h3>
          <p className="skills__description">
            By working for big as well as small-size companies, I developed
            teamworking skills which go behond smiply being able to work
            together with other colleagues. My aim is to support the team and
            keep it together. Find interesting inputs and share knowledge with
            colleagues and managers
          </p>
        </div>

        {/* coaching */}
        <div className="skills__data" data-aos="slide-left">
          <svg
            className="skills__icon"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            width="80px"
            height="80px"
          >
            <path d="M 30 8 C 21.804779 8 15 13.74207 15 21 C 15 28.25793 21.804779 34 30 34 C 32.431085 34 34.734267 33.48621 36.779297 32.585938 C 39.542444 35.298656 43.540071 37 48 37 C 56.19527 37 63 31.257552 63 24 C 63 16.742448 56.19527 11 48 11 C 45.566632 11 43.273 11.512097 41.238281 12.40625 C 38.475195 9.6996201 34.44735 8 30 8 z M 30 10 C 37.268752 10 43 15.003096 43 21 C 43 26.996904 37.268752 32 30 32 C 22.731248 32 17 26.996904 17 21 C 17 15.003096 22.731248 10 30 10 z M 30 12 A 1 1 0 0 0 29 13 A 1 1 0 0 0 30 14 A 1 1 0 0 0 31 13 A 1 1 0 0 0 30 12 z M 48 13 C 55.26873 13 61 18.003552 61 24 C 61 29.996448 55.26873 35 48 35 C 44.301748 35 40.991126 33.682016 38.640625 31.611328 C 42.466728 29.270377 45 25.421107 45 21 C 45 18.408957 44.12095 16.018243 42.632812 14.005859 C 44.269168 13.37144 46.077213 13 48 13 z M 25 13.072266 A 1 1 0 0 0 24 14.072266 A 1 1 0 0 0 25 15.072266 A 1 1 0 0 0 26 14.072266 A 1 1 0 0 0 25 13.072266 z M 35 13.072266 A 1 1 0 0 0 34 14.072266 A 1 1 0 0 0 35 15.072266 A 1 1 0 0 0 36 14.072266 A 1 1 0 0 0 35 13.072266 z M 48 15 A 1 1 0 0 0 47 16 A 1 1 0 0 0 48 17 A 1 1 0 0 0 49 16 A 1 1 0 0 0 48 15 z M 21.072266 16 A 1 1 0 0 0 20.072266 17 A 1 1 0 0 0 21.072266 18 A 1 1 0 0 0 22.072266 17 A 1 1 0 0 0 21.072266 16 z M 38.927734 16 A 1 1 0 0 0 37.927734 17 A 1 1 0 0 0 38.927734 18 A 1 1 0 0 0 39.927734 17 A 1 1 0 0 0 38.927734 16 z M 53 16.072266 A 1 1 0 0 0 52 17.072266 A 1 1 0 0 0 53 18.072266 A 1 1 0 0 0 54 17.072266 A 1 1 0 0 0 53 16.072266 z M 56.927734 19 A 1 1 0 0 0 55.927734 20 A 1 1 0 0 0 56.927734 21 A 1 1 0 0 0 57.927734 20 A 1 1 0 0 0 56.927734 19 z M 20 21 A 1 1 0 0 0 19 22 A 1 1 0 0 0 20 23 A 1 1 0 0 0 21 22 A 1 1 0 0 0 20 21 z M 40 21 A 1 1 0 0 0 39 22 A 1 1 0 0 0 40 23 A 1 1 0 0 0 41 22 A 1 1 0 0 0 40 21 z M 58 24 A 1 1 0 0 0 57 25 A 1 1 0 0 0 58 26 A 1 1 0 0 0 59 25 A 1 1 0 0 0 58 24 z M 13 29 C 10.317976 29 8 30.949358 8 33.5 C 8 36.050642 10.317976 38 13 38 C 15.682024 38 18 36.050642 18 33.5 C 18 30.949358 15.682024 29 13 29 z M 13 31 C 14.736254 31 16 32.184649 16 33.5 C 16 34.815351 14.736254 36 13 36 C 11.263746 36 10 34.815351 10 33.5 C 10 32.184649 11.263746 31 13 31 z M 67 31 C 64.317976 31 62 32.949358 62 35.5 C 62 38.050642 64.317976 40 67 40 C 69.682024 40 72 38.050642 72 35.5 C 72 32.949358 69.682024 31 67 31 z M 67 33 C 68.736254 33 70 34.184649 70 35.5 C 70 36.815351 68.736254 38 67 38 C 65.263746 38 64 36.815351 64 35.5 C 64 34.184649 65.263746 33 67 33 z M 24.1875 36.03125 C 20.292111 36.03125 17.014963 37.937943 14.734375 40.6875 C 14.113491 40.244338 13.333842 40 12.5 40 C 10.686946 40 9 41.219887 9 43 C 9 44.564718 10.302849 45.694309 11.849609 45.945312 C 11.299123 47.613591 11 49.366977 11 51.111328 C 11 54.486123 12.005859 61.146484 12.005859 61.146484 L 12.132812 62 L 18.332031 62 C 17.606046 62.271305 16.767027 62.618326 15.835938 63.087891 C 14.685778 63.667935 13.545867 64.353186 12.638672 65.191406 C 11.731477 66.029626 11 67.081373 11 68.353516 L 11 72 L 39 72 L 39 68.353516 C 39 67.081373 38.268543 66.029628 37.361328 65.191406 C 36.454114 64.353185 35.31429 63.667937 34.164062 63.087891 C 33.233464 62.618601 32.393991 62.271222 31.667969 62 L 37.751953 62 L 37.933594 61.228516 C 37.933594 61.228516 39.00093 56.713843 39.001953 51.111328 C 39.001953 47.043548 38.046429 44.071809 36.496094 42.085938 C 35.073301 40.263437 33.133508 39.422034 31.199219 39.279297 C 31.012128 38.97752 30.786757 38.503479 29.876953 37.802734 C 28.70813 36.902489 26.838949 36.03125 24.1875 36.03125 z M 54.320312 38 C 51.564324 38 49.167894 39.484079 47.441406 40.892578 C 45.714919 42.301077 44.611328 43.71875 44.611328 43.71875 L 43.708984 44.876953 L 45.117188 45.292969 C 45.117188 45.292969 45.285721 45.329369 45.556641 45.607422 C 45.82756 45.885479 46.146484 46.352447 46.146484 47.400391 C 46.146484 48.846286 46.343091 50.541209 46.458984 51.535156 C 46.198893 51.856843 46 52.234457 46 52.693359 C 46 53.173681 46.120118 53.459625 46.207031 53.755859 C 46.250491 53.903977 46.291631 54.037476 46.316406 54.128906 C 46.341176 54.220336 46.332031 54.325947 46.332031 54.132812 C 46.332031 55.05393 47.07924 55.728209 47.953125 55.845703 C 48.326476 57.360248 49.11889 58.67083 50.265625 59.654297 L 50.265625 61.349609 C 49.427004 61.608943 47.815874 62.089375 45.835938 63.087891 C 44.685778 63.667935 43.545867 64.353186 42.638672 65.191406 C 41.731472 66.029632 41 67.081373 41 68.353516 L 41 72 L 69 72 L 69 68.353516 C 69 67.081373 68.268543 66.029628 67.361328 65.191406 C 66.454114 64.353185 65.31429 63.667937 64.164062 63.087891 C 62.183903 62.08932 60.571738 61.609027 59.732422 61.349609 L 59.732422 59.654297 C 60.878697 58.671225 61.671347 57.361443 62.044922 55.847656 C 62.919291 55.730627 63.666016 55.054305 63.666016 54.132812 C 63.666016 54.325941 63.658814 54.220326 63.683594 54.128906 C 63.708364 54.037476 63.749514 53.903977 63.792969 53.755859 C 63.879879 53.459625 63.998047 53.173681 63.998047 52.693359 C 63.998047 52.236021 63.801229 51.857382 63.541016 51.535156 C 63.690893 50.208049 64 47.465134 64 45.933594 C 64 43.904975 63.221095 42.377594 62.15625 41.441406 C 61.242071 40.637681 60.188696 40.312463 59.21875 40.21875 C 59.04137 39.945729 58.961445 39.713781 58.402344 39.277344 C 57.562455 38.621724 56.212357 38 54.320312 38 z M 24.1875 38.03125 C 26.411051 38.03125 27.793823 38.724418 28.65625 39.388672 C 29.518677 40.052926 29.800781 40.621094 29.800781 40.621094 L 30.080078 41.160156 L 30.6875 41.160156 C 32.217488 41.160156 33.722257 41.784233 34.919922 43.318359 C 36.117587 44.852486 37.001953 47.357108 37.001953 51.111328 C 37.00111 55.730168 36.331378 59.036078 36.125 60 L 29.732422 60 L 29.732422 59.578125 C 33.020036 55.881181 33 50.4455 33 49 L 33 48.279297 L 32.316406 48.050781 C 29.759125 47.198354 27.832031 44.445314 27.832031 44.445312 L 27.105469 43.357422 L 26.246094 44.34375 C 26.246094 44.34375 23.028207 48 18 48 L 17 48 L 17 49 C 17 50.454835 16.98178 55.878501 20.265625 59.574219 L 20.265625 60 L 13.898438 60 C 13.754734 58.989322 13 53.807636 13 51.111328 C 13 47.916605 14.152661 44.594552 16.132812 42.123047 C 18.112965 39.651542 20.859958 38.03125 24.1875 38.03125 z M 54.320312 40 C 55.789268 40 56.645514 40.444589 57.171875 40.855469 C 57.698236 41.266349 57.835936 41.576172 57.835938 41.576172 L 58.111328 42.132812 L 58.732422 42.132812 C 59.330011 42.132812 60.187533 42.373297 60.835938 42.943359 C 61.484341 43.513422 62 44.387213 62 45.933594 C 62 47.268937 61.642367 50.665437 61.515625 51.773438 L 61.441406 52.421875 L 61.986328 52.738281 C 61.978828 52.718011 61.945468 52.946528 61.873047 53.193359 C 61.833257 53.328992 61.789617 53.468414 61.751953 53.607422 C 61.728573 53.693692 61.716949 53.824231 61.699219 53.933594 L 60.445312 53.933594 L 60.333984 54.808594 C 60.142233 56.327401 59.330271 57.628666 58.146484 58.484375 L 57.732422 58.783203 L 57.732422 62.775391 L 58.451172 62.986328 C 58.88392 63.113772 61.162377 63.813389 63.263672 64.873047 C 64.31432 65.402876 65.318402 66.026784 66.003906 66.660156 C 66.689407 67.293528 67 67.875658 67 68.353516 L 67 70 L 43 70 L 43 68.353516 C 43 67.875658 43.310601 67.29353 43.996094 66.660156 C 44.681586 66.026783 45.685738 65.402877 46.736328 64.873047 C 48.837509 63.813386 51.115762 63.114003 51.548828 62.986328 L 52.265625 62.775391 L 52.265625 58.783203 L 51.851562 58.484375 C 50.667777 57.628666 49.855815 56.327401 49.664062 54.808594 L 49.552734 53.933594 L 48.298828 53.933594 C 48.281098 53.824231 48.269464 53.693694 48.246094 53.607422 C 48.208434 53.468414 48.166744 53.328992 48.126953 53.193359 C 48.054823 52.947502 48.019502 52.722466 48.011719 52.740234 L 48.556641 52.416016 L 48.478516 51.769531 C 48.377446 50.934476 48.146484 48.802547 48.146484 47.400391 C 48.146484 45.896334 47.590362 44.830834 46.988281 44.212891 C 46.971251 44.195411 46.968352 44.206293 46.951172 44.189453 C 47.336332 43.741724 47.629688 43.318728 48.705078 42.441406 C 50.247093 41.183407 52.310302 40 54.320312 40 z M 12.5 42 C 12.9319 42 13.295974 42.139634 13.556641 42.318359 C 13.163093 42.943275 12.806567 43.592023 12.5 44.267578 L 12.5 44 C 11.551054 44 11 43.429887 11 43 C 11 42.570113 11.551054 42 12.5 42 z M 69.5 42 C 67.686936 42 66 43.21988 66 45 C 66 46.78012 67.686936 48 69.5 48 C 71.313064 48 73 46.78012 73 45 C 73 43.21988 71.313064 42 69.5 42 z M 69.5 44 C 70.44836 44 71 44.570981 71 45 C 71 45.429019 70.44836 46 69.5 46 C 68.55164 46 68 45.429019 68 45 C 68 44.570981 68.55164 44 69.5 44 z M 26.863281 46.392578 C 27.507662 47.23879 28.745697 48.584623 30.945312 49.574219 C 30.921243 51.409066 30.705166 55.887084 28.023438 58.591797 L 27.732422 58.882812 L 27.732422 62.775391 L 28.451172 62.986328 C 28.88392 63.113772 31.162377 63.813389 33.263672 64.873047 C 34.31432 65.402876 35.318402 66.026784 36.003906 66.660156 C 36.68941 67.293528 37 67.875658 37 68.353516 L 37 70 L 13 70 L 13 68.353516 C 13 67.875658 13.310601 67.29353 13.996094 66.660156 C 14.681586 66.026783 15.685738 65.402877 16.736328 64.873047 C 18.837509 63.813386 21.115762 63.114003 21.548828 62.986328 L 22.265625 62.775391 L 22.265625 58.882812 L 21.976562 58.591797 C 19.37764 55.969797 19.117969 51.771042 19.078125 49.820312 C 23.426716 49.408349 25.923607 47.326506 26.863281 46.392578 z M 17 66 A 1 1 0 0 0 16 67 A 1 1 0 0 0 17 68 A 1 1 0 0 0 18 67 A 1 1 0 0 0 17 66 z M 21 66 A 1 1 0 0 0 20 67 A 1 1 0 0 0 21 68 A 1 1 0 0 0 22 67 A 1 1 0 0 0 21 66 z M 25 66 A 1 1 0 0 0 24 67 A 1 1 0 0 0 25 68 A 1 1 0 0 0 26 67 A 1 1 0 0 0 25 66 z M 29 66 A 1 1 0 0 0 28 67 A 1 1 0 0 0 29 68 A 1 1 0 0 0 30 67 A 1 1 0 0 0 29 66 z M 33 66 A 1 1 0 0 0 32 67 A 1 1 0 0 0 33 68 A 1 1 0 0 0 34 67 A 1 1 0 0 0 33 66 z M 47 66 A 1 1 0 0 0 46 67 A 1 1 0 0 0 47 68 A 1 1 0 0 0 48 67 A 1 1 0 0 0 47 66 z M 51 66 A 1 1 0 0 0 50 67 A 1 1 0 0 0 51 68 A 1 1 0 0 0 52 67 A 1 1 0 0 0 51 66 z M 55 66 A 1 1 0 0 0 54 67 A 1 1 0 0 0 55 68 A 1 1 0 0 0 56 67 A 1 1 0 0 0 55 66 z M 59 66 A 1 1 0 0 0 58 67 A 1 1 0 0 0 59 68 A 1 1 0 0 0 60 67 A 1 1 0 0 0 59 66 z M 63 66 A 1 1 0 0 0 62 67 A 1 1 0 0 0 63 68 A 1 1 0 0 0 64 67 A 1 1 0 0 0 63 66 z" />
          </svg>
          <h3 className="skills__title">Coaching</h3>
          <p className="skills__description">
            By training and coaching managers and colleagues in the past, I
            learned how to teach, to share knowledge and understand what
            different audiences need. The concept of sustainable development is
            for me essential in an organization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
