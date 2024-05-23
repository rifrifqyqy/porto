import { Link } from "react-router-dom";
import MainButton from "../Elements/Button/MainButton";
import CardProject from "../Elements/Card/CardProject";
import { motion } from "framer-motion";
export default function ProjectSection() {
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
    },
    {
      id: 2,
      title: "BHARACODE WEB (GDSC)",
      date: "22 Januari 2024",
      imageUrl: "images/portoBharacode.png",
      description: "Bharacode web, website mengenai ekstrakulikuler kampus dengan ranah IT nya seperti frontend, UIUX, Backend",
      label: "Website",
      webUrl: "https://rifrifqyqy.github.io/Tugas-Akhir-RifqyHamdani/",
    },
    {
      id: 3,
      title: "tbn indonesia web revamp",
      date: "20 Mei 2024",
      imageUrl: "images/portoTBN.png",
      description: "TBNIndonesia merupakan perusahaan yang mengadakan event workshop berkaitan dengan bisnis",
      label: "Website",
      webUrl: "https://tbn-indonesia.vercel.app/",
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

  // animation
  const containerMotion = {
    initial: {},
    animate: {},
    whileHover: {},
    view: {
      transition: {
        when: "beforeChildren",
      },
    },
  };
  const headerMotion = {
    initial: {
      x: "-100px",
      opacity: 0,
    },
    view: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <motion.div variants={containerMotion} initial="initial" whileHover="whileHover" whileInView="view" className="relative overflow-x-hidden">
        <main className="mx-32 max-md:items-center max-md:mx-8 mt-24 max-md:mt-8 flex flex-col gap-8  " id="porto">
          <header className="grid items-end content-between grid-cols-3 max-md:grid-cols-1">
            <motion.article variants={headerMotion} className=" col-span-2 max-md:col-span-1">
              <h1 className="font-statliches text-[48px] max-md:text-[24px] ">Projects Gallery</h1>
              <p className="text-gray-500 max-md:text-[14px]">
                Selamat datang di GALLERY Imajinasi saya! Di sini, saya akan menampilkan hasil kreativitas saya. Mulai dari karya pixel hingga website dengan barisan code, yang menunjukkan kreativitas saya dalam desain UI/UX dan
                pengembangan web.
              </p>
            </motion.article>
          </header>
          <motion.section className="flex max-md:flex-col gap-4">
            {dataCard.slice(0, 3).map((data, index) => {
              const cardMotion = [
                {
                  initial: { opacity: 0, y: "-100px" },
                  view: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.3, delay: 0.3 * index } },
                },
                {
                  initial: { opacity: 0, y: "100px" },
                  view: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.3, delay: 0.3 * index } },
                },
              ];
              const animation = cardMotion[index % cardMotion.length];
              return (
                <motion.div key={index} initial={animation.initial} whileInView={animation.view} className="flex">
                  <CardProject key={index}>
                    <CardProject.CardHeader labelTag={data.label} labelLink={data.webUrl}>
                      {data.date}
                    </CardProject.CardHeader>
                    <CardProject.CardImg imageUrl={data.imageUrl} videoUrl={data.videoUrl}></CardProject.CardImg>
                    <CardProject.CardBody title={data.title}>{data.description}</CardProject.CardBody>
                  </CardProject>
                </motion.div>
              );
            })}
            <Link to="/projects" className="w-[220px] flex max-md:hidden">
              <motion.div
                initial={{ x: "-100px", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { delay: 1, duration: 0.5, type: "spring", stiffness: 100, damping: 10 } }}
                className=" bg-[#0D1A22] w-[100%] h-full flex items-center  overflow-hidden cursor-pointer"
              >
                <motion.div initial={{ x: -176 }} whileHover={{ x: 0, transition: { duration: 0.2 } }} className="flex w-fit h-[100%] gap-28 items-center">
                  <img src="images/seemore.svg" alt="" className=" w-[120px] h-[600px] self-center" />

                  <div className="flex h-full w-[500px]">
                    <img src="images/plus.svg" alt="" className="w-[100px] h-full self-center" />
                  </div>
                </motion.div>
              </motion.div>
            </Link>
          </motion.section>
        </main>
        <aside className="absolute top-[40%] left-0 -z-20">
          <img src="images/dotpattern.png" alt="" />
          <img src="images/text-vertical2.png" alt="" className="ml-16 -mt-24" />
        </aside>
      </motion.div>
    </>
  );
}
