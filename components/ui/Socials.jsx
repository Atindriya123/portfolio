"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaInstagram />, path: "" },
  { icon: <FaFacebook />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className="flex gap-6 p-4 text-emerald-500 text-base hover:text-emerald-300  hover:transition-all duration-500">
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
