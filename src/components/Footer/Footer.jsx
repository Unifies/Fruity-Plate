import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="bg-primary/10 py-12 mt-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="container flex justify-between items-center"
      >
        {/*Logo Section */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase cursor-pointer">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>

        {/*Logo Section */}
        <div className="text-xl flex items-center gap-6 mt06 text-gray-7oo">
          <FaInstagram className=" cursor-pointer" />
          <FaTwitter className=" cursor-pointer" />
          <FaFacebookF className=" cursor-pointer" />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
