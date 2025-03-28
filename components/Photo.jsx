"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] 
        h-[298px]  
        xl:w-[458px] 
        xl:h-[458px]
        mix-blend-lighten "
        >
          <Image
            src="/Atinphoto.png"
            width={500}
            height={500}
            priority
            quality={100}
            alt="Atin's Photo"
            className="object-contain absolute mt-[66px]  pr-8 "
          />
          <motion.svg
            className="w-[300px] xl:w-[506px] xl:h-[506px]"
            fill="tranparent"
            viewBox="0 0 506 506"
            xmlns="http:/www.w3.org/2000/svg"
          >
            <motion.circle
              cx="223"
              cy="223"
              r="195"
              stroke="#00ff99"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 "],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="position-center"
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
