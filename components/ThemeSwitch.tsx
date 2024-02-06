"use client";
import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="z-[999] fixed bottom-8 right-4 bg-transparent w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-md shadow-2xl rounded-full flex items-center justify-center active:scale-105 transition-all  opacity-80 hover:opacity-100 duration-300"
    >
      {theme === "light" ? <BsSun size={22} /> : <BsMoon size={22} />}
    </button>
  );
};
export default ThemeSwitch;
