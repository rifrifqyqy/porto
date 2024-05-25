import NavigationBar from "./components/navigationBar";
import HeroSection from "./components/Layouts/HeroSection";
import AboutSection from "./components/Layouts/AboutSection";
import ProjectSection from "./components/Layouts/ProjectSection";
import FooterSection from "./components/Layouts/FooterSection";

function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <ProjectSection/>
      <FooterSection/>
    </>
  );
}

export default App;
