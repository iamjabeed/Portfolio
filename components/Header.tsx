"use client";

import { easeInOut, motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

import { links } from "@/lib/data";
import { useContext, useState } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="z-[999] md:border-r border-black/20 fixed top-0 left-0 right-0 w-full h-16 sm:top-0 md:bottom-0 md:w-16 md:h-screen dark:border-white/20">
      <nav className="bg-white/50 md:bg-transparent bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] text-gray-800 h-full w-full px-4 py-2 flex items-center justify-center dark:bg-black/50">
        <ul className="w-full flex justify-between md:justify-center flex-row md:flex-col gap-6 md:gap-4  font-bold text-gray-500 h-full transition-all ease-in duration-300">
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center relative md:h-10 w-full transition-all ease-in duration-300"
              key={link.hash}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            >
              <Link
                className={clsx(
                  "group flex w-full items-center justify-center p-1 transition-all ease-in duration-300",
                  {
                    "text-gray-950 dark:text-gray-50":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span className="transition-all hover:scale-105 duration-300 text-2xl font-bold">
                  {link.icon}
                </span>
                <span className="absolute transition-all ease-in duration-300 -top-4 left-14 hidden md:group-hover:block bg-gray-900 py-1 px-2 text-white rounded-md text-sm font-normal dark:bg-gray-50 dark:text-gray-900">
                  {link.name}
                </span>

                {/* {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )} */}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
