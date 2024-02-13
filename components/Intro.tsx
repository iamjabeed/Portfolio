"use client";

import Image from "next/image";
// import {Bungee Spice} from "next/font/google"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaLinkedin, FaCat, FaGithub, FaInstagram } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import HeroImg from "../public/profile.jpg";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const amPm = hours >= 12 ? "PM" : "AM";

      // Convert to 12-hour format
      hours = hours % 12 || 12;

      const formattedTime = `${hours}:${
        minutes < 10 ? "0" : ""
      }${minutes} ${amPm}`;
      setCurrentTime(formattedTime);
    };
    updateTime();

    //* Update time every minute
    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] "
    >
      <motion.div className="flex items-center justify-center flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          className="py-4 font-mono text-base md:text-lg text-center text-gray-800 dark:text-gray-200 mb-2"
        >
          {currentTime}
        </motion.h2>

        <motion.div className="relative" drag>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              // type: "spring",
              duration: 0.6,
              delay: 0.4,
            }}
          >
            <Image
              src={HeroImg}
              alt="Hero image"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full object-cover shadow-xl pointer-events-none"
            />
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none"></div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-base font-medium !leading-[1.5] sm:text-base lg:text-lg 2xl:text-[22px] w-full sm:w-[60%] mx-auto dark:text-gray-300 dark:font-medium text-left"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span className="font-bold text-4xl leading-10 mr-1">H</span>ey there!{" "}
        <span className="hover:underline"> I&apos;m Jabeed</span> , a multi-
        disciplinary <span className="">full-stack developer</span> based in
        India. I specialize in crafting sleek and responsive websites. with a
        focus on React (Next.js). Let&apos;s turn your ideas into digital
        brilliance!
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.a
            href="#contact"
            className="group bg-gray-900  text-white/80 w-[80vw] sm:w-52 py-3 flex items-center justify-center gap-2 rounded-md outline-none focus:scale-110 active:scale-105 transition duration-300 hover:text-white text-sm xl:text-base uppercase text-center font-semibold dark:bg-[#FFD700] dark:text-black"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Get in touch{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition group-hover:opacity-100" />
          </motion.a>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hidden sm:block"
          drag
        >
          <FaCat className="" />
        </motion.span>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.a
            className="group bg-white w-[80vw] sm:w-52 py-3 flex items-center justify-center gap-2 rounded-md outline-none focus:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 text-sm xl:text-base uppercase text-center font-semibold "
            href="/jabeed.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition group-hover:opacity-100" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-center gap-6 md:hidden mt-4"
        >
          <a
            href="https://www.linkedin.com/in/iamjabeed"
            target="_blank"
            className="bg-transparent w-[2rem] h-[2rem] bg-opacity-80 backdrop-blur-md shadow-2xl rounded-full flex items-center justify-center active:scale-105 transition-all  opacity-80 hover:opacity-100 hover:scale-105 duration-300"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://github.com/iamjabeed"
            target="_blank"
            className="bg-transparent w-[2rem] h-[2rem] bg-opacity-80 backdrop-blur-md shadow-2xl rounded-full flex items-center justify-center active:scale-105 transition-all  opacity-80 hover:opacity-100 hover:scale-105 duration-300"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.instagram.com/iamjabeed_04/"
            target="_blank"
            className="bg-transparent w-[2rem] h-[2rem] bg-opacity-80 backdrop-blur-md shadow-2xl rounded-full flex items-center justify-center active:scale-105 transition-all  opacity-80 hover:opacity-100 hover:scale-105 duration-300"
          >
            <FaInstagram size={22} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
