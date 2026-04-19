import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logoBrand from "../assets/brand_logo.png";
import Magnetic from "./Magnetic";
import DeferredCalendlyModal from "./DeferredCalendlyModal";
import "./Navbar.css";

const Navbar = ({ onBlogClick, onHomeClick, currentView }) => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const lastScrollYRef = React.useRef(0);
  const frameRef = React.useRef(null);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      if (frameRef.current) return;

      frameRef.current = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const nextScrolled = currentScrollY > 50;
        const nextHidden =
          currentScrollY > lastScrollYRef.current && currentScrollY > 200;

        setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
        setHidden((prev) => (prev === nextHidden ? prev : nextHidden));

        if (nextHidden) {
          setClick(false);
        }

        lastScrollYRef.current = currentScrollY;
        frameRef.current = null;
      });
    };

    lastScrollYRef.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <header
      className={`navbar-wrapper ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}
    >
      <div className="navbar">
        <div className="logo" onClick={() => { onHomeClick(); closeMenu(); window.scrollTo(0, 0); }} style={{ cursor: 'pointer' }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
            }}
          >
            <img src={logoBrand} alt="Driewing Logo" className="logo-img" />
            <span className="logo-wordmark">Driewing</span>
          </div>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} color="#fff" />
          ) : (
            <FaBars size={20} color="#fff" />
          )}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {[
            { to: "home", label: "Home", type: "home" },
            { to: "portfolio", label: "Work", type: "blog" },
            { to: "testimonials", label: "Proof", type: "scroll" },
            { to: "services", label: "Services", type: "scroll" },
            // { to: "blog", label: "Blog", type: "blog" },
            { to: "contact", label: "Contact", type: "scroll" },
          ].map((item, index) => (
            <li key={index} className="nav-item">
              {item.type === "blog" ? (
                <span
                  onClick={() => { onBlogClick(); closeMenu(); }}
                  style={{ cursor: 'pointer', color: currentView === 'blog' ? 'var(--accent-primary)' : 'inherit' }}
                >
                  {item.label}
                </span>
              ) : item.type === "home" ? (
                <span
                  onClick={() => { onHomeClick(); closeMenu(); window.scrollTo(0, 0); }}
                  style={{ cursor: 'pointer', color: currentView === 'home' ? 'var(--accent-primary)' : 'inherit' }}
                >
                  {item.label}
                </span>
              ) :
                // currentView === "home" ? 
                (
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={200}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )
                // : (
                //   <span
                //     onClick={() => { onHomeClick(); closeMenu(); }}
                //     style={{ cursor: 'pointer' }}
                //   >
                //     {item.label}
                //   </span>
                // )
              }
            </li>
          ))}
        </ul>

        <div className="nav-cta hide-mobile">
          <Magnetic strength={0.3}>
            <button
              className="btn-primary"
              style={{ padding: "10px 24px", fontSize: "0.9rem" }}
              onClick={() => setIsCalendlyOpen(true)}
            >
              Book a Call
            </button>
          </Magnetic>
        </div>
      </div>

      <DeferredCalendlyModal
        url="https://calendly.com/driewingtech"
        onClose={() => setIsCalendlyOpen(false)}
        isOpen={isCalendlyOpen}
      />
    </header>
  );
};

export default Navbar;
