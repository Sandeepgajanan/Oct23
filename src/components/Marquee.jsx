import { motion } from "framer-motion";
import React from "react";
import { marquedata } from "../constants";
const Marque = () => {
  return (
    <div className=" w-full text-[#C4BCB2]  flex whitespace-nowrap overflow-hidden  py-10 font-[var] max-sm:py-5">
      {marquedata.map((item, index) => (
        <motion.h1
          className="text-[9.5vw]  leading-none tracking-wide pr-24 uppercase  max-sm:text-[5vw] max-sm:pr-6"
          key={index}
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,

          }}
        >
          {item}
        </motion.h1>
      ))}
    </div>
  );
};

export default Marque;