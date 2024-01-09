import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-2 rounded-full outline-none w-[8rem] h-[3rem] bg-gray-900 text-white transition-all group hover:bg-gray-950"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
        </>
      )}
    </button>
  );
};
export default SubmitBtn;
