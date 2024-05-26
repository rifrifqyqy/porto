import { delay, motion } from "framer-motion";
export default function ProjectPage() {
  const containVariants = {
    hidden: {
      opacity: 0,
      y: "100vh",
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
        ease: "easeInOut",
        duration: 2,
      },
    },
  };
  return (
    <motion.div variants={containVariants} initial="hidden" animate="visible" exit={{ opacity: 0, y: "100vh" }} className=" w-full h-full bg-red-400 -z-50 opacity-15 flex ">
      <div className="flex self-center m-auto text-center text-5xl">Project Page</div>
    </motion.div>
  );
}
