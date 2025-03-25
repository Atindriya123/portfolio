"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MdOutlineFileDownload } from "react-icons/md";
import Socials from "@/components/ui/Socials";
import { Typewriter } from "react-simple-typewriter";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  const handleType = (count) => {
    const words = ["Hello I'm", "Atindriya Mondal"];
    console.log(`Currently typing word #${count + 1}: ${words[count]}`);

    // Perform an action for specific words
    if (words[count] === "Atindriya") {
      console.log("Let's get productive!");
    } else if (words[count] === "Mondal") {
      console.log("Time to rest!");
    }
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <section className="h-full xl:py-[5rem] xl:px-[5rem]">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col 
          items-center 
          justify-between xl:flex-row xl:pt-8 xl:pb-24"
        >
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm
              <br />
              <span className="text-emerald-400">
                <Typewriter
                  words={["Atindriya Mondal"]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onType={handleType}
                  onLoopDone={handleDone}
                />
              </span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting digital experiences and I am proficient in
              various programming languages and technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-2">
              <Link href="/atin new cv (1).pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 
                rounded-full border-emerald-300 hover:bg-emerald-400"
                >
                  <span>Download cv</span>
                  <MdOutlineFileDownload className="text-uppercase" />
                </Button>
              </Link>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerstyles="flex gap-8"
                  iconstyles="w-9 h-9 flex justify-center items-center text-emerald-400 text-base hover:bg-emerald-300 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none  xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
