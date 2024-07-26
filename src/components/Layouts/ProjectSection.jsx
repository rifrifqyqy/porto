import { motion } from "framer-motion";
import PortoCardLayout from "./PortoDetailsLayout/PortoDetailsLayout";
import { forwardRef } from "react";
import MainButton from "../Elements/Button/MainButton";
function ProjectSection(props, ref) {
  // animation
  const containerMotion = {
    initial: {},
    animate: {},
    whileHover: {},
    view: {
      transition: {
        when: "beforeChildren",
      },
    },
  };
  const headerMotion = {
    initial: {
      x: "-100px",
      opacity: 0,
    },
    view: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={containerMotion}
        initial="initial"
        whileHover="whileHover"
        whileInView="view"
        className="relative"
        ref={ref}
        {...props}
      >
        <main
          className="mt-24 flex flex-col gap-8 max-md:mt-8 max-md:items-center max-sm:mx-4 2xl:mx-32"
          id="porto"
        >
          <header className="grid grid-cols-3 content-between items-end max-md:grid-cols-1 xl:px-20 2xl:px-0">
            <motion.article
              variants={headerMotion}
              className="col-span-2 max-md:col-span-1"
            >
              <h1 className="font-statliches text-[48px] max-md:text-[24px]">
                Projects Gallery
              </h1>
              <p className="text-gray-500 max-md:text-[14px]">
                Welcome to my Imagination GALLERY! Here, I showcase my creative
                works. From pixel art to websites coded line by line, displaying
                my creativity in UI/UX design and web development.
              </p>
            </motion.article>
          </header>
          <section className="flex justify-center gap-4 max-md:flex-col">
            {/* portolayout */}
            <PortoCardLayout />
          </section>
        </main>
        <aside className="absolute left-0 top-[40%] -z-20">
          <img src="images/dotpattern.png" alt="" />
          <img
            src="images/text-vertical2.png"
            alt=""
            className="-mt-24 ml-16"
          />
        </aside>
        <div className="mx-auto mt-6 hidden w-fit max-sm:block">
          <MainButton className="text-[14px]" to="/gallery">
            SEE MORE
          </MainButton>
        </div>
      </motion.div>
    </>
  );
}
export default forwardRef(ProjectSection);
