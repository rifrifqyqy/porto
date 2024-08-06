import CardProject2 from "@/components/Elements/Card/CardProject2";
import { pfp } from "@/components/imageImport";
import dataCard from "../data/data.json";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, Fragment, Suspense, lazy } from "react";
const PortoEmpty = lazy(() => import("@/components/Fragments/PortoEmpty"));
const FooterSection = lazy(() => import("@/components/Layouts/FooterSection"));
const NavigationPage = lazy(() => import("@/components/navigationPage"));
// const LazyItem = lazy(() =>
//   Wait(1000).then(() =>
//     import("@/components/LazyComponent").then((module) => ({
//       default: module.LazyItem,
//     })),
//   ),
// );
export default function GalleryPorto() {
  const [activeTab, setActiveTab] = useState("All");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const filteredData = dataCard.filter((porto) => {
    switch (activeTab) {
      case "All":
        return true;
      case "Coding":
        return porto.label === "Website";
      case "Design":
        return porto.label === "Design";
      case "Figma":
        return porto.label === "Figma";
      default:
        return porto.label === activeTab;
    }
  });

  const [loading, setLoading] = useState(true);
  const [loadVideo, setLoadVideo] = useState(true);
  const handleLoadedData = () => {
    setLoading(false);
  };
  const handleLoadVideo = () => {
    setLoadVideo(false);
  };

  const containVariants = {
    hidden: {
      y: 300,
    },
    visible: {
      y: 0,
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
  // tab category
  const tabCategory = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Coding",
    },
    {
      id: 3,
      name: "Figma",
    },
    {
      id: 4,
      name: "Design",
    },
  ];

  return (
    <>
      <Fragment>
        <div className="fixed left-0 top-0 z-[-9999] h-[100vh] w-[100vw] bg-black"></div>

        <motion.div
          variants={wrapAnimate}
          initial="hidden"
          animate="visible "
          exit="exit"
          className="fixed left-0 top-0 z-50 h-[100vh] w-[100vw] bg-white/100"
        />
        <motion.div
          variants={containVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white"
        >
          <NavigationPage projectTitle="La Project Galleria" to="back" />
          <section className="mx-24 mt-12 max-md:mx-8 max-sm:mx-4 max-sm:mt-4">
            <div className="rounded-2xl border-2 border-zinc-900 p-2 max-sm:border max-sm:p-1">
              <div className="relative mx-auto h-[350px] overflow-hidden rounded-xl bg-slate-500 max-sm:h-[200px]">
                <div className="absolute z-10 flex h-full w-full">
                  <div className="m-auto h-fit">
                    <p className="m-auto h-fit w-fit font-valorant text-[70px] text-amber-400 max-sm:text-4xl max-sm:font-medium">
                      LA GALERIE
                    </p>
                    <p className="mx-4 text-center text-amber-300 max-sm:text-[12px]">
                      Welcome to my portfolio gallery! Here, I showcase all my
                      portfolios related to coding, design, and UI design.
                    </p>
                  </div>
                </div>

                {loadVideo && (
                  <img
                    src="/images/banner-placeholder.jpg"
                    alt="Loading..."
                    className="inset-0 h-full w-full object-cover object-top brightness-[55%]"
                  />
                )}
                <video
                  src="/videos/furiwir_3.mp4"
                  frameBorder="0"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedData={handleLoadVideo} // Call the handler when video data is loaded
                  className="h-full w-full object-cover object-top brightness-[55%]"
                />
              </div>
            </div>
          </section>
          <section className="sticky top-8 z-10 mx-24 -mt-[32px] mb-16 flex justify-center max-md:mx-8 max-sm:top-[24px] max-sm:mx-4 max-sm:mb-4 max-sm:py-4">
            <main className="portotab flex w-fit items-center justify-between gap-5 border-2 border-zinc-500 bg-white p-2 max-sm:gap-2 max-sm:border max-sm:p-1">
              {tabCategory.map((tab) => (
                <div
                  key={tab.id}
                  className={`cursor-pointer px-4 py-2 font-semibold transition-all duration-500 max-sm:px-3 max-sm:py-1 max-sm:text-[14px] ${activeTab === tab.name ? `bg-amber-500 text-white` : "text-zinc-700 hover:bg-zinc-200"} `}
                  onClick={() => setActiveTab(tab.name)}
                >
                  <div className="flex items-center gap-1">
                    <p>{tab.name}</p>
                    {activeTab === tab.name && (
                      <Fragment>({filteredData.length})</Fragment>
                    )}
                  </div>
                </div>
              ))}

              <h1 className="mr-4 font-statliches text-2xl text-amber-500 max-md:hidden max-sm:ml-4 xl:ml-52">
                La project galleria
              </h1>
            </main>
          </section>
          <section className="mx-24 flex max-md:mx-8 max-sm:mx-4">
            <div
              className={`grid w-full ${filteredData.length === 0 ? "grid-cols-1 justify-center" : "grid-cols-2 max-md:grid-cols-3 max-sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"} gap-8 max-sm:gap-x-2 max-sm:gap-y-4`}
            >
              <AnimatePresence mode="wait">
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
                        className="flex justify-center"
                      >
                        <Suspense fallback={<h1>Loading</h1>}>
                          <CardProject2
                            key={porto.id}
                            to={`/gallery/${porto.id}`}
                          >
                            <Suspense fallback={<h1>Loading</h1>}>
                              <CardProject2.PolaroidImg
                                frame={
                                  loading
                                    ? "/images/placeholder_image.png"
                                    : porto.imageUrl
                                }
                                label={porto.label}
                                labelstyle={`
                            ${porto.label === "Figma" ? "bg-emerald-500 text-white" : ""}
                            ${porto.label === "Design" ? "bg-violet-600 text-white" : ""}
                          `}
                                coverStyle={`
                            ${porto.label === "Figma" ? "bg-emerald-400/20" : ""}
                            ${porto.label === "Design" ? "bg-violet-500/20" : ""}
                          `}
                                onLoad={handleLoadedData}
                              />
                            </Suspense>
                            <CardProject2.PolaroidBody
                              profile={pfp}
                              title={porto.title || "Loading....."}
                              desc={porto.description}
                            />
                          </CardProject2>
                        </Suspense>
                      </motion.div>
                    );
                  })
                )}
              </AnimatePresence>
            </div>
          </section>
          <FooterSection />
        </motion.div>
      </Fragment>
    </>
  );
}
