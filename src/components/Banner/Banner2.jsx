import React from "react";
import BannerPng from "../../assets/Fruit-Store.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../Utility/Animations";

const Banner2 = () => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
      {/* Brand Info */}
      <div className="flex flex-col justify-center">
        <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
          <motion.h1
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold uppercase"
          >
            Fruity Plate Online Store
          </motion.h1>

          <motion.p
            variants={FadeUp(0.7)}
            initial="hidden"
            animate="visible"
            className="text-xl font-semibold text-secondary font-lato"
          >
            Your Partner in Freshness and Flavor
          </motion.p>

          <motion.p
            variants={FadeUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-lato"
          >
            At Fruity Plate, we take pride in curating the finest selection of
            fruits sourced directly from trusted farms. Our mission is to make
            healthy eating effortless, delicious, and accessible.
          </motion.p>

          <motion.p
            variants={FadeUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-lato"
          >
            From seasonal favorites to exotic picks, every fruit is chosen with
            care to ensure exceptional quality and taste.
          </motion.p>
          <motion.div
            variants={FadeUp(1.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <button className=" flex primary-btn items-center font-lato">
              Download the App
            </button>
          </motion.div>
        </div>
      </div>
      {/* Banner Image */}
      <div className="flex justify-center items-center">
        <motion.img
          initial={{ opacity: 0, x: 200, rotate: 75 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          src={BannerPng}
          alt=""
          className="w-[350px] h-full object-cover drop-shadow md:max-width-[400px]"
        />
      </div>
    </section>
  );
};

export default Banner2;
