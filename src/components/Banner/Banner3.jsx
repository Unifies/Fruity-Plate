import React from "react";
import BannerPng from "../../assets/footer-banner.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../Utility/Animations";
import { IoBagHandleOutline } from "react-icons/io5";

const bgStyle = {
  backgroundImage: `url(${BannerPng})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

const Banner3 = () => {
  return (
    <section className="container mb-12">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-20 rounded-3xl"
      >
        {/* Blank Div */}
        <div></div>
        {/* Brand Info */}
        <div className="flex flex-col justify-center p-4">
          <div className="text-center md:text-left space-y-5 lg:max-w-[400px] flex flex-col gap-3">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold uppercase"
            >
              Ready to Indulge in Freshness?
            </motion.h1>

            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-lato"
            >
              Healthy living is just a click away. Explore our collection of
              beautifully arranged fruit platters, perfect for every day or
              special celebrations!
            </motion.p>

            <motion.div
              variants={FadeLeft(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <button className=" flex primary-btn items-center gap-2 font-lato">
                <span>
                  <IoBagHandleOutline className="text-xl" />
                </span>
                Order Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
