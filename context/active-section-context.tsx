"use client";

import { createContext, useContext, useState } from "react";
import { links } from "@/lib/data";

type sectionName = (typeof links)[number]["name"];
type activeSectionContextProps = { children: React.ReactNode };
type activeSectionContextType = {
  activeSection: sectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<sectionName>>;
};

export const ActiveSectionContext =
  createContext<activeSectionContextType | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: activeSectionContextProps) => {
  const [activeSection, setActiveSection] = useState<sectionName>("Home");
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};
export default ActiveSectionContextProvider;

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContextProvider"
    );
  }
  return context;
}
