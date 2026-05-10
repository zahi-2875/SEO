import { useEffect } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Blogs } from "@/components/portfolio/Blogs";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Zahira Shaik — SEO Content Writer | Portfolio";
    const meta =
      document.querySelector('meta[name="description"]') ||
      document.head.appendChild(document.createElement("meta"));
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      "Zahira Shaik — SEO Content Writer helping brands rank, engage, and convert through SEO-driven content. Open to freelance work."
    );
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Blogs />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
