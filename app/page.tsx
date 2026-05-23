import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { AIAutomation } from "@/components/sections/AIAutomation";
import { Projects } from "@/components/sections/Projects";
import { Articles } from "@/components/sections/Articles";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* 1. Hero — above the fold, loads instantly */}
        <Hero />

        {/* Subtle section divider */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>

        {/* 2. About — humanizes the candidate */}
        <About />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>

        {/* 3. Experience — career narrative */}
        <Experience />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>

        {/* 4. Skills — technical depth signal */}
        <Skills />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>

        {/* 5. AI + Automation — differentiator section */}
        <AIAutomation />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>

        {/* 6. Projects — proof of work */}
        <Projects />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>

        {/* 7. Articles — thought leadership */}
        <Articles />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>

        {/* 8. Contact — conversion goal */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
