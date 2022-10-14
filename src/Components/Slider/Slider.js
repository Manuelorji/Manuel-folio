import { useRef } from "react";
import NextBtn from "./Images/next.svg";
import PrevBtn from "./Images/prev.svg";
import "./Slider.scss";

export default function Slider({ children, cardData }) {
  const cards = useRef();
  const nextBtn = useRef();
  const prevBtn = useRef();

  let currentIndex = 0;

  //   useEffect(() => {
  //     console.log("first");
  //     if (currentIndex !== cardData.length / 3 + 1) {
  //       prevBtn.current.style.opacity = "1";
  //     } else {
  //       nextBtn.current.style.opacity = "0.7";
  //     }

  //     if (currentIndex !== 0) {
  //       nextBtn.current.style.opacity = "1";
  //     } else {
  //       prevBtn.current.style.opacity = "0.7";
  //     }
  //   }, [currentIndex]);

  //slide
  const slide = (direction) => {
    if (direction === "right") {
      if (currentIndex !== cardData.length / 3 + 7) {
        currentIndex++;
        prevBtn.current.style.opacity = "1";
      } else {
        // currentIndex = 0;
        nextBtn.current.style.opacity = "0.7";
        return;
      }
    } else if (direction === "left") {
      if (currentIndex !== 0) {
        currentIndex--;
        nextBtn.current.style.opacity = "1";
      } else {
        // currentIndex = cardData.length / 3 + 1;
        prevBtn.current.style.opacity = "0.7";
        return;
      }
    }
    cards.current.style.transform = `translateX(${-33 * currentIndex}vw)`;
  };

  //   setInterval(() => slide("right"), 5000);

  return (
    <div className="slider">
      <div className="cards" ref={cards}>
        {children}
      </div>
      <div className="cards-slider-btns">
        <img
          ref={prevBtn}
          className="prev-btn"
          src={PrevBtn}
          alt={"prev"}
          onClick={() => {
            slide("left");
          }}
        />

        <img
          ref={nextBtn}
          className="next-btn"
          src={NextBtn}
          alt={"next"}
          onClick={() => {
            slide("right");
          }}
        />
      </div>
    </div>
  );
}
