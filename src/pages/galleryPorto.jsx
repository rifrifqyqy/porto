import CardProject2 from "@/components/Elements/Card/CardProject2";
import { furina1, furina2, pfp } from "@/components/imageImport";
import NavigationPage from "@/components/navigationPage";
import dataCard from "../data/data.json";
import { AnimatePresence, motion } from "framer-motion";
import FooterSection from "@/components/Layouts/FooterSection";
import { useState } from "react";
import PortoEmpty from "@/components/Fragments/PortoEmpty";
export default function GalleryPorto() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData = dataCard.filter((porto) => {
    if (activeTab === "All") return true;
    else if (activeTab === "Coding") return porto.label === "Website";
    return porto.label === activeTab;
  });

  return (
    <>
      <NavigationPage projectTitle="La Project Galleria" to="/" />
      <section className="mx-24 mt-12">
        <div className="rounded-2xl border-2 border-zinc-900 p-2">
          <div className="relative mx-auto h-[350px] overflow-hidden rounded-xl bg-slate-500">
            <div className="absolute z-10 flex h-full w-full">
              <div className="m-auto h-fit">
                <p className="m-auto h-fit w-fit font-valorant text-[70px] text-amber-400">
                  LA GALERIE
                </p>
                <p className="text-amber-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  ipsa in. Consequuntur veniam maiores itaque ipsa impedit error
                  architecto porro?
                </p>
              </div>
            </div>

            <img
              src={furina2}
              alt=""
              className="h-full w-full object-cover object-top brightness-[60%]"
              style={{ objectPosition: "center -160px" }}
            />
          </div>
        </div>
      </section>
      <section className="mx-24 my-8">
        <main className="portotab flex w-fit gap-5 border-2 border-zinc-500 p-2">
          {["All", "Coding", "Figma", "Design"].map((tab) => (
            <div
              key={tab}
              className={`cursor-pointer px-4 py-2 font-semibold transition-all duration-500 ${activeTab === tab ? "bg-amber-500 text-white" : "text-zinc-700 hover:bg-zinc-200"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </main>
      </section>
      <section className="mx-24 flex justify-between">
        <div
          className={`grid w-full ${filteredData.length === 0 ? "grid-cols-1 justify-center" : "grid-cols-2 justify-start xl:grid-cols-3 2xl:grid-cols-4"} gap-8`}
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
                        delay: 0.3 * index,
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
                        delay: 0.4 * index,
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
                    <CardProject2 key={porto.id} to={`/projects/${porto.id}`}>
                      <CardProject2.PolaroidImg
                        frame={porto.imageUrl}
                        label={porto.label}
                        labelstyle={`
                        ${porto.label === "Figma" ? "bg-emerald-300/40 text-emerald-600" : ""}
                        ${porto.label === "Design" ? "bg-amber-300" : ""}
                        `}
                        coverStyle={`
                        ${porto.label === "Figma" ? "bg-amber-400/20" : ""}
                        ${porto.label === "Design" ? "bg-green-300/20" : ""}
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
    </>
  );
}
