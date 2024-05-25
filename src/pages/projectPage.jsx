import { delay, motion } from "framer-motion";
export default function ProjectPage() {
  const containVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, delay: 5 },
    },
    exit: {
      opacity: 0,
      x: "-100vw",
      transition: {
        ease: "easeInOut",
        duration: 2,
      },
    },
  };
  return (
    <motion.div variants={containVariants} initial="hidden" animate="visible" exit={{ opacity: 0, y: "100vh" }} className="bg-red-400 -z-50 opacity-15">
      <div>Project Page</div>
    </motion.div>
  );
}
