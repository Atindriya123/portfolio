"use client";

import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "",
  },
  {
    num: "02",
    title: "Logo Design",
    description:
      "I build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "I build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "",
  },
  {
    num: "04",
    title: "Application Development",
    description:
      "I build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "",
  },
];

export default function page() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container max-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.5, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2  gap-[40px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-4 group p-[30px]"
              >
                <div className="w-full flex justify-between items-center gap-4">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent
                   group-hover:text-outline-hover transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] 
                    rounded-full 
                    
                    group-hover:bg-emerald-400 
                    transition-all duration-500 flex justify-center items-center hhover:rotate-45"
                  >
                    <BsArrowDownRight className="text-3xl bg-transparent" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-emerald-400 transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60 ">{service.description}</p>
                <div className="border-b border-white/20 w-full "></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
