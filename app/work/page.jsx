"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowRight, BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend Project",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, quidem.",
    Stack: [
      { name: "React" },
      { name: "node.js" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
    ],
    image: "/dummyimg.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, quidem.",
    Stack: [{ name: "Next.js" }, { name: "MongoDB" }, { name: "chakra UI" }],
    image: "/dummyimg.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Mern Stack",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, quidem.",
    Stack: [
      { name: "React" },
      { name: "node.js" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
    ],
    image: "/dummyimg.png",
    live: "",
    github: "",
  },
];

const Page = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get curent slide index
    const currentSlide = swiper.activeIndex;
    //update project state
    setProject(projects[currentSlide]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col 
  justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-[80px] xl:w-[50%] xl:h-[60px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] min-w-[80px]">
              <div className="text-8xl ml-4 xl:ml-[80px]  md:py-[20px] leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/*project category*/}
              <div className="container mx-auto   xl:ml-[54px]">
                <h2
                  className="text-[42px] font-bold 
                leading-none text-white hover:text-emerald-400 transition-all duration-500 capitalize"
                >
                  {project.category}
                </h2>
                {/*project description*/}

                <p className=" text-[15px] w-[40vw]  py-8 font-thin text-white/60 group-hover:text-emerald-400 transition-all duration-500">
                  {project.description}
                </p>
                {/*stack*/}
                <ul className="flex gap-4">
                  {project.Stack.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="font-normal text-[15px] text-emerald-400"
                      >
                        {item.name}
                        {index !== project.Stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                <div className="border w-[40vw] border-white/20"></div>
                <div className="flex items-center gap-4 mt-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] flex items-center justify-center bg-white/5 rounded-full group ">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-emerald-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] flex items-center justify-center bg-white/5 rounded-full group ">
                          <BsGithub className="text-white text-3xl group-hover:text-emerald-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className=" xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[468px]  relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay*/}
                      <div></div>
                      {/*image*/}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          alt=""
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
