import InfiniteScroll from "./Images/infinite scroll image.png";
import MusicPlayer from "./Images/music player.png";
import VideoPlayer from "./Images/video player.png";
import CustomCountDownTimer from "./Images/custom countdown timer.png";
import JokeTeller from "./Images/joke teller.png";
import FigmaWebProject from "./Images/website dev from figma.png";

import Card from "../Card/Card";
import Slider from "../Slider/Slider";
import "./MyProjects.scss";

const MyProjects = () => {
  const cardData = [
    {
      image: InfiniteScroll,
      details: "Infinite scroll Project",
      url: "https://manuelorji.github.io/infinite-scroll-project/",
    },
    {
      image: MusicPlayer,
      details: "Music Player Project",
      url: "https://manuelorji.github.io/Music-player/",
    },
    {
      image: VideoPlayer,
      details: "Video Player Project",
      url: "https://manuel-video-player.netlify.app/",
    },
    {
      image: FigmaWebProject,
      details: "I developed a Website from a figma design",
    },
    {
      image: CustomCountDownTimer,
      details: "Custom countdown timer Project",
      url: "https://manuelorji.github.io/Custom-countdown-project/",
    },
    {
      image: JokeTeller,
      details: "Joke teller Project",
      url: "https://manuelorji.github.io/Joke-Teller-Project/",
    },
  ];

  return (
    <section className="my-projects" id="my-projects">
      <h1>My Projects</h1>
      <Slider cardData={cardData}>
        {cardData.map((datum, i) => (
          <Card key={i} {...datum} />
        ))}
      </Slider>
    </section>
  );
};

export default MyProjects;
