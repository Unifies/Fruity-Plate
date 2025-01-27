import React from "react";
import { GiFruitBowl } from "react-icons/gi";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Products",
    link: "#",
  },
  {
    id: 3,
    title: "About",
    link: "#",
  },
  {
    id: 4,
    title: "Shop",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-4 md:pt-4"
        >
          {/*Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase cursor-pointer">
            <p className="text-primary">Fruity</p>
            <p className="text-secondary">Plate</p>
            <GiFruitBowl className="text-green-500" />
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-12 text-gray-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-1 px3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}

              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          {/* Responsive Mobile Hamburger Menu Section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl text-gray-600 cursor-pointer" />
          </div>
        </motion.div>
      </nav>

      {/* Menu Section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
