import { motion } from "framer-motion";
import CardProject from "@/components/Elements/Card/CardProject";
import { Link } from "react-router-dom";
import dataCard from "@/data/data.json";
export default function PortoCardLayout() {
  return (
    <>
      {dataCard.slice(0, 3).map((data, index) => {
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
          },
          {
            initial: {
              opacity: 0,
              y: "100px",
            },
            view: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.3, delay: 0.3 * index },
            },
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

export function PortoDetailsLayout() {
  return (
    <>
      <div>safddasdasdhjld</div>
    </>
  );
}
