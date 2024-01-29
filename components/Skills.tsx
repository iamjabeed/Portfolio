// "use client";
// import React, { lazy, Suspense } from "react";
// import Image from "next/image";
// import { delay, motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
// import SectionHeading from "./SectionHeading";

// import { skillsData } from "@/lib/data";

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 100,
//     scale: 0.5,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       delay: 0.06 * index,
//     },
//   }),
// };

// const Skills = () => {
//   const { ref } = useSectionInView("Skills", 0);
//   return (
//     <section
//       id="skills"
//       ref={ref}
//       className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
//     >
//       <SectionHeading>Skills</SectionHeading>
//       <ul className="grid grid-cols-5 lg:grid-cols-8 2xl:grid-cols-10 gap-4 px-4 lg:px-0">
//         {skillsData.map((skill, index) => (
//           <motion.div
//             className="bg-transparent border border-black/[0.1] rounded-full p-3 dark:border-white/[0.1] w-full h-full flex items-center justify-center "
//             key={index}
//             variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             // viewport={{
//             //   once: true,
//             // }}
//             custom={index}
//             // transition={{
//             //   duration: 1,
//             // }}
//           >
//             <div className="rounded-full overflow-hidden w-full h-full flex justify-center items-center">
//               <Image
//                 src={skill.skillUrl}
//                 alt={`Skill ${skill.skillName}`}
//                 // width={45}
//                 // height={44}
//                 // layout="fixed"
//                 // objectFit="contain"
//                 // className="rounded-full"
//                 loading="lazy"
//               />
//               {/* {skill.skillUrl} */}
//             </div>
//           </motion.div>
//         ))}
//       </ul>
//     </section>
//   );
// };
// export default Skills;

"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-md px-6 py-2 md:px-6 md:py-3  dark:bg-white/10 dark:text-white/80 font-semibold"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
