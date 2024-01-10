import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import luxehaven from "@/public/luxehaven.png";
import filmagic from "@/public/filmagic.png";
import vocalize from "@/public/vocalize.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "LUXEHAVEN",
    description:
      "Developed a groundbreaking e-commerce platform using MERN, ensuring a user-centric, secure, and highly efficient shopping experience",

    tags: ["React", "Express.js", "MongoDB", "Tailwind", "Mongoose", "Redux"],
    imageUrl: luxehaven,
  },
  {
    title: "The Filmagic",
    description:
      "Created a movie streaming app with real-time access to detailed information on movies, TV shows, cast, related videos, and insider details using TMDB API.",
    tags: ["React", "SCSS", "React Router", "Redux", "TMDB API"],
    imageUrl: filmagic,
  },
  {
    title: "Vocalize",
    description:
      "Created a React app with advanced speech recognition technology, providing users with an interactive and hands-free experience.",
    tags: ["React", "HTML5", "Tailwind", "Framer"],
    imageUrl: vocalize,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Taiwind CSS",
  "SCSS/SASS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "Git",
  "Python",
  "Java",
  "Framer Motion",
] as const;
