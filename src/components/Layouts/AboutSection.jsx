import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import skillData from "../../data/skill.json";
import designData from "../../data/designskill.json";
function AboutSection(props, ref) {
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
  const coverAnimateMobile = {
    initial: {
      width: "100%",
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
      <main className="relative" id="about" ref={ref}>
        <div className="mx-32 mt-24 grid grid-cols-2 max-md:mx-4 max-md:mt-8 max-md:grid-cols-1">
          <section className="my-auto max-md:order-2">
            <motion.div
              variants={""}
              initial="initial"
              whileInView="view"
              className="flex max-w-fit flex-col items-end max-md:mt-4"
            >
              <motion.div className="relative">
                <motion.h1
                  variants={textShow}
                  className="font-statliches text-[48px] leading-tight max-md:text-[24px]"
                >
                  RIFQY HAMDANI
                </motion.h1>
                <motion.div
                  variants={coverAnimate}
                  className="absolute left-0 top-0 z-10 h-[90px] w-[120%] bg-sky-700 max-md:h-[32px]"
                ></motion.div>
              </motion.div>
              <motion.h1
                variants={textShow}
                className="mt-[-8px] max-w-fit bg-sky-700 px-6 font-statliches text-[20px] text-white max-md:mt-[-4px] max-md:px-2 max-md:text-[14px]"
              >
                21 Years old
              </motion.h1>
            </motion.div>
            <motion.div
              variants={""}
              initial="initial"
              whileInView="view"
              className="relative"
            >
              <motion.p
                variants={textShow}
                className="mt-8 w-[570px] text-slate-500 max-md:mt-4 max-md:w-fit max-md:text-[14px]"
              >
                &quot;Passionate about art and design, Rifqy Hamdani is an
                enthusiastic college student pursuing his dreams in the world of
                design. With a fondness for UI design and a keen interest in UX
                research, Rifqy brings dedication and creativity to every
                project he faces. With arts thinking and logic as his
                foundation, he delves into the complexities of frontend web
                design diligently, crafting captivating user experiences and
                stunning aesthetics.&quot;
              </motion.p>
              <motion.div
                variants={coverAnimate}
                className="absolute left-0 top-0 z-10 h-full bg-sky-700 max-md:hidden"
              ></motion.div>
              <motion.div
                variants={coverAnimateMobile}
                className="absolute left-0 top-0 z-10 hidden h-full bg-sky-700 max-md:block"
              ></motion.div>
            </motion.div>

            <div className="mx-auto mt-16 w-[350px] max-md:mt-4 max-md:w-[300px]">
              <Marquee
                loop={0}
                speed={50}
                play
                className="overflow-y-visible border-b-2 border-t-2 border-amber-500 py-5 max-sm:py-2"
                autoFill
              >
                <div className="Marquee mr-4 flex gap-4">
                  {designData.map((skill) => (
                    <Link
                      to={skill.site}
                      className="group relative flex"
                      key={skill.id}
                    >
                      <img src={skill.skillthumb} alt="" />
                      <h1
                        className={`absolute bottom-0 left-1 -z-10 text-[8px] font-semibold opacity-0 transition-all group-hover:translate-y-2 group-hover:scale-[160%] group-hover:opacity-100 max-sm:text-[6px]`}
                        style={{ color: skill.color }}
                      >
                        {skill.title}
                      </h1>
                    </Link>
                  ))}
                </div>
              </Marquee>
              <Marquee
                loop={0}
                speed={50}
                play
                className="mt-8 border-b-2 border-t-2 border-amber-500 py-4 max-sm:mt-4 max-sm:py-2"
                autoFill
              >
                <div className="Marquee mr-4 flex gap-4">
                  {skillData.map((skill) => (
                    <Link
                      to={skill.site}
                      className="group relative flex"
                      key={skill.id}
                    >
                      <img src={skill.skillthumb} alt="" />
                      <h1
                        className={`absolute bottom-0 left-1 -z-10 text-[8px] font-semibold opacity-0 transition-all group-hover:translate-y-2 group-hover:scale-[160%] group-hover:opacity-100 max-sm:text-[6px]`}
                        style={{ color: skill.color }}
                      >
                        {skill.title}
                      </h1>
                    </Link>
                  ))}
                </div>
              </Marquee>

              {/* marquee2 */}
            </div>
          </section>
          <section className="max-md:order-1">
            <div className="relative">
              <motion.div
                variants={imgAnimate}
                initial="initial"
                whileInView="view"
                onMouseEnter=""
                onMouseLeave=""
                className="ml-16 max-md:ml-0"
              >
                <motion.img
                  onMouseEnter={handleHover}
                  onMouseLeave={handleMouseLeave}
                  src={img}
                  alt=""
                  className="transition duration-500 max-md:mx-auto max-md:h-[300px]"
                />
                <motion.img
                  variants={russo}
                  src="images/russo.svg"
                  alt=""
                  className="absolute bottom-0 left-16 -z-10 max-md:left-0 max-md:right-0 max-md:mx-auto max-md:h-[330px]"
                />
              </motion.div>

              <motion.div
                variants={boxAnimate}
                initial="initial"
                whileInView="view"
                className="absolute right-0 top-[50%] flex h-[120px] w-[300px] overflow-y-hidden bg-sky-100 max-md:h-[60px] max-md:w-[150px]"
              >
                <p className="absolute bottom-0 right-0 z-10 text-nowrap bg-sky-700 px-6 font-statliches text-2xl leading-[120%] text-white max-md:h-[16px] max-md:w-[80px] max-md:px-1 max-md:text-[14px]">
                  RIFQY HAMDANI
                </p>
                <div className="relative h-[100%] w-[100%] overflow-hidden">
                  <motion.img
                    variants={boxImg}
                    src="images/seongcrop.svg"
                    alt=""
                    className="absolute left-[-24px] top-0 scale-[180%] max-md:left-[-8px]"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        </div>
        <aside className="absolute left-0 top-[40%] -z-20 max-md:top-[-100px]">
          <img src="images/dotpattern.png" alt="" />
          <img
            src="images/text-vertical.png"
            alt=""
            className="-mt-24 ml-16 max-md:ml-4"
          />
        </aside>
      </main>
    </>
  );
}

export default forwardRef(AboutSection);
