import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import luxehaven from "@/public/luxehaven.png";
import filmagic from "@/public/filmagic.png";
import vocalize from "@/public/vocalize.png";

import HTML from "@/public/skills/html.png";
import CSS from "@/public/skills/css.png";
import figma from "@/public/skills/figma.png";
import git from "@/public/skills/git.png";
import javascript from "@/public/skills/javascript.png";
import node from "@/public/skills/node.png";
import react from "@/public/skills/react.png";
import redux from "@/public/skills/redux.png";
import sass from "@/public/skills/sass.png";
import expressjs from "@/public/skills/express.png";
import github from "@/public/skills/github.png";
import java from "@/public/skills/java.png";
import mongodb from "@/public/skills/mongodb.png";
import mysql from "@/public/skills/mysql.png";
import nextjs from "@/public/skills/nextjs.png";
import tailwind from "@/public/skills/tailwind.png";
import typescript from "@/public/skills/typescript.png";
import docker from "@/public/skills/docker.png";
import postman from "@/public/skills/postman.png";
import vscode from "@/public/skills/vscode.png";

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

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "LUXEHAVEN",
    description:
      "Developed a groundbreaking e-commerce platform using MERN, ensuring a user-centric, secure, and highly efficient shopping experience",

    tags: ["React", "Express.js", "MongoDB", "Tailwind", "Mongoose", "Redux"],
    imageUrl: luxehaven,
    live: "https://github.com/iamjabeed/LuxeHaven",
    code: "https://github.com/iamjabeed/LuxeHaven",
  },
  {
    title: "The Filmagic",
    description:
      "Created a movie streaming app with real-time access to detailed information on movies, TV shows, cast, related videos, and insider details using TMDB API.",
    tags: ["React", "SCSS", "React Router", "Redux", "TMDB API"],
    imageUrl: filmagic,
    live: "https://filmagic-jabeed.vercel.app/",
    code: "https://github.com/iamjabeed/Filmagic",
  },
  {
    title: "Vocalize",
    description:
      "Created a React app with advanced speech recognition technology, providing users with an interactive and hands-free experience.",
    tags: ["React", "HTML5", "Tailwind", "Framer"],
    imageUrl: vocalize,
    live: "https://vocalize-blush.vercel.app/",
    code: "https://github.com/iamjabeed/Vocalize",
  },
] as const;

export const skillsData = [
  { skillName: "HTML", skillUrl: HTML },
  { skillName: "CSS", skillUrl: CSS },
  { skillName: "Tailwind CSS", skillUrl: tailwind },
  { skillName: "Sass", skillUrl: sass },
  { skillName: "JavaScript", skillUrl: javascript },
  { skillName: "React", skillUrl: react },
  { skillName: "Redux", skillUrl: redux },
  { skillName: "TypeScript", skillUrl: typescript },
  { skillName: "Next.js", skillUrl: nextjs },
  { skillName: "Node.js", skillUrl: node },
  { skillName: "Express.js", skillUrl: expressjs },
  { skillName: "MongoDB", skillUrl: mongodb },
  { skillName: "MySQL", skillUrl: mysql },
  { skillName: "Docker", skillUrl: docker },
  { skillName: "Java", skillUrl: java },
  { skillName: "Git", skillUrl: git },
  { skillName: "GitHub", skillUrl: github },
  { skillName: "VsCode", skillUrl: vscode },
  { skillName: "Figma", skillUrl: figma },
  { skillName: "Postman", skillUrl: postman },
] as const;
