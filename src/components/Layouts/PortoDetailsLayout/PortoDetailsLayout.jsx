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
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.3,
                delay: 0.3 * index,
              },
            },
          },
        ];
        const animation = cardMotion[index % cardMotion.length];
        return (
          <motion.div
            key={index}
            initial={animation.initial}
            whileInView={animation.view}
            className="flex"
          >
            <CardProject key={data.id} to={`/gallery/${data.id}`}>
              <span className="py-2" />
              <CardProject.CardImg
                imageUrl={data.imageUrl}
                videoUrl={data.videoUrl}
              ></CardProject.CardImg>
              <CardProject.CardBody label={data.label} title={data.title}>
                {data.description}
              </CardProject.CardBody>
            </CardProject>
          </motion.div>
        );
      })}
      <Link to="/gallery" className="flex w-[220px] max-md:hidden">
        <motion.div
          initial={{ x: "-100px", opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 1,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 10,
            },
          }}
          className="flex h-full w-[100%] cursor-pointer items-center overflow-hidden bg-[#0D1A22]"
        >
          <motion.div
            initial={{ x: -176 }}
            whileHover={{ x: 0, transition: { duration: 0.2 } }}
            className="flex h-[100%] w-fit items-center gap-28"
          >
            <img
              src="/images/seemore.svg"
              alt=""
              className="h-[600px] w-[120px] self-center"
            />

            <div className="flex h-full w-[500px]">
              <img
                src="/images/plus.svg"
                alt=""
                className="h-full w-[100px] self-center"
              />
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
