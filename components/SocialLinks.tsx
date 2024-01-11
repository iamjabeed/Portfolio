import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

type Props = {};

const SocialLinks = (props: Props) => {
  return (
    <div className="fixed top-1/2 right-5 transform -translate-y-1/2 hidden md:flex flex-col items-center gap-6 ">
      <a
        href="https://www.linkedin.com/in/iamjabeed"
        target="_blank"
        className="bg-transparent w-[2rem] h-[2rem] bg-opacity-80 backdrop-blur-md shadow-2xl rounded-full flex items-center justify-center active:scale-105 transition-all  opacity-80 hover:opacity-100 hover:scale-105 duration-300"
      >
        <FaLinkedin size={22} />
      </a>

      <a
        href="https://github.com/iamjabeed"
        target="_blank"
        className="bg-transparent w-[2rem] h-[2rem] bg-opacity-80 backdrop-blur-md shadow-2xl rounded-full flex items-center justify-center active:scale-105 transition-all  opacity-80 hover:opacity-100 hover:scale-105 duration-300"
      >
        <FaGithub size={22} />
      </a>
      <a
        href="https://www.instagram.com/iamjabeed_04/"
        target="_blank"
        className="bg-transparent w-[2rem] h-[2rem] bg-opacity-80 backdrop-blur-md shadow-2xl rounded-full flex items-center justify-center active:scale-105 transition-all  opacity-80 hover:opacity-100 hover:scale-105 duration-300"
      >
        <FaInstagram size={22} />
      </a>
    </div>
  );
};

export default SocialLinks;
