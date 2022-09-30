import { useEffect, useState } from "react";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import MyProfile from "./Components/My profile/MyProfile";
import MyProjects from "./Components/My Projects/MyProjects";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "./general.scss";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      once: false,
      easing: "ease-in-sine",
      delay: 100,
    });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  /* <motion.div style={{ scale }}>
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
        />
       
      </motion.div> */

  return (
    <div className="App">
      <Nav />
      <Hero />
      <MyProfile />
      <MyProjects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
