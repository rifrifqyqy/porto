
import { motion } from "framer-motion";
import PortoCardLayout from "./PortoCardLayout/PortoCardLayout";
export default function ProjectSection() {

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
      <motion.div variants={containerMotion} initial="initial" whileHover="whileHover" whileInView="view" className="relative">
        <main className="mx-32 max-md:items-center max-md:mx-8 mt-24 max-md:mt-8 flex flex-col gap-8  " id="porto">
          <header className="grid items-end content-between grid-cols-3 max-md:grid-cols-1">
            <motion.article variants={headerMotion} className=" col-span-2 max-md:col-span-1">
              <h1 className="font-statliches text-[48px] max-md:text-[24px] ">Projects Gallery</h1>
              <p className="text-gray-500 max-md:text-[14px]">
                Selamat datang di GALLERY Imajinasi saya! Di sini, saya akan menampilkan hasil kreativitas saya. Mulai dari karya pixel hingga website dengan barisan code, yang menunjukkan kreativitas saya dalam desain UI/UX dan
                pengembangan web.
              </p>
            </motion.article>
          </header>
          <section className="flex max-md:flex-col gap-4">
            {/* portolayout */}
            <PortoCardLayout />
          </section>
        </main>
        <aside className="absolute top-[40%] left-0 -z-20">
          <img src="images/dotpattern.png" alt="" />
          <img src="images/text-vertical2.png" alt="" className="ml-16 -mt-24" />
        </aside>
      </motion.div>
    </>
  );
}
