import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logoBrand from "../assets/brand_logo.png";
import Magnetic from "./Magnetic";
import { PopupModal } from "react-calendly";
import "./Navbar.css";

const Navbar = () => {
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
        <div className="logo">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
            onClick={closeMenu}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
            }}
          >
            <img src={logoBrand} alt="Driewing Logo" className="logo-img" />
            <span className="logo-wordmark">Driewing</span>
          </Link>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} color="#fff" />
          ) : (
            <FaBars size={20} color="#fff" />
          )}
        </div>

        <motion.ul
          className={click ? "nav-menu active" : "nav-menu"}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {[
            { to: "portfolio", label: "Work" },
            { to: "testimonials", label: "Proof" },
            { to: "services", label: "Services" },
            { to: "about", label: "About" },
            { to: "contact", label: "Contact" },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="nav-item"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
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
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="nav-cta hide-mobile"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Magnetic strength={0.3}>
            <button
              className="btn-primary"
              style={{ padding: "10px 24px", fontSize: "0.9rem" }}
              onClick={() => setIsCalendlyOpen(true)}
            >
              Book a Call
            </button>
          </Magnetic>
        </motion.div>
      </div>

      <PopupModal
        url="https://calendly.com/driewingtech"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")}
      />
    </header>
  );
};

export default Navbar;
