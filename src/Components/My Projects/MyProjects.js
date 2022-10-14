import InfiniteScroll from "./Images/infinite scroll image.png";
import MusicPlayer from "./Images/music player.png";
import VideoPlayer from "./Images/video player.png";
import CustomCountDownTimer from "./Images/custom countdown timer.png";
import JokeTeller from "./Images/joke teller.png";
import FigmaWebProject from "./Images/website dev from figma.png";
import Todo from "./Images/todo.png";
import QuoteGen from "./Images/quote gen.png";
import DragNDrop from "./Images/dnd.png";
import RoboApp from "./Images/roboapp.png";
import LightNDarkMode from "./Images/LightNDarkMode.png";
import FormValidator from "./Images/Form Validator.png";
import BookKeeper from "./Images/BookKeeper.png";
import BackgroundGen from "./Images/BackgroundGen.png";
import Calc from "./Images/calculator.png";

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
      image: Calc,
      details: "Calculator",
      url: "https://manuelorji-calc.netlify.app/",
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
      details: "Logistics company’s Landing Page",
      url: "https://z-logistics.netlify.app",
    },
    {
      image: DragNDrop,
      details: "Drag and Drop",
      url: "https://manuelorji.github.io/drag-n-drop-vanilla-js/",
    },
    {
      image: Todo,
      details: "Todo List",
      url: "https://manuel-todo-react.netlify.app/",
    },
    {
      image: FormValidator,
      details: "Form Validator",
      url: "https://manuelorji.github.io/Form-validator-Project/",
    },
    {
      image: RoboApp,
      details: "RoboApp",
      url: "https://robooapp.netlify.app/",
    },
    {
      image: LightNDarkMode,
      details: "Dark and Light mode Website",
      url: "https://manuelorji.github.io/light-and-dark-mode-project/",
    },
    {
      image: CustomCountDownTimer,
      details: "Custom countdown timer Project",
      url: "https://manuelorji.github.io/Custom-countdown-project/",
    },
    {
      image: QuoteGen,
      details: "Quote Generator",
      url: "https://manuelorji.github.io/quotes-gen/",
    },
    {
      image: BackgroundGen,
      details: "Background Generator",
      url: "https://manuelorji.github.io/background-generator/",
    },
    {
      image: BookKeeper,
      details: "Book keeper",
      url: "https://manuelorji.github.io/Book-keeper-Project/",
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
