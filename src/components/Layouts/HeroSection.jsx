import { useRef } from "react";
import { motion } from "framer-motion";
import MainButton from "../Elements/Button/MainButton";
export default function HeroSection({ aboutScroll }) {
  // animate logic
  const constraintsRef = useRef(null);
  const homeAnimate = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
      },
    },
  };

  const imageAnimate = {
    initial: {
      opacity: 0,
      y: 100,
    },
    view: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const titleAnimate = {
    initial: {
      opacity: 0,
      x: -200,
    },
    view: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const wrapAnimate = {
    initial: {
      width: "600px",
    },
    view: {
      width: 0,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
  };
  const wrapAnimateMobile = {
    initial: {
      width: "310px",
    },
    view: {
      width: 0,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
  };
  //   animate logic end

  return (
    <>
      <motion.section variants={homeAnimate} ref={constraintsRef} whileInView="view" initial="initial" animate="animate" className=" relative overflow-hidden max-md:py-2" id="home">
        <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:mx-8">
          <motion.img variants={imageAnimate} src="images/liluo.svg" alt="" className="w-[70%] mx-40 max-md:mx-4" />
          <motion.div variants={titleAnimate} className="my-auto">
            <p onClick={aboutScroll} className="font-statliches">
              welcome to my site
            </p>
            <h1 className="text-[180px] max-md:text-[52px] relative leading-[100%] font-valorant tracking-[20px] -ml-2 max-md:ml-0">
              <span className="text-sky-700">L</span>I<span className="text-sky-700">L</span>UO
              <motion.div variants={wrapAnimate} className="h-[145px] max-md:h-[50px] mr-40 max-md:mr-0 absolute top-0 right-0 max-md:left-0 bg-sky-700 z-20 max-md:hidden"></motion.div>
              <motion.div variants={wrapAnimateMobile} className="h-[45px] absolute top-0 right-0 max-md:left-0 bg-sky-700 z-20 hidden max-md:block"></motion.div>
            </h1>
            <div className="relative">
              <p className="font-statliches mt-[-24px] max-md:mt-0 text-2xl max-md:text-lg max-md:leading-tight">"The man who failed to enter the Faculty of Fine Arts and Design."</p>
              <motion.div variants={wrapAnimate} className="h-[32px] mr-40 absolute top-0 right-0 bg-sky-700 z-20 max-md:hidden"></motion.div>
              <motion.div variants={wrapAnimateMobile} className="h-[45px] absolute top-0 left-0 bg-sky-700 z-20 max-md:block hidden"></motion.div>
            </div>

            <div className="mt-4 max-md:mt-2">
              <MainButton onClick={aboutScroll} className="px-6 text-[20px] border-t-2 border-l-2 border-b-4 border-r-4 border-gray-900 text-black bg-[#F8CC76] active:bg-[#ffc043] max-md:text-[14px]">
                Start Journey
              </MainButton>
            </div>
          </motion.div>
        </div>
        <div className="w-[100%] max-md:w-[600px] h-12 border-[1px] border-gray-800 absolute top-96 max-md:top-40 left-0 max-md:-left-20 rotate-45 -z-10">
          <marquee className="pt-2 opacity-30" scrollamount="20" loop="-1">
            Rifqy Hamdani. 21 years old Enthusiast in design
            <span className="mx-96">Rifqy Hamdani. 21 years old Enthusiast in design </span>
            <span className="mx-96">Rifqy Hamdani. 21 years old Enthusiast in design </span>
            <span className="mx-96">Rifqy Hamdani. 21 years old Enthusiast in design </span>
            <span className="mx-96">Rifqy Hamdani. 21 years old Enthusiast in design </span>
          </marquee>
        </div>
        <div className="w-[2200px] max-md:w-[600px] flex justify-center h-12 bg-gray-800 opacity-30 -rotate-[15deg] max-md:rotate-[-30deg] translate-x-28 absolute top-72 max-md:top-40 right-0 -z-10"></div>

        <div className="w-[100vw] overflow-x-hidden text-[280px] text-white -ml-24  translate-x-28 opacity-60 absolute top-[30%] -z-20">
          <img src="images/EGAMEDIEV.svg" alt="" />
        </div>
        <div className="w-[100%] h-[100%] fixed z-[-99] top-0 left-0 bg-white"></div>
      </motion.section>
    </>
  );
}
