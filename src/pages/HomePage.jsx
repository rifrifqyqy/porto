import { useRef } from "react";
import HeroSection from "@/components/Layouts/HeroSection";
import AboutSection from "@/components/Layouts/AboutSection";
import ProjectSection from "@/components/Layouts/ProjectSection";
import FooterSection from "@/components/Layouts/FooterSection";
import { AnimatePresence, motion } from "framer-motion";
import NavigationBar from "@/components/navigationBar";

export default function HomePage() {
  const aboutRef = useRef(null);

  const aboutScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    exit: {
      opacity: 0,
      x: "100vw",
    },
    transition: {
      duration: 1.5,
    },
  };
  return (
    <>
      <NavigationBar />
      <motion.div variants={containVariants} initial="hidden" animate="visible" exit={{ x: "100vw", opacity: 0 }} transition="transition">
        <HeroSection aboutScroll={aboutScroll} />
        <AboutSection ref={aboutRef} />
        <ProjectSection />
        <FooterSection />
      </motion.div>
    </>
  );
}
