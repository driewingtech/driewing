import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
const Explore = lazy(() => import("./components/Explore"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Features = lazy(() => import("./components/Features"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const SectionFallback = () => (
  <div className="section-skeleton" aria-hidden="true">
    <div className="container">
      <div className="section-skeleton-card"></div>
    </div>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Explore />
          <Testimonials />
          <Features />
          <About />
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

export default App;
