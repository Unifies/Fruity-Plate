import React from "react";
import BannerPng from "../../assets/Fruit-Splash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../Utility/Animations";

const Banner = () => {
  return (
    <section className=" bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerPng}
            alt=""
            className="w-[300px] h-full object-cover"
          />
        </div>
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
              Why Choose Us
            </motion.h1>

            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pt-2 font-lato"
            >
              Whether you’re craving a juicy burst of summer berries, a
              refreshing bite of tropical mango, or a classic crunch of apples,
              Fruity Plate has you covered. <br />
              <br /> Browse our wide variety of fruit platters designed to
              delight every palate and occasion.
            </motion.p>

            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ul className="md:list-disc pl-3 font-lato">
                <li className="py-2">
                  <span className="font-semibold">Farm to Plate:</span> We
                  source directly from farmers to ensure peak freshness.
                  <li className="py-2">
                    <span className="font-semibold">Handpicked Quality:</span>{" "}
                    Each fruit is inspected to meet our premium standards.
                  </li>
                  <li className="py-2">
                    <span className="font-semibold">
                      Sustainable Practices:
                    </span>{" "}
                    Supporting the planet with eco-friendly packaging and
                    responsible sourcing.
                  </li>
                </li>
              </ul>
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <button className=" flex primary-btn items-center font-lato">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
