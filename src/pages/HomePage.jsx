import { useRef } from "react";
import HeroSection from "@/components/Layouts/HeroSection";
import AboutSection from "@/components/Layouts/AboutSection";
import ProjectSection from "@/components/Layouts/ProjectSection";
import FooterSection from "@/components/Layouts/FooterSection";
import { motion } from "framer-motion";
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
      scale: 0.9,
      y: -100,
      opacity: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    // hompage kebelakang layar
    exit: {
      scale: 0.9,
      y: -100,
      opacity: 0.5,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    transition: {
      duration: 1.5,
    },
  };
  const wrapAnimate = {
    hidden: {
      top: "100vh",
    },
    visible: {
      top: "100vh",
    },
    exit: {
      top: "0",
      transition: {
        duration: 2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  return (
    <>
      <div className="">
        {/* bg black menjadi tatakan homepage yang di scale 0.9 */}
        <div className="w-[100vw] h-[100vh] fixed z-[-9999] top-0 left-0 bg-black"></div>
        {/* bg putih diseret keatas */}
        <motion.div variants={wrapAnimate} initial="hidden" animate="visible " exit="exit" className="w-[100vw] h-[100vh] bg-white/100 fixed z-50 top-0 left-0" />
        <motion.div variants={containVariants} exit="exit">
          <NavigationBar />
          <HeroSection aboutScroll={aboutScroll} />
          <AboutSection ref={aboutRef} />
          <ProjectSection />
          <FooterSection />
        </motion.div>
      </div>
    </>
  );
}
