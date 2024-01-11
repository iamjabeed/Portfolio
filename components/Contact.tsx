"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmails";

import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

import { FaPhone, FaCopy, FaWhatsapp, FaCat } from "react-icons/fa";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0);

  const handleBookCall = () => {
    window.location.href = "tel:+1234567890";
  };

  const handleCopyEmail = () => {
    const email = "jabeedsyedinfo@gmail.com";
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard");
  };

  const handleWhatsappDM = () => {
    window.location.href = "https://wa.me/+916305667376";
  };
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,35rem)] text-left scroll-mt-28"
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

      {/* <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jabeedsyedinfo@gmail.com">
          jabeedsyedinfo@gmail.com
        </a>{" "}
        or through this form.
      </p> */}
      <p className="my-2">Let's talk about working together!</p>

      <div className="flex gap-3 mt-5 cursor-pointer">
        <a
          href="tel:+917893932609"
          className="group bg-gray-900  text-white/80 w-[80vw] sm:w-52 py-3 flex items-center justify-center gap-2 rounded-md outline-none focus:scale-110 active:scale-105 transition duration-300 hover:text-white text-sm xl:text-base uppercase text-center font-semibold dark:bg-[#FFD700] dark:text-black"
          onClick={handleBookCall}
        >
          <FaPhone /> Book a Call
        </a>
        <a
          // href={`mailto:example@example.com`}
          className="group bg-gray-900  text-white/80 w-[80vw] sm:w-52 py-3 flex items-center justify-center gap-2 rounded-md outline-none focus:scale-110 active:scale-105 transition duration-300 hover:text-white text-sm xl:text-base uppercase text-center font-semibold dark:bg-[#FFD700] dark:text-black"
          onClick={handleCopyEmail}
        >
          <FaCopy /> Copy Email
        </a>
        <a
          className="group bg-gray-900  text-white/80 w-[80vw] sm:w-52 py-3 flex items-center justify-center gap-2 rounded-md outline-none focus:scale-110 active:scale-105 transition duration-300 hover:text-white text-sm xl:text-base uppercase text-center font-semibold dark:bg-[#FFD700] dark:text-black"
          href="https://wa.me/+916305667376"
          onClick={handleWhatsappDM}
        >
          <FaWhatsapp /> DM Me
        </a>
      </div>
      <div className="flex items-center justify-center mt-6 hover:scale-110 transition-all duration-500">
        <FaCat className="" />
      </div>
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
            className="h-10 md:h-12 2xl:h-14 px-4 rounded borderBlack dark:bg-[#151313] placeholder-[#eaeaeab9] text-[#fdfdfd] transition-all outline-none w-1/2  focus:border-[#FF2E63]"
            // name="senderEmail"
            type="text"
            required
            maxLength={500}
            placeholder="Your name"
          />
          <input
            className="h-10 md:h-12 2xl:h-14 px-4 rounded borderBlack dark:bg-[#151313] placeholder-[#eaeaeab9] text-[#fdfdfd] transition-all outline-none w-1/2  focus:border-[#FF2E63]"
            name="email"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
        </div>
        <textarea
          className="h-40 my-3 rounded-md borderBlack p-4 dark:bg-[#151313] placeholder-[#eaeaeab9] text-[#fdfdfd] transition-all outline-none focus:border-[#FF2E63]"
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
