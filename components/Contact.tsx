"use client";

import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmails";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a href="mailto:jabeedsyedinfo@gmail.com" className="underline">
          jabeedsyedinfo@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        className="flex flex-col mt-10 "
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          required
          placeholder="Your email"
          name="email"
          className="h-14 px-4 rounded-lg border border-black/40"
        />
        <textarea
          placeholder="Your message"
          required
          name="message"
          className="h-52 my-3 rounded-lg border border-black/40 p-4"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-full outline-none w-[8rem] h-[3rem] bg-gray-900 text-white transition-all group hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
        </button>
      </form>
    </motion.section>
  );
};
export default Contact;
