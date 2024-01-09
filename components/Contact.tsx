"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmails";

import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

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
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
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
        <SubmitBtn />
      </form>
    </motion.section>
  );
};
export default Contact;
