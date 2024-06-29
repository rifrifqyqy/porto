import CardProject2 from "@/components/Elements/Card/CardProject2";
import { furina1, furina2, pfp } from "@/components/imageImport";
import NavigationPage from "@/components/navigationPage";
import dataCard from "../data/data.json";
import { AnimatePresence, motion } from "framer-motion";
import FooterSection from "@/components/Layouts/FooterSection";
import { useState, useEffect } from "react";
import PortoEmpty from "@/components/Fragments/PortoEmpty";
export default function GalleryPorto() {
  const [activeTab, setActiveTab] = useState("All");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const filteredData = dataCard.filter((porto) => {
    if (activeTab === "All") return true;
    else if (activeTab === "Coding") return porto.label === "Website";
    else if (activeTab === "Design") return porto.label === "Design";
    return porto.label === activeTab;
  });
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
      <main>
        <div className="fixed left-0 top-0 z-[-9999] h-[100vh] w-[100vw] bg-black"></div>
        <motion.div
          variants={wrapAnimate}
          initial="hidden"
          animate="visible "
          exit="exit"
          className="fixed left-0 top-0 z-50 h-[100vh] w-[100vw] bg-white/100"
        />
        <motion.div variants={containVariants} exit="exit" className="bg-white">
          <NavigationPage projectTitle="La Project Galleria" to="back" />
          <section className="mx-24 mt-12 max-sm:mx-4 max-sm:mt-4">
            <div className="rounded-2xl border-2 border-zinc-900 p-2 max-sm:border max-sm:p-1">
              <div className="relative mx-auto h-[350px] overflow-hidden rounded-xl bg-slate-500 max-sm:h-[200px]">
                <div className="absolute z-10 flex h-full w-full">
                  <div className="m-auto h-fit">
                    <p className="m-auto h-fit w-fit font-valorant text-[70px] text-amber-400 max-sm:text-4xl max-sm:font-medium">
                      LA GALERIE
                    </p>
                    <p className="mx-4 text-center text-amber-300 max-sm:text-[12px]">
                      Selamat datang di gallery portofolio saya!. Disini saya
                      memajang semua portofolio saya terkait coding, desain dan
                      juga ui desain.
                    </p>
                  </div>
                </div>

                <video
                  src="/videos/furiwir.mkv"
                  frameborder="0"
                  autoPlay
                  loop
                  playsInline
                  type="video/x-matroska"
                  className="brightness-[55%]"
                ></video>
              </div>
            </div>
          </section>
          <section className="sticky top-0 z-10 mx-24 py-8 max-sm:top-[24px] max-sm:mx-4 max-sm:py-4">
            <main className="portotab flex w-fit gap-5 border-2 border-zinc-500 bg-white p-2 max-sm:gap-2 max-sm:border max-sm:p-1">
              {["All", "Coding", "Figma", "Design"].map((tab) => (
                <div
                  key={tab}
                  className={`cursor-pointer px-4 py-2 font-semibold transition-all duration-500 max-sm:px-3 max-sm:py-1 max-sm:text-[14px] ${activeTab === tab ? `bg-amber-500 text-white` : "text-zinc-700 hover:bg-zinc-200"} `}
                  onClick={() => setActiveTab(tab)}
                >
                  <div className="flex items-center gap-1">
                    <span>{tab}</span>
                    {activeTab === tab && <span>({filteredData.length})</span>}
                  </div>
                </div>
              ))}
            </main>
          </section>
          <section className="mx-24 flex max-sm:mx-4">
            <div
              className={`grid w-full ${filteredData.length === 0 ? "grid-cols-1 justify-center" : "grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"} gap-8 max-sm:gap-2`}
            >
              <AnimatePresence>
                {filteredData.length === 0 ? (
                  <PortoEmpty />
                ) : (
                  filteredData.map((porto, index) => {
                    const cardMotion = [
                      {
                        initial: {
                          opacity: 0,
                          y: "-100px",
                        },
                        view: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            duration: 0.3,
                            delay: 0.3,
                          },
                        },
                        exit: {
                          opacity: 0,
                          y: "-100px",
                          transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            duration: 0.3,
                            delay: 0.3,
                          },
                        },
                      },
                      {
                        initial: {
                          opacity: 0,
                          y: "100px",
                        },
                        view: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            duration: 0.3,
                            delay: 0.4,
                          },
                        },
                        exit: {
                          opacity: 0,
                          y: "100px",
                          transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            duration: 0.3,
                            delay: 0.3,
                          },
                        },
                      },
                    ];
                    const animation = cardMotion[index % cardMotion.length];
                    return (
                      <motion.div
                        key={index}
                        variants={cardMotion}
                        initial={animation.initial}
                        animate={animation.view}
                        exit={animation.exit}
                        className="flex"
                      >
                        <CardProject2
                          key={porto.id}
                          to={`/projects/${porto.id}`}
                        >
                          <CardProject2.PolaroidImg
                            frame={porto.imageUrl}
                            label={porto.label}
                            labelstyle={`
                        ${porto.label === "Figma" ? "bg-emerald-500 text-white" : ""}
                        ${porto.label === "Design" ? "bg-violet-600 text-white" : ""}
                        `}
                            coverStyle={`
                        ${porto.label === "Figma" ? "bg-emerald-400/20" : ""}
                        ${porto.label === "Design" ? "bg-violet-500/20" : ""}
                          `}
                          />
                          <CardProject2.PolaroidBody
                            profile={pfp}
                            title={porto.title}
                            desc={porto.description}
                          />
                        </CardProject2>
                      </motion.div>
                    );
                  })
                )}
              </AnimatePresence>
            </div>
          </section>
          <FooterSection />
        </motion.div>
      </main>
    </>
  );
}
