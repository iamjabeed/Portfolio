import React from "react";
type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-xl lg:text-2xl font-medium uppercase mb-8 text-center tracking-[20px] text-gray-800">
      {children}
    </h2>
  );
}
