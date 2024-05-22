import MainButton from "./Elements/Button/MainButton";
import { motion } from "framer-motion";

export default function NavigationBar() {
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
      href: "#contact"
    },
  ];

  return (
    <>
      <div className="w-full text-center border-b-[1px] py-1 bg-gray-200 text-amber-600">this web is under development!</div>
      <nav className="flex sticky top-0 z-50 bg-white justify-between px-12 py-4 border-b-[1px] items-center border-slate-800 ">
        <h1 className="font-statliches text-xl">Rifqy Hamdani</h1>
        <ul className="flex gap-10 ">
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

        <MainButton className="px-6 text-[20px] bg-sky-700">Recruit</MainButton>
      </nav>
    </>
  );
}
