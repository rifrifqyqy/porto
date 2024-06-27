import MainButton from "./Elements/Button/MainButton";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavigationBar({
  scrolltoAbout,
  scrolltoContact,
  scrolltoHome,
  scrolltoPorto,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuNav = [
    {
      menu: "Home",

      click: scrolltoHome,
    },
    {
      menu: "About",
      click: scrolltoAbout,
    },

    {
      menu: "Portfolio",
      click: scrolltoPorto,
    },
    {
      menu: "Gallery",
      to: "/gallery",
    },
    {
      menu: "Contacts",
      click: scrolltoContact,
    },
  ];

  const handleNavMobile = () => {
    console.log("sad");
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleMenuMobile = () => {
    setIsOpen(false);
  };

  // nav hidden on scroll
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

  return (
    <>
      <div className=" w-full justify-center bg-gray-200 py-1 shadow-inset1 hidden">
        <p className="text-amber-500">This web is under development</p>
      </div>

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
        className="W-full sticky top-0 z-40 flex items-center justify-between border-b-[1px] border-slate-800 bg-white/80 px-12 py-4 backdrop-blur max-md:px-4"
      >
        <h1 className="font-statliches text-xl">Rifqy Hamdani</h1>
        <ul className="flex gap-10 max-md:hidden">
          {menuNav.map((menu) => (
            <li className="flex h-[26px] flex-col overflow-y-hidden">
              <motion.div
                className="flex flex-col"
                initital={{ y: 0 }}
                whileHover={{ y: -24 }}
              >
                <Link href="" className="uppercase">
                  {menu.menu}
                </Link>
                <Link
                  onClick={menu.click}
                  className="uppercase text-sky-700"
                  to={menu.to}
                >
                  {menu.menu}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
        <MainButton className="border-b-4 border-l-2 border-r-4 border-t-2 border-gray-900 bg-[#F8CC76] px-6 text-[20px] text-black active:scale-95 active:bg-[#ffc043] max-md:hidden">
          Recruit
        </MainButton>
        <AnimatePresence>
          <motion.button
            initial={{ scale: 1, opacity: 1 }}
            whileTap={{ scale: 0.8, rotate: "180deg", opacity: 0 }}
            onClick={handleNavMobile}
            className={`hidden ${isOpen ? "bg-red-400" : "bg-[#F8CC76]"} border-[2px] border-gray-800 max-md:block`}
          >
            <img
              src={isOpen ? "images/close.svg" : "images/Hamburger.svg"}
              alt=""
            />
          </motion.button>
        </AnimatePresence>
      </motion.nav>
      {isOpen && (
        <nav className="fixed top-[65px] z-20 h-[100vh] w-full bg-gray-400 bg-opacity-55 backdrop-blur-sm">
          <ul className="border-retro m-4 flex h-[650px] w-[60%] flex-col gap-4 bg-white px-4 pt-4">
            {menuNav.map((menu) => (
              <li className="flex h-[26px] flex-col overflow-y-hidden">
                <motion.div
                  className="flex flex-col"
                  initital={{ y: 0 }}
                  whileHover={{ y: -24 }}
                >
                  <Link
                    href={menu.href}
                    onClick={() => {
                      menu.click();
                      handleMenuMobile();
                    }}
                    className="uppercase"
                  >
                    {menu.menu}
                  </Link>
                  <Link
                    onClick={() => {
                      menu.click();
                      handleMenuMobile();
                    }}
                    className="uppercase text-sky-700"
                    to={menu.to}
                  >
                    {menu.menu}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
