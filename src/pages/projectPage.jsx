import MainButton from "@/components/Elements/Button/MainButton";
import { AnimatePresence, motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import NavigationPage from "@/components/navigationPage";
import PortoCardLayout from "@/components/Layouts/PortoCardLayout/PortoCardLayout";
import FooterSection from "@/components/Layouts/FooterSection";
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
      tools: [
        {
          id: 1,
          toolthumb: "/images/skill/css.svg",
        },
        {
          id: 2,
          toolthumb: "/images/skill/javascript.svg",
        },
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
        { id: 0, image: "/images/porto/bharacode1.png" },
        { id: 1, image: "/images/portoBharacode.png" },
        { id: 2, image: "/images/porto/sertifgdsc.jpg" },
      ],
      tools: [
        {
          id: 1,
          toolthumb: "/images/skill/css.svg",
        },
        {
          id: 2,
          toolthumb: "/images/skill/javascript.svg",
        },
        {
          id: 3,
          toolthumb: "/images/skill/jquery.svg",
        },
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
        { id: 1, image: "/images/porto/tbn3.png" },
        { id: 2, image: "/images/porto/tbn2.png" },
        { id: 3, image: "/images/porto/tbn4.png" },
      ],
      tools: [
        {
          id: 1,
          toolthumb: "/images/skill/figma.svg",
        },
        {
          id: 2,
          toolthumb: "/images/skill/react.svg",
        },
        {
          id: 3,
          toolthumb: "/images/skill/vitejs.svg",
        },
        {
          id: 4,
          toolthumb: "/images/skill/tailwind.svg",
        },
        {
          id: 5,
          toolthumb: "/images/skill/framermotion.svg",
        },
      ],
    },
    {
      id: 4,
      title: "Homespot web revamp",
      date: "22 Januari 2024",
      imageUrl: "images/porto1.png",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate consequuntur illo eligendi sed fugit. Aut ducimus excepturi non illum autem.",
      label: "Figma",
      tools: [
        {
          id: 1,
          toolthumb: "/images/skill/figma.svg",
        },
        {
          id: 2,
          toolthumb: "/images/skill/react.svg",
        },
        {
          id: 3,
          toolthumb: "/images/skill/vitejs.svg",
        },
      ],
    },
  ];
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
            <main className="">
              <div className="tabcontent border-retro h-[390px] w-[560px] overflow-hidden bg-amber-400">
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
              <div className="flex gap-2 mt-4">
                {tabData.map((tab, index) => (
                  <AnimatePresence key={tab.id}>
                    <motion.div
                      className={`tabheader bg-[#FFBA34] w-16 h-16 transition-all duration-300 cursor-pointer border-zinc-800 ${activeTab === index ? " border-retro-org  scale-110 -translate-y-2" : "border-retro-sm"}`}
                      onClick={() => handleTabClick(index)}
                    >
                      <img src={tab.image} alt={`Thumbnail ${index}`} className={`w-full h-full object-cover transition-all duration-400 hover:opacity-100  ${activeTab === index ? "opacity-100  " : "opacity-60"}`} />
                    </motion.div>
                  </AnimatePresence>
                ))}
              </div>
            </main>
            <article className="pl-16 flex flex-col gap-4 ">
              <header className="flex flex-col gap-4">
                <div>
                  <h1 className="font-statliches text-[36px]">{portoData.title}</h1>
                  <div className="flex items-center gap-4">
                    <label className="bg-amber-300 pr-3 pl-1 py-2 gap-2 w-fit flex">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45">
                        <path
                          d="M21.4354 2.58198C20.9352 2.0686 20.1949 1.87734 19.5046 2.07866L3.408 6.75952C2.6797 6.96186 2.16349 7.54269 2.02443 8.28055C1.88237 9.0315 2.37858 9.98479 3.02684 10.3834L8.0599 13.4768C8.57611 13.7939 9.24239 13.7144 9.66956 13.2835L15.4329 7.4843C15.723 7.18231 16.2032 7.18231 16.4934 7.4843C16.7835 7.77623 16.7835 8.24935 16.4934 8.55134L10.72 14.3516C10.2918 14.7814 10.2118 15.4508 10.5269 15.9702L13.6022 21.0538C13.9623 21.6577 14.5826 22 15.2628 22C15.3429 22 15.4329 22 15.513 21.9899C16.2933 21.8893 16.9135 21.3558 17.1436 20.6008L21.9156 4.52479C22.1257 3.84028 21.9356 3.09537 21.4354 2.58198Z"
                          className="fill-zinc-800"
                        />
                      </svg>
                      {portoData.label}
                    </label>
                    <img src="/images/bullet.svg" alt="" className="w-2 h-2 fill-sky-500" />
                    <p>{portoData.date}</p>
                  </div>
                </div>

                <p className="text-gray-500">{portoData.description}</p>
              </header>
              <div className="flex flex-col gap-2">
                <MainButton className="text-center bg-transparent text-sky-700 border-retro text-[20px] hover:bg-zinc-950 hover:text-white">Lihat Figma</MainButton>
                <MainButton to={portoData.webUrl} className="text-center bg-sky-700 text-white border-retro text-[20px]">
                  Lihat Website
                </MainButton>
              </div>
              {/* accordion */}
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-zinc-900">
                  <AccordionTrigger className="accordion-title hover:no-underline [&[data-state=open]>svg]:rotate-45 [&[data-state=open]>svg>path]:fill-[#FFBA34] hover:bg-zinc-100 px-4">Description</AccordionTrigger>
                  <AccordionContent className="px-4">{portoData.description}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className=" border-zinc-900">
                  <AccordionTrigger className="accordion-title hover:no-underline [&[data-state=open]>svg]:rotate-45 [&[data-state=open]>svg>path]:fill-[#FFBA34] hover:bg-zinc-100 px-4">Project Tools</AccordionTrigger>
                  <AccordionContent className="px-4 pt-4">
                    <div className="flex gap-4">
                      {toolIcon.map((tool, index) => (
                        <img src={tool.toolthumb} alt="" className="" />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </article>
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

        <FooterSection/>
      </motion.div>
    </>
  );
}
