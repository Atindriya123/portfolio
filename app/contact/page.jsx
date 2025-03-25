"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  Selectitem,
  SelectValue,
  SelectList,
  SelectTrigger,
  SelectItem,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Description } from "@radix-ui/react-dialog";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    Description: "(+91) 6294687376",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    Description: "atindriyamondal1@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    Description: "Mecheda, Purba Medinipur, West Bengal, India",
  },
];

import { motion } from "framer-motion";
import { SelectLabel } from "@radix-ui/react-select";

function page() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6  xl:m-[72px]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          <div className="xl:h-[54%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-emerald-400">Let's work together</h3>
              <p className="text-white/60">
                Let's Build Something Amazing Together! 🚀 Get in Touch Today.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="Lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="Phone number" placeholder="Phone number" />
              </div>
              <Select className="w-full">
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
              />
              <Button className="max-w-40">Send message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end gap-9 order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-emerald-400 rounded-md flex items-center justify-center ">
                      <div>{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.Description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default page;
