import About from "@/components/About";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
// import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
// import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      {/* <SocialLinks /> */}
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      {/* <Experience /> */}
      <Contact />
    </main>
  );
}
