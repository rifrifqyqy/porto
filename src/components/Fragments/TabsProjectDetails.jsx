import { motion, AnimatePresence } from "framer-motion";
export default function TabsProject({ tabData, handleTabClick, activeTab }) {
  return (
    <>
      <aside>
        <div className="tabcontent border-retro h-[390px] max-md:h-[249px] aspect-video w-full max-md:w-full overflow-hidden bg-amber-400 ">
          <div></div>
          <AnimatePresence mode="wait">
            <motion.img
              key={tabData[activeTab].image}
              initial={{ y: "100vh", opacity: 1 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={tabData[activeTab].image}
              alt=""
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap">
          {tabData.map((tab, index) => (
            <AnimatePresence key={tab.id}>
              <motion.div
                className={`tabheader bg-[#FFBA34] w-16 max-md:w-14 h-16 max-md:h-14 transition-all duration-300 cursor-pointer border-zinc-800 ${activeTab === index ? " border-retro-org  scale-110 -translate-y-2" : "border-retro-sm"}`}
                onClick={() => handleTabClick(index)}>
                <img src={tab.image} alt={`Thumbnail ${index}`} className={`w-full h-full object-cover transition-all duration-400 hover:opacity-100  ${activeTab === index ? "opacity-100  " : "opacity-60"}`} />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </aside>
    </>
  );
}
