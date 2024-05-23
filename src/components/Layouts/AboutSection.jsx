import { delay, motion } from "framer-motion";
import { useState } from "react";
import "../../index.css";
export default function AboutSection() {
  const [img, setImg] = useState("images/seongje.svg");
  const imgAnimate = {
    initial: {
      opacity: 0,
      y: "300px",
    },
    view: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
      },
    },
  };
  const russo = {
    initial: {
      opacity: 0,
      y: "-100vh",
    },
    view: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1,
      },
    },
  };
  //
  const boxAnimate = {
    initial: {
      opacity: 0,
      scale: "0%",
    },
    view: {
      opacity: 1,
      scale: "100%",
      transition: {
        delay: 1,
        duration: 0.5,
        when: "beforeChildren",
      },
    },
  };
  const boxImg = {
    initial: {
      opacity: 0,
      y: "200px",
      scale: "180%",
    },
    view: {
      opacity: 1,
      y: 0,
      scale: "180%",
      transition: {
        duration: 0.3,
      },
    },
  };
  // animate covertext
  const coverAnimate = {
    initial: {
      width: "120%",
    },
    view: {
      width: "0%",
      transition: {
        duration: 1,
      },
    },
  };
  const textShow = {
    initial: {
      opacity: 0,
      y: "40px",
    },
    view: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        when: "afterChildren",
        duration: 0.5,
      },
    },
  };

  // hover img
  const handleHover = () => {
    setImg("images/seongcolor.svg");
  };

  const handleMouseLeave = () => {
    setImg("images/seongje.svg");
  };

  // scroller slide

  return (
    <>
      <main className="relative" id="about">
        <div className="grid grid-cols-2 max-md:grid-cols-1 mx-32 max-md:mx-8 mt-24 max-md:mt-8 ">
          <section className="my-auto max-md:order-2">
            <motion.div variants={""} initial="initial" whileInView="view" className="flex flex-col max-w-fit items-end max-md:mt-4">
              <motion.div className="relative">
                <motion.h1 variants={textShow} className="font-statliches text-[48px] max-md:text-[24px] leading-tight">
                  RIFQY HAMDANI
                </motion.h1>
                <motion.div variants={coverAnimate} className="w-[120%] h-[90px] max-md:h-[32px] bg-sky-700 absolute z-10 top-0 left-0"></motion.div>
              </motion.div>
              <motion.h1 variants={textShow} className="font-statliches text-[20px] max-md:text-[14px] text-white bg-sky-700 max-w-fit px-6 max-md:px-2 mt-[-8px] max-md:mt-[-4px]">
                21 Years old
              </motion.h1>
            </motion.div>
            <motion.div variants={""} initial="initial" whileInView="view" className="relative">
              <motion.p variants={textShow} className="mt-8 max-md:mt-4 w-[570px] max-md:w-fit text-slate-500 max-md:text-[14px]">
                "Passionate about art and design, Rifqy Hamdani is an enthusiastic college student pursuing his dreams in the world of design. With a fondness for UI design and a keen interest in UX research, Rifqy brings dedication and
                creativity to every project he faces. With arts thinking and logic as his foundation, he delves into the complexities of frontend web design diligently, crafting captivating user experiences and stunning aesthetics.
              </motion.p>
              <motion.div variants={coverAnimate} className="bg-sky-700 w-[110%] h-full absolute top-0 left-0 z-10"></motion.div>
            </motion.div>

            <div className="w-[350px] max-md:w-[300px] mx-auto mt-16 max-md:mt-4 gap-4 overflow-hidden whitespace-nowrap">
              <div class="marquee py-5">
                <div class="marquee-content">
                  <span className="flex gap-4">
                    <img src="images/skill/framermotion.svg" alt="" />
                    <img src="images/skill/framer.svg" alt="" />
                    <img src="images/skill/figma.svg" alt="" />
                    <img src="images/skill/illustrator.svg" alt="" />
                    <img src="images/skill/photoshop.svg" alt="" />
                  </span>
                </div>
                <div class="marquee-content max-md:pl-8" aria-hidden="true">
                  <span className="flex gap-4">
                    <img src="images/skill/framermotion.svg" alt="" />
                    <img src="images/skill/framer.svg" alt="" />
                    <img src="images/skill/figma.svg" alt="" />
                    <img src="images/skill/illustrator.svg" alt="" />
                    <img src="images/skill/photoshop.svg" alt="" />
                  </span>
                </div>
              </div>
              {/* marquee2 */}
              <div class="marquee py-5">
                <div class="marquee-content code">
                  <span className="flex gap-5">
                    <img src="images/skill/react.svg" alt="" />
                    <img src="images/skill/vitejs.svg" alt="" />
                    <img src="images/skill/shadcn.svg" alt="" />
                    <img src="images/skill/css.svg" alt="" />
                    <img src="images/skill/tailwind.svg" alt="" />
                  </span>
                </div>
                <div class="marquee-content code max-md:pl-8" aria-hidden="true">
                  <span className="flex gap-5">
                    <img src="images/skill/react.svg" alt="" />
                    <img src="images/skill/vitejs.svg" alt="" />
                    <img src="images/skill/shadcn.svg" alt="" />
                    <img src="images/skill/css.svg" alt="" />
                    <img src="images/skill/tailwind.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className=" max-md:order-1">
            <div className="relative">
              <motion.div variants={imgAnimate} initial="initial" whileInView="view" onMouseEnter="" onMouseLeave="" className="ml-16 max-md:ml-0">
                <motion.img onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} src={img} alt="" className="transition duration-500 max-md:h-[300px] max-md:mx-auto" />
                <motion.img variants={russo} src="images/russo.svg" alt="" className="absolute bottom-0 -z-10 left-16 max-md:left-0 max-md:right-0 max-md:mx-auto max-md:h-[330px]" />
              </motion.div>

              <motion.div variants={boxAnimate} initial="initial" whileInView="view" className="w-[300px] max-md:w-[150px] h-[120px] max-md:h-[60px] bg-sky-100 absolute top-[50%] right-0 flex overflow-y-hidden">
                <p className="font-statliches text-white bottom-0 right-0 text-2xl max-md:text-[14px] max-md:h-[16px] max-md:w-[80px] text-nowrap bg-sky-700 px-6 max-md:px-1 leading-[120%] absolute z-10">RIFQY HAMDANI</p>
                <div className=" h-[100%] w-[100%] relative overflow-hidden">
                  <motion.img variants={boxImg} src="images/seongcrop.svg" alt="" className="absolute top-0 left-[-24px] max-md:left-[-8px] scale-[180%]" />
                </div>
              </motion.div>
            </div>
          </section>
        </div>
        <aside className="absolute top-[40%] max-md:top-[-100px] left-0 -z-20">
          <img src="images/dotpattern.png" alt="" />
          <img src="images/text-vertical.png" alt="" className="ml-16 -mt-24 max-md:ml-4" />
        </aside>
      </main>
    </>
  );
}
