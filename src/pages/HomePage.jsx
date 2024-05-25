import { useRef } from "react";
import HeroSection from "@/components/Layouts/HeroSection";
import AboutSection from "@/components/Layouts/AboutSection";
import ProjectSection from "@/components/Layouts/ProjectSection";
import FooterSection from "@/components/Layouts/FooterSection";
import { motion } from "framer-motion";

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
    },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <motion.div variants={containVariants} initial="hidden" animate="visible" exit="exit">
        <HeroSection aboutScroll={aboutScroll} />
        <AboutSection ref={aboutRef} />
        <ProjectSection />
        <FooterSection />
      </motion.div>
    </>
  );
}
