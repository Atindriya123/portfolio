"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Atindriya123" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/www.linkedin.com/in/atindriya-mondal-9ba8042b7",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/your-profile" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/your-profile" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div
      className={`flex gap-6 p-4 text-emerald-500 text-base hover:text-emerald-300 transition-all duration-500 ${containerStyles}`}
    >
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
