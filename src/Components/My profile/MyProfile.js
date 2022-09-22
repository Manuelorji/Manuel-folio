import TechP from "./images/Tech Personality.jpg";
import Interest from "./images/interest.jpg";
import Hobbies from "./images/Hobby.jpg";
import Html from "./images/HTML5.svg";
import Css from "./images/CSS3.svg";
import Js from "./images/JS.svg";
import ReactImage from "./images/React.svg";
import NodeJs from "./images/nodejs.svg";
import Bootstrap from "./images/bootstrap icon.png";
import Sass from "./images/Sass.svg";
import Git from "./images/git.svg";
import MongoDb from "./images/mongodb.svg";
import PostgreSql from "./images/postgresql logo.png";
import CorelDraw from "./images/corel draw.svg";
import AOS from "./images/aos.png";
import FMotion from "./images/Motion.png";
import "./MyProfile.scss";

const MyProfile = () => {
  return (
    <section className="profile" id="profile">
      <div className="profile-welcome-txt">
        <h1 className="slide-animation">
          <span>
            HEY WELCOME! I KNOW YOU WANNA KNOW ME MORE
            <span>...HERE WE GO!</span>
          </span>
        </h1>
      </div>
      <div className="my-profile">
        <h1>My Profile</h1>
        <div className="my-profile-intro">
          <div className="tech-personality" data-aos="zoom-in">
            <img src={TechP} alt={"Tech-personality"} />
            <span>
              <span className="underline-txt">Tech Personality:</span> I'm
              passionate about Technology and I love creating amazing
              websites/web Apps with good and wonderful User Experience. I have
              a dynamic and progressive personality, I'm open to learn as much
              as practically possible to increase my skill level and I'm forever
              open to work with good Team of developers all over the world in
              order to make a positive impact to the world.
            </span>
          </div>
          <div className="interest" data-aos="fade-left">
            <img src={Interest} alt={"interest"} />
            <span>
              <span className="underline-txt">Interests:</span> I have interest
              in Technology, Music, Sports and a little in politics.
            </span>
          </div>
          <div className="hobbies" data-aos="zoom-in">
            <img src={Hobbies} alt={"hobbies"} />
            <span>
              <span className="underline-txt">Hobbies:</span> Aside from writing
              codes, I also enjoy graphic designing, I'm a football lover and I
              just don't watch it, I play it. Before I forget I love music and
              just like football I listen, I sing and I play Piano too.
            </span>
          </div>
        </div>
        <div className="soft-skills-ctn" data-aos="fade-right">
          <h4>Soft Skills</h4>
          <div className="soft-skills">
            <div>Fast learner</div>
            <div>Creative</div>
            <div>Organized</div>
            <div>Motivated</div>
            <div>Reliable</div>
            <div>Professional</div>
            <div>Team player</div>
            <div>Problem Solver</div>
            <div>Time manager</div>
          </div>
        </div>
        <div className="profile-skills">
          <h4>Checkout my Tech skills</h4>
          <h2>
            I have Interesting tools
            <br /> I work with
          </h2>
          <div className="skills">
            <div className="skill">
              <img src={Html} alt={"Html"} />
              <span> HTML</span>
            </div>
            <div className="skill">
              <img src={Css} alt={"Css"} />
              <span> CSS</span>
            </div>
            <div className="skill">
              <img src={Sass} alt={"Sass"} />
              <span> SASS</span>
            </div>
            <div className="skill">
              <img src={Bootstrap} alt={"Bootstrap"} />
              <span> BOOTSTRAP</span>
            </div>
            <div className="skill">
              <img src={Js} alt={"Javascript"} />
              <span> JAVASCRIPT</span>
            </div>
            <div className="skill">
              <img src={ReactImage} alt={"React"} />
              <span> REACT JS</span>
            </div>
            <div className="skill">
              <img src={NodeJs} alt={"nodeJs"} />
              <span> NODE JS</span>
            </div>
            <div className="skill">
              <img src={PostgreSql} alt={"postgresql"} />
              <span> POSTGRESQL</span>
            </div>
            <div className="skill">
              <img src={MongoDb} alt={"mongoDb"} />
              <span> MONGO DB</span>
            </div>
            <div className="skill">
              <img src={Git} alt={"git"} />
              <span> GIT</span>
            </div>
            <div className="skill">
              <img src={CorelDraw} alt={"corel"} />
              <span> COREL</span>
            </div>
            <div className="skill">
              <img className="skill-long-txt-img" src={AOS} alt={"Aos"} />
              <span className="skill-long-txt"> ANIMATE ON SCROLL</span>
            </div>
            <div className="skill">
              <img
                className="skill-long-txt-img"
                src={FMotion}
                alt={"framer motion"}
              />
              <span className="skill-long-txt">FRAMER MOTION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
