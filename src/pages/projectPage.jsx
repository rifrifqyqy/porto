import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import NavigationPage from "@/components/navigationPage";
import PortoCardLayout, {
  PortoDetailsLayout,
} from "@/components/Layouts/PortoDetailsLayout/PortoDetailsLayout";
import FooterSection from "@/components/Layouts/FooterSection";
import TabsProject from "@/components/Fragments/TabsProjectDetails";
import ArticleProject from "@/components/Fragments/ArticleDetailsHeader";
import dataCard from "@/data/data.json";
export default function ProjectPage() {
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const containVariants = {
    hidden: {
      opacity: 0,
      y: "100vh",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 2,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 2,
      },
    },
  };
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const portoData = dataCard.find((porto) => porto.id === parseInt(id));
  const tabData = portoData.tabs;
  const toolIcon = portoData.tools;
  console.log(toolIcon);
  return (
    <>
      <motion.div
        variants={containVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="-z-50 h-full w-full opacity-15"
      >
        <NavigationPage projectTitle={portoData.title} to="back" />
        <main className="mx-32 mt-16 max-md:mx-4 max-md:mt-4">
          <section className="grid grid-cols-2 gap-16 divide-x divide-zinc-800 max-md:grid-cols-1 max-md:divide-x-0 max-md:divide-y max-sm:gap-0">
            <TabsProject
              tabData={tabData}
              handleTabClick={handleTabClick}
              activeTab={activeTab}
              tabImage={`
              ${portoData.label === "Design" ? "bg-violet-500" : ""}
              ${portoData.label === "Figma" ? "bg-emerald-500" : ""}
              ${portoData.label === "Website" ? "bg-red-500" : ""}
              `}
              bgTabsImage={`
              ${portoData.label === "Design" ? "bg-violet-500" : ""}
              ${portoData.label === "Figma" ? "bg-emerald-500" : ""}
              ${portoData.label === "Website" ? "bg-red-500" : ""}`}
            />
            <ArticleProject portoData={portoData} toolIcon={toolIcon} />
          </section>
        </main>

        {/* section card recomend */}
        <section className="mx-32 mt-24 flex flex-col items-center gap-8 border-t border-zinc-900 pt-16 max-md:mx-4 max-md:mt-4 max-md:gap-4 max-md:border-0 max-md:pt-4">
          <h1 className="font-statliches text-4xl max-md:text-2xl">
            you may also like
          </h1>
          <div className="flex gap-4 max-md:flex-col">
            {/* portolayout */}
            <PortoCardLayout />
          </div>
        </section>
      </motion.div>

      <FooterSection />
    </>
  );
}
