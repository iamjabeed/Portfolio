"use client";

import { createContext, useContext, useState } from "react";
import { links } from "@/lib/data";
import type { SectionName } from "@/lib/types";

// type SectionName = (typeof links)[number]["name"];
type activeSectionContextProps = { children: React.ReactNode };
type activeSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<activeSectionContextType | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: activeSectionContextProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  //TODO: we need to keep track of this to disable the observer temporarily when user clicks on a link
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
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
