"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const about = {
  title: "About Me",
  description:
    "I am a full stack developer with a passion for creating beautiful and functional websites. I have experience in front-end and back-end development, as well as design. I am proficient in HTML, CSS, JavaScript, React, Node.js, and Figma. I am also familiar with Tailwind CSS and Next.js.",
  info: [
    { fieldName: "Name", fieldvalue: "Atindriya Mondal" },
    { fieldName: "Phone", fieldvalue: "(+91) 6294627376" },
    { fieldName: "Experience", fieldvalue: "12+ years" },
    { fieldName: "Nationality", fieldvalue: "Indian" },
    { fieldName: "Email", fieldvalue: "atindriyamondal1@gmail.com" },
    { fieldName: "Languages", fieldvalue: "English, Hindi, Bengali" },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "I have over 12 years of experience in web development. I have worked with clients from various industries, including e-commerce, healthcare, and education. I have experience in front-end and back-end development, as well as design. I am proficient in HTML, CSS, JavaScript, React, Node.js, and Figma. I am also familiar with Tailwind CSS and Next.js.",
  items: [
    {
      company: "Company 1",
      position: "Senior Full Stack Developer",
      duration: "2010 - 2015",
    },
    {
      company: "Company 2",
      position: "Senior Full Stack Developer",
      duration: "2015 - 2020",
    },
    {
      company: "Company 3",
      position: "Frontend Developer",
      duration: "2020 - Present",
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "I have a strong educational background in web development, focusing on both front-end and back-end technologies.",
  items: [
    {
      institution: "Institution 1",
      degree: "Bachelor's in Computer Science",
      duration: "2006 - 2010",
    },
    {
      institution: "Institution 2",
      degree: "Master's in Software Engineering",
      duration: "2010 - 2012",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I am proficient in HTML, CSS, JavaScript, React, Node.js, and Figma. I am also familiar with Tailwind CSS and Next.js.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiMongodb />, name: "Mongodb" },
  ],
};

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
      }}
      className="min-h-[70vh] flex flex-col items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row xl:ml-8 gap-[80px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Experience Tab */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                  {experience.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-emerald-400">{item.duration}</span>
                      <h3 className="text-xl min-h-[60px] text-center lg:text-left">
                        {item.position}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-emerald-400"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                  {education.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-emerald-400">{item.duration}</span>
                      <h3 className="text-xl min-h-[60px] text-center lg:text-left">
                        {item.degree}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-emerald-400"></span>
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {skills.description}
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[10px]">
                {skills.skillList.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-[#232329] h-[100px] py-4 px-6 rounded-xl flex flex-col items-center justify-center"
                  >
                    <div className="text-2xl text-emerald-400">
                      {skill.icon}
                    </div>
                    <p className="text-white/60 mt-2">{skill.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          {/* About Me Tab */}
          <TabsContent value="about" className="w-full ">
            <div className="flex flex-col gap-[30px] text-center xl:text-left xl:pb-4">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
              </p>
              <ul
                className="grid grid-cols-1 xl:grid-cols-2 
               max-w-[720px] gap-9 mx-auto xl:mx-0"
              >
                {about.info.map((info, index) => (
                  <li
                    key={index}
                    className="bg-[#232329] h-[100px] px-3 py-4 rounded-xl flex justify-between items-center"
                  >
                    <span className="text-white font-semibold">
                      {info.fieldName}:
                    </span>
                    <span className="text-white/60  font-normal">
                      {info.fieldvalue}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
}
