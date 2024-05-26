import MainButton from "./Elements/Button/MainButton";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function NavigationBar({ aboutScroll }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuNav = [
    {
      menu: "Home",
      href: "#home",
    },
    {
      menu: "About",
      href: "#about",
    },

    {
      menu: "Portfolio",
      href: "#porto",
    },
    {
      menu: "Contacts",
      href: "#contact",
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
  return (
    <>
      <div className="w-full bg-gray-200 flex justify-center py-1">
        <p className="text-amber-500">This web is under development</p>
      </div>

      <nav className="flex sticky top-0 z-40 bg-white justify-between px-12 max-md:px-4 py-4 W-full border-b-[1px] items-center border-slate-800 ">
        <h1 className="font-statliches text-xl">Rifqy Hamdani</h1>
        <ul className="flex gap-10 max-md:hidden">
          {menuNav.map((menu) => (
            <li className="flex flex-col h-[26px] overflow-y-hidden">
              <motion.div className="flex flex-col" initital={{ y: 0 }} whileHover={{ y: -24 }}>
                <a href="" className=" uppercase">
                  {menu.menu}
                </a>
                <a href={menu.href} className="text-sky-700 uppercase">
                  {menu.menu}
                </a>
              </motion.div>
            </li>
          ))}
        </ul>
        <MainButton onClick={aboutScroll} className="px-6 text-[20px] bg-transparent border-t-2 border-l-2 border-b-4 border-r-4 border-gray-900 text-black bg-[#F8CC76] max-md:hidden active:scale-95 active:bg-[#ffc043]">
          Recruit
        </MainButton>
        <AnimatePresence>
          <motion.button
            initial={{ scale: 1, opacity: 1 }}
            whileTap={{ scale: 0.8, rotate: "180deg", opacity: 0 }}
            onClick={handleNavMobile}
            className={`hidden ${isOpen ? "bg-red-400" : "bg-[#F8CC76]"}  max-md:block border-[2px] border-gray-800`}
          >
            <img src={isOpen ? "images/close.svg" : "images/Hamburger.svg"} alt="" />
          </motion.button>
        </AnimatePresence>
      </nav>
      {isOpen && (
        <nav className="w-full h-[100vh] fixed top-[65px] bg-gray-900 bg-opacity-55 z-10">
          <ul className="flex flex-col gap-4 bg-white px-4 pt-4 h-[100vh] w-[60%]">
            {menuNav.map((menu) => (
              <li className="flex flex-col h-[26px] overflow-y-hidden">
                <motion.div className="flex flex-col" initital={{ y: 0 }} whileHover={{ y: -24 }}>
                  <a href={menu.href} onClick={handleMenuMobile} className=" uppercase">
                    {menu.menu}
                  </a>
                  <a href={menu.href} onClick={handleMenuMobile} className="text-sky-700 uppercase">
                    {menu.menu}
                  </a>
                </motion.div>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
