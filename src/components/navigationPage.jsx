import MainButton from "./Elements/Button/MainButton";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function NavigationPage({ projectTitle, to }) {
  const { scrollY } = useScroll();
  const [navHidden, setNavHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
    }
  });
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (to === "back") {
      navigate(-1); // Navigate back to the previous page
    } else {
      navigate(to); // Navigate to the specified path
    }
  };
  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={navHidden ? "hidden" : "visible"}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="sticky top-0 z-40 flex w-full items-center justify-between border-b-[1px] border-slate-800 bg-white/80 px-12 py-4 backdrop-blur max-md:px-4"
      >
        <MainButton
          to={to}
          onClick={handleNavigation}
          className="group flex items-center gap-4 bg-transparent text-zinc-900 hover:text-amber-500 max-md:gap-2 max-md:px-0 max-md:text-[16px]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7672 7.5431C11.0672 7.25744 11.0788 6.78271 10.7931 6.48276C10.5074 6.18281 10.0327 6.17123 9.73276 6.4569L10.7672 7.5431ZM4.48276 11.4569C4.18281 11.7426 4.17123 12.2173 4.4569 12.5172C4.74256 12.8172 5.21729 12.8288 5.51724 12.5431L4.48276 11.4569ZM5.51724 11.4569C5.21729 11.1712 4.74256 11.1828 4.4569 11.4828C4.17123 11.7827 4.18281 12.2574 4.48276 12.5431L5.51724 11.4569ZM9.73276 17.5431C10.0327 17.8288 10.5074 17.8172 10.7931 17.5172C11.0788 17.2173 11.0672 16.7426 10.7672 16.4569L9.73276 17.5431ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75V11.25ZM19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25V12.75ZM9.73276 6.4569L4.48276 11.4569L5.51724 12.5431L10.7672 7.5431L9.73276 6.4569ZM4.48276 12.5431L9.73276 17.5431L10.7672 16.4569L5.51724 11.4569L4.48276 12.5431ZM5 12.75H19V11.25H5V12.75Z"
              className="fill-zinc-900 group-hover:fill-amber-500"
            />
          </svg>
          Kembali
        </MainButton>

        <h2 className="border-retro line-clamp-1 cursor-pointer bg-amber-400 px-4 py-1 font-statliches text-2xl active:scale-110 max-md:text-lg max-sm:px-2 max-sm:max-w-[180px]">
          {projectTitle}
        </h2>
      </motion.nav>
    </>
  );
}
