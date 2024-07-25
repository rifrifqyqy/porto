/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import "../../index.css";
export default function TabsProject({
  tabData,
  handleTabClick,
  activeTab,
  tabImage,
  bgTabsImage,
}) {
  return (
    <>
      <aside>
        <div
          className={`tabcontent border-retro aspect-video h-[390px] w-full overflow-hidden max-md:h-[249px] max-md:w-full ${bgTabsImage}`}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={tabData[activeTab].image}
              initial={{ y: "100vh", opacity: 1 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={tabData[activeTab].image}
              alt=""
              className="h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>
        <div className="no-scrollbar h-fit w-full overflow-x-scroll">
          <div className="ml-1 mt-4 flex w-max gap-2">
            {tabData.map((tab, index) => (
              <AnimatePresence key={tab.id}>
                <motion.div
                  className={`tabheader h-16 w-16 cursor-pointer border-zinc-800 transition-all duration-300 max-md:h-14 max-md:w-14 ${tabImage} ${activeTab === index ? "border-retro-org -translate-y-2 scale-110" : "border-retro-sm"} `}
                  onClick={() => handleTabClick(index)}
                >
                  <img
                    src={tab.image}
                    alt={`Thumbnail ${index}`}
                    className={`duration-400 h-full w-full object-cover transition-all hover:opacity-100 ${activeTab === index ? "opacity-100" : "opacity-60"}`}
                  />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
