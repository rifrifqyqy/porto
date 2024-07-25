import { useRef, Fragment } from "react";
import HeroSection from "@/components/Layouts/HeroSection";
import AboutSection from "@/components/Layouts/AboutSection";
import ProjectSection from "@/components/Layouts/ProjectSection";
import FooterSection from "@/components/Layouts/FooterSection";
import { motion } from "framer-motion";
import NavigationBar from "@/components/navigationBar";
import "../index.css";
export default function HomePage() {
  const aboutRef = useRef(null);
  const homeref = useRef(null);
  const contactRef = useRef(null);
  const portoRef = useRef(null);

  const aboutScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
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
    <Fragment>
      <Fragment>
        {/* bg black menjadi tatakan homepage yang di scale 0.9 */}
        <div className="fixed left-0 top-0 z-[-9999] h-[100vh] w-[100vw] bg-black"></div>
        {/* bg putih diseret keatas */}
        <motion.div
          variants={wrapAnimate}
          initial="hidden"
          animate="visible "
          exit="exit"
          className="fixed left-0 top-0 z-50 h-[100vh] w-[100vw] bg-white/100"
        />
        <motion.div variants={containVariants} exit="exit">
          <NavigationBar
            scrolltoHome={() => scrollToRef(homeref)}
            scrolltoAbout={() => scrollToRef(aboutRef)}
            scrolltoContact={() => scrollToRef(contactRef)}
            scrolltoPorto={() => scrollToRef(portoRef)}
          />
          <HeroSection aboutScroll={aboutScroll} ref={homeref} />
          <AboutSection ref={aboutRef} />
          <ProjectSection ref={portoRef} />
          <FooterSection ref={contactRef} />
        </motion.div>
      </Fragment>
    </Fragment>
  );
}
