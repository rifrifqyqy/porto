import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import NavigationPage from "@/components/navigationPage";
import PortoCardLayout, { PortoDetailsLayout } from "@/components/Layouts/PortoDetailsLayout/PortoDetailsLayout";
import FooterSection from "@/components/Layouts/FooterSection";
import TabsProject from "@/components/Fragments/TabsProjectDetails";
import ArticleProject from "@/components/Fragments/ArticleDetailsHeader";
import dataCard from "@/data/data.json";
export default function ProjectPage() {
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
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
      <motion.div variants={containVariants} initial="hidden" animate="visible" exit="exit" className="w-full h-full -z-50 opacity-15">
        <NavigationPage projectTitle={portoData.title} to="/" />
        <main className="mx-32 mt-16">
          <section className="grid grid-cols-2 gap-0 divide-x-2 divide-zinc-400">
            <TabsProject tabData={tabData} handleTabClick={handleTabClick} activeTab={activeTab} />
            <ArticleProject portoData={portoData} toolIcon={toolIcon} />
          </section>
        </main>

        {/* section card recomend */}
        <section className="mx-32 mt-24 flex flex-col gap-8 items-center border-t border-zinc-900 pt-16">
          <h1 className="text-4xl font-statliches">you may also like</h1>
          <div className="flex max-md:flex-col gap-4">
            {/* portolayout */}
            <PortoCardLayout />
          </div>
        </section>
      </motion.div>
      <PortoDetailsLayout />
      <FooterSection />
    </>
  );
}
