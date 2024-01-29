import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="">
      <div className="my-10 px-4 text-left sm:text-center text-gray-500 w-[80vw] max-w-6xl mx-auto mr-10 sm:mr-auto">
        <small className="mb-2 block text-sm font-semibold">
          &copy; {currentYear} crafted with 💛 by{" "}
          <Link
            href="https://www.linkedin.com/in/iamjabeed/"
            className="hover:cursor-pointer hover:underline text-black dark:text-white"
          >
            Jabeed
          </Link>
          . All rights reserved.
        </small>
        <p className="text-sm ">
          <span className="font-semibold">Embark on a journey:</span> This
          website is a React & Next.js masterpiece (with App Router & Server
          Actions), sprinkled with TypeScript, tailored using Tailwind CSS,
          choreographed with Framer Motion, empowered by React Email & Resend,
          and hosted gracefully on Vercel.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
