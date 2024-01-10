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
      className="mb-20 sm:mb-28 w-[min(100%,35rem)] text-center scroll-mt-28"
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
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <div className="flex justify-between items-center gap-2">
          <input
            className="h-12 md:h-12 2xl:h-14 px-4 rounded-md borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all outline-none w-1/2"
            // name="senderEmail"
            type="text"
            required
            maxLength={500}
            placeholder="Your name"
          />
          <input
            className="h-10 md:h-12 2xl:h-14 px-4 rounded-md borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all outline-none w-1/2"
            name="email"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
        </div>
        <textarea
          className="h-40 my-3 rounded-md borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};
export default Contact;
