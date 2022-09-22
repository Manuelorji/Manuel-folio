import { useRef, useEffect } from "react";
import "./Nav.scss";

export default function Nav() {
  const Nav = useRef();
  const Navlinks = useRef();
  const Logo = useRef();
  const OpenMenu = useRef();
  const CloseMenu = useRef();

  useEffect(() => {
    window.onscroll = () => {
      let top = window.scrollY;
      if (top >= 30) {
        Nav.current.classList.add("active");
        Logo.current.style.color = "rgb(63, 59, 59)";
      } else {
        Nav.current.classList.remove("active");
        Logo.current.style.color = "rgb(223, 215, 215)";
      }
    };
  }, []);

  function showNavLinks() {
    Navlinks.current.style.display = "flex";
    OpenMenu.current.style.display = "none";
    CloseMenu.current.style.display = "block";
  }

  function hideNavLinks() {
    Navlinks.current.style.display = "none";
    CloseMenu.current.style.display = "none";
    OpenMenu.current.style.display = "block";
  }

  return (
    <nav ref={Nav}>
      <div className="logo">
        <h3 ref={Logo}>manuel-folio</h3>
      </div>
      <div className="nav-links" ref={Navlinks}>
        <div className="nav-link">
          <a href="#home">Home</a>
        </div>
        <div className="nav-link">
          <a href="#my-projects">My Projects</a>
        </div>
        <div className="nav-link">
          <a href="#profile">My Profile</a>
        </div>
        <div className="nav-link">
          <a href="#contacts">Contacts</a>
        </div>
      </div>
      <div className="hamburger-menu">
        <div
          ref={CloseMenu}
          className="close-menu"
          onClick={() => hideNavLinks()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(107, 103, 103)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="4" y1="20" x2="20" y2="4"></line>
            <line x1="4" y1="4" x2="20" y2="20"></line>
          </svg>
        </div>
        <div
          ref={OpenMenu}
          className="Open-menu"
          onClick={() => showNavLinks()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(107, 103, 103)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="8" y1="12" x2="24" y2="12"></line>
            <line x1="3" y1="6" x2="24" y2="6"></line>
            <line x1="3" y1="18" x2="24" y2="18"></line>
          </svg>
        </div>
      </div>
    </nav>
  );
}
