import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Articles } from "@/components/sections/Articles";
import { Contact } from "@/components/sections/Contact";

const Divider = () => (
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent" />
  </div>
);

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        <Divider />

        {/* About — default bg */}
        <About />

        <Divider />

        {/* Experience — slightly elevated surface */}
        <div className="bg-[#0d0e18]">
          <Experience />
        </div>

        <Divider />

        {/* Skills — default bg */}
        <Skills />

        <Divider />

        {/* Projects — elevated surface */}
        <div className="bg-[#0d0e18]">
          <Projects />
        </div>

        <Divider />

        {/* Articles — default bg */}
        <Articles />

        <Divider />

        {/* Contact — elevated with subtle indigo tint */}
        <div className="bg-[#0b0c17]">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
