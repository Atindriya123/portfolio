"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 capitalize">
      {links.map((links, index) => {
        return (
          <Link
            href={links.path}
            key={index}
            className={`${
              links.path === pathname &&
              "text-emerald-300 border-b-2 border-emerald-400 "
            } capitalize font-medium hover:text-emerald-500 transition-all`}
          >
            {links.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
