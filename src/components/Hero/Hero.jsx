import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import HeroPng from "../../assets/Healthy-Fruitss.png";
import LeafPng from "../../assets/leaf.png";
import { motion } from "framer-motion";
import { FadeRight } from "../../Utility/Animations";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/*Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal font-averia"
            >
              Healthy
              <br />
              Fresh <span className="text-secondary">Fruits!</span>
            </motion.h1>
            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-2xl tracking-wide font-averia"
            >
              Fuel Your Day with Nature’s Sweetest Bounty
            </motion.p>
            <motion.p
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-400 font-lato"
            >
              Discover a world of fresh, vibrant, and hand-picked fruits
              delivered to your table. At Fruity Plate, we believe every bite
              should bring you closer to health and happiness.
            </motion.p>
            {/*Button Section */}
            <motion.div
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className=" flex primary-btn items-center gap-2 font-lato">
                <span>
                  <IoBagHandleOutline className="text-xl" />
                </span>
                Explore Our Platters
              </button>
            </motion.div>
          </div>
        </div>
        {/*Hero Images */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={HeroPng}
            alt=""
            className="w-[350px] md:w-[550px] drop-shadow"
          />
        </div>
        {/* Leaf Image */}
        <div className="absolute text-xl top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]">
          <motion.img
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            src={LeafPng}
            alt=""
            className="w-full md:max-w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
