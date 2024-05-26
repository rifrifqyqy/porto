import MainButton from "@/components/Elements/Button/MainButton";
import NavigationBar from "@/components/navigationBar";
import { AnimatePresence, delay, motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { useParams } from "react-router-dom";
export default function ProjectPage() {
  let { id } = useParams();
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
      y: "100vh",
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

  const dataCard = [
    {
      id: 1,
      title: "SMAKO LANDING PAGE",
      date: "22 Februari 2024",
      imageUrl: "images/porto1.png",
      description:
        "SMAKO is an application owned by a single company or wholesale groceries store. This application serves customers who wish to purchase groceries in large quantities. The SMAKO app is an ideal solution for grocery store owners looking to expand their business and for customers seeking a steady supply of groceries in bulk.",
      label: "Website",
      webUrl: "https://rifrifqyqy.github.io/Smako-wholesale/",
      tabs: [
        { id: 0, image: "/images/porto1.png" },
        { id: 1, image: "/images/porto/smakothumb.jpg" },
        { id: 2, image: "/images/porto/smako1.png" },
        { id: 3, image: "/images/porto/smako2.png" },
      ],
    },
    {
      id: 2,
      title: "BHARACODE WEB (GDSC)",
      date: "22 Januari 2024",
      imageUrl: "images/portoBharacode.png",
      description: "Bharacode web, website mengenai ekstrakulikuler kampus dengan ranah IT nya seperti frontend, UIUX, Backend",
      label: "Website",
      webUrl: "https://rifrifqyqy.github.io/Tugas-Akhir-RifqyHamdani/",
      tabs: [
        { id: 0, image: "/images/portoTBN.png" },
        { id: 1, image: "/images/portoBharacode.png" },
      ],
    },
    {
      id: 3,
      title: "tbn indonesia web revamp",
      date: "20 Mei 2024",
      imageUrl: "images/portoTBN.png",
      description: "TBNIndonesia merupakan perusahaan yang mengadakan event workshop berkaitan dengan bisnis",
      label: "Website",
      webUrl: "https://tbn-indonesia.vercel.app/",
      tabs: [
        { id: 0, image: "/images/portoTBN.png" },
        { id: 1, image: "/images/portoBharacode.png" },
      ],
    },
    {
      id: 4,
      title: "Homespot web revamp",
      date: "22 Januari 2024",
      imageUrl: "images/porto1.png",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate consequuntur illo eligendi sed fugit. Aut ducimus excepturi non illum autem.",
      label: "Figma",
    },
  ];
  const portoData = dataCard.find((porto) => porto.id === parseInt(id));
  const tabData = portoData.tabs;
  console.log(tabData);
  return (
    <>
      <motion.div variants={containVariants} initial="hidden" animate="visible" exit="exit" className="w-full h-full -z-50 opacity-15">
        <NavigationBar />
        <main className="mx-32 mt-16">
          <section className="grid grid-cols-2 gap-0 divide-x-2 divide-zinc-400">
            <main className="">
              <div className="tabcontent border-retro h-[390px] w-[560px] overflow-hidden">
                <img src={tabData[activeTab].image} alt="" />
              </div>
              <div className="flex gap-2 mt-4">
                {tabData.map((tab, index) => (
                  <AnimatePresence key={tab.id}>
                    <motion.div
                      className={`tabheader bg-black w-16 h-16 transition-all duration-300 cursor-pointer ${activeTab === index ? " border-retro scale-110 -translate-y-2" : "border-retro-sm"}`}
                      onClick={() => handleTabClick(index)}
                    >
                      <img src={tab.image} alt={`Thumbnail ${index}`} className={`w-full h-full object-cover transition-all duration-400  ${activeTab === index ? "opacity-100   " : "opacity-60"}`} />
                    </motion.div>
                  </AnimatePresence>
                ))}
              </div>
            </main>
            <article className="pl-16 flex flex-col gap-4 ">
              <header className="flex flex-col gap-4">
                <div>
                  <h1 className="font-statliches text-[36px]">{portoData.title}</h1>
                  <label className="bg-amber-300 px-4 py-1 w-fit">{portoData.label}</label>
                </div>

                <p className="text-gray-500">{portoData.description}</p>
              </header>
              <div className="flex flex-col gap-2">
                <MainButton className="text-center bg-transparent text-sky-700 border-retro text-[20px]">Lihat Figma</MainButton>
                <MainButton className="text-center bg-sky-700 text-white border-retro text-[20px]">Lihat Website</MainButton>
              </div>
              {/* accordion */}
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </article>
          </section>
        </main>
      </motion.div>
    </>
  );
}
