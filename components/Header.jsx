"use client";

import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <div className="">
      <header className="py-8 xl:py-10 text-white">
        <div className="container mx-auto flex justify-between items-center ">
          <Link href={"/"}>
            <h1 className="text-semibold text-4xl">
              <div className="xl:px-[5rem]">
                Atindriya <span className="text-emerald-300">.</span>
              </div>
            </h1>
          </Link>
          <div className=" xl:hidden flex justify-end">
            <MobileNav />
          </div>
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href={"/contact"}>
              <Button>Hire me</Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
