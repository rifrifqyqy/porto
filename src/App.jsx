import NavigationBar from "./components/navigationBar";
import HeroSection from "./components/Layouts/HeroSection";
import AboutSection from "./components/Layouts/AboutSection";
import ProjectSection from "./components/Layouts/ProjectSection";
import FooterSection from "./components/Layouts/FooterSection";
import { useRef } from "react";

function App() {
  const aboutRef = useRef(null);

  const aboutScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <NavigationBar />
      <HeroSection aboutScroll={aboutScroll}/>
      <AboutSection ref={aboutRef} />
      <ProjectSection />
      <FooterSection />
    </>
  );
}

export default App;
