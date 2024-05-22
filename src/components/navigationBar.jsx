import MainButton from "./Elements/Button/MainButton";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function NavigationBar() {
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
      <nav className="flex sticky top-0 z-50 bg-white justify-between px-12 max-md:px-4 py-4 border-b-[1px] items-center border-slate-800 ">
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

        <MainButton className="px-6 text-[20px] bg-sky-700 max-md:hidden">Recruit</MainButton>
        <button onClick={handleNavMobile} className="hidden max-md:block">
          <img src={isOpen ? "images/close.svg" : "images/Hamburger.svg"} alt="" />
        </button>
      </nav>
      {isOpen && (
        <nav className="w-full h-[100vh] sticky top-[65px] bg-gray-900 bg-opacity-55 z-50">
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
