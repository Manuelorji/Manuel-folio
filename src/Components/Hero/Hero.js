import HeroImage from "./images/cart dp.png";

import "./Hero.scss";

export default function Hero() {
  return (
    <main className="hero" id="home">
      <div className="hero-wave"></div>
      <div className="hero-content">
        <img src={HeroImage} alt={"hero-wave"} data-aos="zoom-in" />
        <h1>Hello world!</h1>
        <h3>I'm Orji Emmanuel</h3>
        <h3>A Front-end Developer</h3>
        <a href="#contacts">
          <button>
            <span className="wave-emoji">👋</span>Let's chat/connect
          </button>
        </a>
      </div>
    </main>
  );
}
