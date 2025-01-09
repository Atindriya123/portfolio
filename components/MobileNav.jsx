"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet className="flex justify-center items-center ">
      <SheetTrigger className="r">
        <RiMenu3Fill className="text-[32px]  text-emerald-400" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="text-white ">
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link className="pb-[-20px]" href="/">
              Atindriya<span className="text-emerald-300">.</span>
            </Link>
          </div>
          <nav className="flex flex-col items-center text-xl capitalize gap-4">
            {links.map((link, index) => (
              <Link
                className={`${
                  links.path === pathname &&
                  "text-emerald-300 border-b-2 border-emerald-400 "
                } capitalize font-medium hover:text-emerald-500 transition-all`}
                href={link.path}
                key={index}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetTitle>
      </SheetContent>
    </Sheet>
  );
}
