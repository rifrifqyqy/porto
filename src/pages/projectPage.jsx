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
      <motion.div variants={containVariants} initial="hidden" animate="visible" exit="exit" className="w-full h-full -z-50 opacity-15">
        <NavigationPage projectTitle={portoData.title} to="/" />
        <main className="mx-32 max-md:mx-4 mt-16 max-md:mt-4 ">
          <section className="grid grid-cols-2 max-md:grid-cols-1 gap-16  divide-x max-md:divide-x-0 max-md:divide-y divide-zinc-800">
            <TabsProject tabData={tabData} handleTabClick={handleTabClick} activeTab={activeTab} />
            <ArticleProject portoData={portoData} toolIcon={toolIcon} />
          </section>
        </main>

        {/* section card recomend */}
        <section className="mx-32 max-md:mx-4 mt-24 max-md:mt-4 flex flex-col gap-8 max-md:gap-4 items-center border-t max-md:border-0 border-zinc-900 pt-16 max-md:pt-4">
          <h1 className="text-4xl font-statliches max-md:text-2xl">you may also like</h1>
          <div className="flex max-md:flex-col gap-4">
            {/* portolayout */}
            <PortoCardLayout />
          </div>
        </section>
      </motion.div>
     
      <FooterSection />
    </>
  );
}
