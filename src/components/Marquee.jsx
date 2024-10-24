import { motion } from "framer-motion";
import React from "react";
import { marquedata } from "../constants";
const Marque = () => {
  return (
    <div className=" w-full text-[#C4BCB2]  flex whitespace-nowrap overflow-hidden max-sm:h-[15vh] py-10 font-[var]">
      {marquedata.map((item, index) => (
        <motion.h1
          className="text-[9.5vw]  leading-none tracking-wide pr-24 uppercase max-sm:py-4 max-sm:pr-10"
          key={index}
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ 
            duration:30, 
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