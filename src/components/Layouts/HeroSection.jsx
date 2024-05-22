import { useRef } from "react";
import { motion } from "framer-motion";
import MainButton from "../Elements/Button/MainButton";
export default function HeroSection() {
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
  //   animate logic end

  return (
    <>
      <motion.section variants={homeAnimate} ref={constraintsRef} whileInView="view" initial="initial" animate="animate" className=" relative overflow-hidden " id="home">
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <motion.img variants={imageAnimate} drag dragConstraints={constraintsRef} src="images/liluo.svg" alt="" className="w-[70%] mx-40" />
          <motion.div variants={titleAnimate} className="my-auto">
            <p className="font-statliches">welcome to my site</p>
            <h1 className="text-[180px] relative leading-[100%] font-valorant tracking-[20px] -ml-2">
              <span className="text-sky-700">L</span>I<span className="text-sky-700">L</span>UO
              <motion.div variants={wrapAnimate} className="h-[145px] mr-40 absolute top-0 right-0 bg-sky-800 z-20"></motion.div>
            </h1>
            <div className="relative bg-slate-600">
              <p className="font-statliches mt-[-24px] text-2xl">"The man who failed to enter the Faculty of Fine Arts and Design."</p>
              <motion.div variants={wrapAnimate} className="h-[32px] mr-40 absolute top-0 right-0 bg-sky-800 z-20"></motion.div>
            </div>

            <div className="mt-4">
              <MainButton className=" py-3 bg-slate-800 text-xl ">Start Journey</MainButton>
            </div>
          </motion.div>
        </div>
        <div className="w-[100%] h-12 border-[1px] border-gray-800 absolute top-96 left-0 rotate-45 -z-10">
          <marquee className="pt-2 opacity-30" scrollamount="20" loop="-1">
            Rifqy Hamdani. 21 years old Enthusiast in design
            <span className="mx-96">Rifqy Hamdani. 21 years old Enthusiast in design </span>
            <span className="mx-96">Rifqy Hamdani. 21 years old Enthusiast in design </span>
            <span className="mx-96">Rifqy Hamdani. 21 years old Enthusiast in design </span>
            <span className="mx-96">Rifqy Hamdani. 21 years old Enthusiast in design </span>
          </marquee>
        </div>
        <div className="w-[2200px] flex justify-center h-12 bg-gray-800 opacity-30 -rotate-[15deg] translate-x-28 absolute top-72 right-0 -z-10"></div>

        <div className="w-[100vw] overflow-x-hidden text-[280px] text-white -ml-24  translate-x-28 opacity-60 absolute top-[30%] -z-20">
          <img src="images/EGAMEDIEV.svg" alt="" />
        </div>
      </motion.section>
    </>
  );
}
