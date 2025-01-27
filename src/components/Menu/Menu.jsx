import React from "react";
import Fruit1 from "../../assets/Fruits/Apple.png";
import Fruit2 from "../../assets/Fruits/Orange.png";
import Fruit3 from "../../assets/Fruits/Avocado.png";
import Fruit4 from "../../assets/Fruits/Cherries.png";
import Fruit5 from "../../assets/Fruits/Banana.png";
import Fruit6 from "../../assets/Fruits/Strawberry.png";
import Fruit7 from "../../assets/Fruits/Pineapple.png";
import Fruit8 from "../../assets/Fruits/Mango.png";
import Fruit9 from "../../assets/Fruits/Kiwi.png";
import Fruit10 from "../../assets/Fruits/Peach.png";
import Fruit11 from "../../assets/Fruits/Persimmon.png";
import Fruit12 from "../../assets/Fruits/Grapes.png";
import { AnimatePresence, motion } from "framer-motion";
import { FadeLeft } from "../../Utility/Animations";
import { IoBagHandleOutline } from "react-icons/io5";

const MenuData = [
  {
    id: 1,
    title: "Fresh Red Apples",
    link: "/",
    price: "$3.99",
    img: Fruit1,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Fresh Oranges",
    link: "/",
    price: "$4.99",
    img: Fruit2,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fresh Avocado",
    link: "/",
    price: "$5.99",
    img: Fruit3,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Fresh Cherries",
    link: "/",
    price: "$2.99",
    img: Fruit4,
    delay: 1.2,
  },
  {
    id: 5,
    title: "Fresh Banana",
    link: "/",
    price: "$3.99",
    img: Fruit5,
    delay: 0.3,
  },
  {
    id: 6,
    title: "Fresh Strawberry",
    link: "/",
    price: "$4.99",
    img: Fruit6,
    delay: 0.6,
  },
  {
    id: 7,
    title: "Fresh Pineapple",
    link: "/",
    price: "$5.99",
    img: Fruit7,
    delay: 0.9,
  },
  {
    id: 8,
    title: "Fresh Mango",
    link: "/",
    price: "$2.99",
    img: Fruit8,
    delay: 1.2,
  },
  {
    id: 9,
    title: "Fresh Kiwi",
    link: "/",
    price: "$3.99",
    img: Fruit9,
    delay: 0.3,
  },
  {
    id: 10,
    title: "Fresh Peach",
    link: "/",
    price: "$4.99",
    img: Fruit10,
    delay: 0.6,
  },
  {
    id: 11,
    title: "Fresh Persimmon",
    link: "/",
    price: "$5.99",
    img: Fruit11,
    delay: 0.9,
  },
  {
    id: 12,
    title: "Fresh Grapes",
    link: "/",
    price: "$2.99",
    img: Fruit12,
    delay: 1.2,
  },
];

const Menu = () => {
  return (
    <section>
      <div className="container pt-12 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="pb-14"
        >
          <h1 className="text-2xl font-bold text-center uppercase">Our Menu</h1>
          <p className="text-secondary text-2xl font-bold text-center pt-4 capitalize">
            Plates of Perfection, One Fruit at a Time
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-10 font-lato">
          {MenuData.map((menu) => (
            <motion.div
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView={"visible"}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3 cursor-pointer"
            >
              <img
                src={menu.img}
                alt=""
                className="w-[60px] mb-4 scale-110 transform -translate-y-6"
              />
              <div>
                <h1 className="text-lg font-semibold">{menu.title}</h1>
                <p className="text-lg font-semibold text-secondary">
                  {menu.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-center"
        >
          <button className=" flex primary-btn items-center gap-2">
            <span>
              <IoBagHandleOutline className="text-xl" />
            </span>
            Browse Our Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
