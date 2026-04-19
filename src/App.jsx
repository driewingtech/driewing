import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LazySection from "./components/LazySection";
const Explore = lazy(() => import("./components/Explore"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Features = lazy(() => import("./components/Features"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const RadialOrbitalTimelineDemo = lazy(() => import("./components/RadialOrbitalTimelineDemo"));

const SectionFallback = () => (
  <div className="section-skeleton" aria-hidden="true">
    <div className="container">
      <div className="section-skeleton-card"></div>
    </div>
  </div>
);

function App() {
  const [view, setView] = React.useState("home");

  const scrollToContact = () => {
    setView("home");
    
    // Use a retry mechanism in case components take time to load via Suspense
    const tryScroll = (attempts = 10) => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const yOffset = -100; // Account for the fixed navbar height
        const y = contactSection.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else if (attempts > 0) {
        setTimeout(() => tryScroll(attempts - 1), 100);
      }
    };
    
    setTimeout(() => tryScroll(), 50);
  };

  return (
    <>
      <Navbar
        onBlogClick={() => setView("blog")}
        onHomeClick={() => setView("home")} currentView={view} />
      <main>
        <Suspense fallback={<SectionFallback />}>
          {view === "home" ? (
            <>
              <Hero />
              {/* <Explore /> */}
              <LazySection minHeight={700}>
                <Testimonials />
              </LazySection>
              <LazySection minHeight={900}>
                <RadialOrbitalTimelineDemo />
              </LazySection>
              <LazySection minHeight={760}>
                <Features />
              </LazySection>
              <LazySection minHeight={900}>
                <About />
              </LazySection>
              <LazySection minHeight={900}>
                <Contact />
              </LazySection>
            </>
          ) : (
            <Blog onContactClick={scrollToContact} />
          )}
        </Suspense>
      </main>
    </>
  );
}

export default App;
