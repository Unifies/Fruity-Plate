import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 md:hidden"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col items-center gap-7">
              <li>
                <a href="/" className="hover:shadow-[0_3px_0_-1px_#ffffff]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:shadow-[0_3px_0_-1px_#ffffff]">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:shadow-[0_3px_0_-1px_#ffffff]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:shadow-[0_3px_0_-1px_#ffffff]">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:shadow-[0_3px_0_-1px_#ffffff]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
