import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient opacity-20 blur-3xl rounded-full animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient opacity-20 blur-3xl rounded-full animate-float" style={{ animationDelay: '-3s' }} />
        
        {/* Noise texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
