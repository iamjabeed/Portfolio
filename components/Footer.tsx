import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/20">
      <div className="my-10 px-4 text-center text-gray-500 w-[80vw] max-w-6xl mx-auto">
        <small className="mb-2 block text-sm font-semibold">
          &copy; {currentYear} made with 💛 by{" "}
          <Link
            href="https://www.linkedin.com/in/iamjabeed/"
            className="hover:cursor-pointer hover:underline"
          >
            Jabeed
          </Link>
          . All rights reserved.
        </small>
        <p className="text-sm ">
          <span className="font-semibold">About this website:</span> built with
          React & Next.js (App Router & Server Actions), TypeScript, Tailwind
          CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
