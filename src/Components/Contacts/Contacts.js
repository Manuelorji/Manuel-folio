// import { Link } from "react-router-dom";
import GitHubImage from "./images/github.png";
import FaceBookImage from "./images/facebook.jpg";
import TwitterImage from "./images/twitter.jpg";
import LinkedInImage from "./images/linked in.png";
import MailImage from "./images/gmail.png";
import Avatar from "./images/cart dp.png";
import Resume from "./images/resumee.png";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <section className="section" id="contacts">
      <h1>Contacts</h1>
      <div className="contacts">
        <div className="lets-chat-text">
          <img data-aos="zoom-in" src={Avatar} alt={""} />
          <span>
            "I think courtesy demands you share your reviews
            <br /> through any of my different contacts and I'm open to work."
          </span>
        </div>
        <div className="lets-chat" data-aos="zoom-in">
          <a
            href="https://github.com/Manuelorji"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="connection">
              <img src={GitHubImage} alt={"github"} title="github" />{" "}
            </div>
          </a>
          <a
            href="https://facebook.com/manuel.manuelorji"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="connection">
              <img src={FaceBookImage} alt={"facebook"} title="facebook" />
            </div>
          </a>
          <a
            href="https://twitter.com/Manuelmendel"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="connection">
              <img
                className="twitter"
                src={TwitterImage}
                alt={"twitter"}
                title="twitter"
              />
            </div>
          </a>

          <a
            href="mailto:nuelorji@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="connection">
              <img src={MailImage} alt={"mail"} title="mail" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-orji-497365212/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="connection">
              <img src={LinkedInImage} alt={"linkedIn"} title="linkedIn" />
            </div>
          </a>
        </div>
      </div>
      <div className="my-resume-ctn" data-aos="fade-left">
        <a
          href="https://drive.google.com/uc?export=download&id=1mdjzlZXFjsrHD2Usx2RRqBFlxG0c_jeH"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="my-resume">
            <img src={Resume} alt={"My Resume"} title="My Resume" />
          </div>
        </a>
        <span>My Resume</span>
      </div>
    </section>
  );
};

export default Contacts;
