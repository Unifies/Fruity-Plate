import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="bg-primary/10 py-12 mt-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="container flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center"
      >
        {/*Logo Section */}
        <div className="flex flex-col gap-3 pb-6">
          <div className="text-2xl flex items-center gap-2 font-bold uppercase cursor-pointer">
            <p className="text-primary">Fruity</p>
            <p className="text-secondary">Plate</p>
            <GiFruitBowl className="text-green-500" />
          </div>
          <div>
            <p className="text-primary font-lato">
              © 2025 Fruity Plate. All rights reserved.
            </p>
          </div>
        </div>

        {/*Logo Section */}
        <div className="text-xl flex items-center gap-6 text-gray">
          <FaInstagram className="transition duration-200 hover:scale-[1.1] hover:text-primary cursor-pointer" />
          <FaTwitter className="transition duration-200 hover:scale-[1.1] hover:text-primary cursor-pointer" />
          <FaFacebookF className="transition duration-200 hover:scale-[1.1] hover:text-primary cursor-pointer" />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
