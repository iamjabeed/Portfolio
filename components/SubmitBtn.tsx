import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group bg-gray-900 text-white/80 w-full py-3 flex items-center justify-center gap-2 rounded-md outline-none focus:scale-110 active:scale-105 transition duration-300 hover:text-white text-sm xl:text-base uppercase text-center font-semibold dark:bg-white dark:text-black disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-80 transition-all group-hover:translate-x-1 group-hover:opacity-100 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
};
export default SubmitBtn;

{
  /* <motion.div
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
</motion.div> */
}
