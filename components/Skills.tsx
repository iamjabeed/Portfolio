"use client";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { delay, motion } from "framer-motion";
import { FaNode } from "react-icons/fa";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.5,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.06 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0);
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="grid grid-cols-4 lg:grid-cols-7 gap-3 text-gray-800 text-lg">
        {skillsData.map((skill, index) => (
          <motion.div
            className="bg-white/90 border border-black/[0.1] rounded-sm p-3 dark:bg-white/80 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            // transition={{
            //   duration: 1,
            // }}
          >
            <div className="flex justify-center items-center w-full h-full">
              <Image
                src={skill.skillUrl}
                alt={`Skill ${skill.skillName}`}
                // width={45}
                // height={44}
                // layout="fixed"
                // objectFit="contain"
                // className="rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </ul>
    </section>
  );
};
export default Skills;
