import { useState } from "react";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Service from "./components/Service";
import { CSSTransition } from 'react-transition-group';
import './App.css'; // Import the CSS file for transitions

function App() {
 const [showAbout, setShowAbout] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showBlog, setShowBlog] = useState(false);

  const handleClick = (component) => {
    if (component === 'about') {
      setShowAbout(true);
      setShowService(false);
      setShowBlog(false);
    } else if (component === 'service') {
      setShowAbout(false);
      setShowService(true);
      setShowBlog(false);
    } else if (component === 'blog') {
      setShowAbout(false);
      setShowService(false);
      setShowBlog(true);
    }
    setTimeout(() => {
      setShowAbout(false);
      setShowService(false);
      setShowBlog(false);
    }, 10000);
  };

  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat w-full h-full md:px-4">
        <Header />
        <Hero />
        <Features />
        <Menu />
        <CSSTransition
          in={showAbout}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <About />
        </CSSTransition>
        <CSSTransition
          in={showService}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <Service />
        </CSSTransition>
        <CSSTransition
          in={showBlog}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <Blog />
        </CSSTransition>
        <Contact handleClick={handleClick} />
        <Footer />
      </div>
    </>
  );
}

export default App;
