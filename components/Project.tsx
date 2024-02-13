"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  live,
  code,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.65, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.65, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      transition={{
        duration: 0.3,
        ease: easeInOut,
      }}
      className="mb-12"
    >
      <div className="group mb-4 sm:mb-4 last:mb-0">
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition-all duration-500 sm:group-even:pl-8 dark:bg-[#121212] dark:hover:bg-white/10 dark:text-white mx-2">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-sm dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition-all duration-700
        group-hover:scale-[1.01]
        group-hover:-translate-x-1
        group-hover:translate-y-1
        group-hover:-rotate-1

        group-even:group-hover:translate-x-1
        group-even:group-hover:translate-y-1
        group-even:group-hover:rotate-1

        group-even:right-[initial] group-even:-left-40 "
          />
        </section>
      </div>
      <div className="flex mb-2 justify-end gap-6 mx-2">
        <a
          href={code}
          target="_blank"
          className="group bg-gray-900  text-white/80 w-1/2 sm:w-1/3 py-2 flex items-center justify-center gap-2 rounded-md outline-none focus:scale-110 active:scale-105 transition duration-300 hover:text-white text-sm xl:text-base uppercase text-center font-semibold dark:bg-[#FFD700] dark:text-black"
        >
          GitHub
          <FaGithub
            size={26}
            className="opacity-70 transition group-hover:opacity-100"
          />
        </a>
        <a
          href={live}
          target="_blank"
          className="group bg-white  w-1/2 sm:w-1/3 py-2 flex items-center justify-center gap-2 rounded-md outline-none focus:scale-110 active:scale-105 transition cursor-pointer borderBlack  dark:bg-white/10 text-sm xl:text-base uppercase text-center font-semibold "
        >
          Live
          <MdArrowOutward
            size={26}
            className="opacity-70 group-hover:-translate-y-1 transition group-hover:opacity-100"
          />
        </a>
      </div>
    </motion.div>
  );
}
