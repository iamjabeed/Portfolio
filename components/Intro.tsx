"use client";

import Image from "next/image";
// import {Bungee Spice} from "next/font/google"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaCat, FaGithubSquare } from "react-icons/fa";
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
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const amPm = hours >= 12 ? "PM" : "AM";

      // Convert to 12-hour format
      const formattedTime = `${hours}:${
        minutes < 10 ? "0" : ""
      }${minutes} ${amPm}`;
      setCurrentTime(formattedTime);
    };

    // Update time on mount
    updateTime();

    // Update time every minute
    const intervalId = setInterval(updateTime, 60000);

    // Clean up the interval on component unmount
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
          className="py-4 font-mono text-sm md:text-base text-center text-gray-800"
        >
          {currentTime}
        </motion.h2>
        <motion.div
          className="relative"
          drag
          // dragConstraints={{
          //   top: -50,
          //   left: -50,
          //   right: 50,
          //   bottom: 50,
          // }}
        >
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
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full object-cover shadow-xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-base font-medium !leading-[1.5] sm:text-lg lg:text-xl 2xl:text-2xl  w-full sm:w-[60%] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
      >
        Hey there! <span className="hover:underline"> I'm Jabeed</span> , a
        multidisciplinary <span className="">full-stack developer</span> based
        in india. I specialize in crafting sleek and responsive websites. with a
        focus on React (Next.js). Let's turn your ideas into digital brilliance!
        {/* <span className="font-bold">Hello, I'm Jabeed.</span> I'm a{" "}
        <span className="font-bold">full-stack MERN developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>. */}
        {/* <h1 className="text-left leading-tight mt-0 mb-0 font-canopee text-[3rem] lg:text-[4rem]  font-bold">
          I create elevating digital experiences that inspire and connect with
          people through developement and design
        </h1> */}
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.a
            href="#contact"
            className="group bg-gray-900 text-white/80 w-52 py-3 flex items-center justify-center gap-2 rounded-md outline-none focus:scale-110 active:scale-105 transition duration-300 hover:text-white text-sm xl:text-base uppercase text-center font-semibold"
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
          <FaCat />
        </motion.span>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.a
            className="group bg-white w-52 py-3 flex items-center justify-center gap-2 rounded-md outline-none focus:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 text-sm xl:text-base uppercase text-center font-semibold"
            href="/jabeed.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition group-hover:opacity-100" />
          </motion.a>
        </motion.div>

        {/* <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/iamjabeed/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/iamjabeed"
          target="_blank"
        >
          <FaGithubSquare />
        </a> */}
      </motion.div>
    </section>
  );
}
