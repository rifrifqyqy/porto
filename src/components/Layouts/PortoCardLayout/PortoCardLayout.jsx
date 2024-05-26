import { motion } from "framer-motion";
import CardProject from "@/components/Elements/Card/CardProject";
import { Link } from "react-router-dom";
export default function PortoCardLayout() {
  const dataCard = [
    {
      id: 1,
      title: "SMAKO LANDING PAGE",
      date: "22 Februari 2024",
      imageUrl: "/images/porto1.png",
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
      imageUrl: "/images/portoBharacode.png",
      description: "Bharacode web, website mengenai ekstrakulikuler kampus dengan ranah IT nya seperti frontend, UIUX, Backend",
      label: "Website",
      webUrl: "https://rifrifqyqy.github.io/Tugas-Akhir-RifqyHamdani/",
      tabs: [
        { id: 0, image: "/images/portoTBN.png" },
        { id: 1, image: "/images/portoBharacode.png" },
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
      imageUrl: "/images/portoTBN.png",
      description: "TBNIndonesia merupakan perusahaan yang mengadakan event workshop berkaitan dengan bisnis",
      label: "Website",
      webUrl: "https://tbn-indonesia.vercel.app/",
      tabs: [
        { id: 0, image: "/images/portoTBN.png" },
        { id: 1, image: "/images/portoBharacode.png" },
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
      imageUrl: "/images/porto1.png",
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
  return (
    <>
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
            <CardProject key={data.id} to={`/projects/${data.id}`}>
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
            <img src="/images/seemore.svg" alt="" className=" w-[120px] h-[600px] self-center" />

            <div className="flex h-full w-[500px]">
              <img src="/images/plus.svg" alt="" className="w-[100px] h-full self-center" />
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </>
  );
}
