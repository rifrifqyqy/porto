import { useRef } from "react";
import { delay, motion, stagger } from "framer-motion";
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
        when: "beforeChildren",
      },
    },
    tap: {
      rotate: "15deg",
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
  const polaroidRotate = {
    initial: {
      rotate: 0,
      left: "0",
      bottom: "0",
    },
    view: {
      rotate: "-15deg",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    tap: {
      rotate: "-35deg",
    },
  };
  const polaroidRotate2 = {
    initial: {
      rotate: 0,
      left: "0",
      bottom: "0",
    },
    view: {
      rotate: "-30deg",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    tap: {
      rotate: "-75deg",
    },
  };
  //   animate logic end

  return (
    <>
      <motion.section
        variants={homeAnimate}
        ref={constraintsRef}
        whileInView="view"
        initial="initial"
        animate="animate"
        whileTap="tap"
        className="relative overflow-hidden max-md:py-2"
        id="home"
      >
        <div className="grid grid-cols-2 max-md:mx-4 max-md:grid-cols-1">
          {/* <motion.img variants={imageAnimate} src="images/liluo.svg" alt="" className="w-[70%] mx-40 max-md:mx-4" /> */}
          <main className="flex justify-end py-12 max-sm:justify-center max-sm:py-4">
            <motion.section
              variants={imageAnimate}
              className="relative z-10 origin-bottom-left"
            >
              <div className="mr-24 h-fit w-fit border-2 border-black bg-white p-4 pb-16 max-sm:mr-0 max-sm:pb-12">
                <div className="h-[400px] w-[300px] border-2 border-zinc-800 max-sm:h-[300px] max-sm:w-[250px]">
                  <img
                    src="/images/furina.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                variants={polaroidRotate}
                className="absolute -z-[2] mr-24 h-fit w-fit origin-bottom-left border-2 border-black bg-white p-4 pb-16 max-sm:pb-12"
              >
                <div className="h-[400px] w-[300px] border-2 border-zinc-800 max-sm:h-[300px] max-sm:w-[250px]">
                  <img
                    src="/images/wolfkeum.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                variants={polaroidRotate2}
                className="absolute -z-[3] mr-24 h-fit w-fit origin-bottom-left border-2 border-black bg-white p-4 pb-16 max-sm:pb-12"
              >
                <div className="h-[400px] w-[300px] border-2 border-zinc-800 max-sm:h-[300px] max-sm:w-[250px]">
                  <img
                    src="/images/furina2.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.section>
          </main>
          <motion.div variants={titleAnimate} className="my-auto">
            <p onClick={aboutScroll} className="font-statliches">
              welcome to my site
            </p>
            <h1 className="relative -ml-2 font-valorant text-[180px] leading-[100%] tracking-[20px] max-md:ml-0 max-md:text-[52px]">
              <span className="text-sky-700">L</span>I
              <span className="text-sky-700">L</span>UO
              <motion.div
                variants={wrapAnimate}
                className="absolute right-0 top-0 z-20 mr-40 h-[145px] bg-sky-700 max-md:left-0 max-md:mr-0 max-md:hidden max-md:h-[50px]"
              ></motion.div>
              <motion.div
                variants={wrapAnimateMobile}
                className="absolute right-0 top-0 z-20 hidden h-[45px] bg-sky-700 max-md:left-0 max-md:block"
              ></motion.div>
            </h1>
            <div className="relative">
              <p className="mt-[-24px] font-statliches text-2xl max-md:mt-0 max-md:text-lg max-md:leading-tight">
                "The man who failed to enter the Faculty of Fine Arts and
                Design."
              </p>
              <motion.div
                variants={wrapAnimate}
                className="absolute right-0 top-0 z-20 mr-40 h-[32px] bg-sky-700 max-md:hidden"
              ></motion.div>
              <motion.div
                variants={wrapAnimateMobile}
                className="absolute left-0 top-0 z-20 hidden h-[45px] bg-sky-700 max-md:block"
              ></motion.div>
            </div>

            <div className="mt-4 max-md:mt-2">
              <MainButton
                onClick={aboutScroll}
                className="border-b-4 border-l-2 border-r-4 border-t-2 border-gray-900 bg-[#F8CC76] px-6 text-[20px] text-black active:bg-[#ffc043] max-md:text-[14px]"
              >
                Start Journey
              </MainButton>
            </div>
          </motion.div>
        </div>
        <div className="absolute left-0 top-96 -z-10 h-12 w-[100%] rotate-45 border-[1px] border-gray-800 max-md:-left-20 max-md:top-40 max-md:w-[600px]">
          <marquee className="pt-2 opacity-30" scrollamount="20" loop="-1">
            Rifqy Hamdani. 21 years old Enthusiast in design
            <span className="mx-96">
              Rifqy Hamdani. 21 years old Enthusiast in design{" "}
            </span>
            <span className="mx-96">
              Rifqy Hamdani. 21 years old Enthusiast in design{" "}
            </span>
            <span className="mx-96">
              Rifqy Hamdani. 21 years old Enthusiast in design{" "}
            </span>
            <span className="mx-96">
              Rifqy Hamdani. 21 years old Enthusiast in design{" "}
            </span>
          </marquee>
        </div>
        <div className="absolute right-0 top-72 -z-10 flex h-12 w-[2200px] translate-x-28 -rotate-[15deg] justify-center bg-gray-800 opacity-30 max-md:top-40 max-md:w-[600px] max-md:rotate-[-30deg]"></div>

        <div className="absolute top-[30%] -z-20 -ml-24 w-[100vw] translate-x-28 overflow-x-hidden text-[280px] text-white opacity-60">
          <img src="images/EGAMEDIEV.svg" alt="" />
        </div>
        <div className="fixed left-0 top-0 z-[-99] h-[100%] w-[100%] bg-white"></div>
      </motion.section>
    </>
  );
}
