import { useTypingEffect } from "@/hooks/useTypingEffect";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const typed = useTypingEffect([
    "SEO Content Writer",
    "Open to Freelance Work",
    "Research Writer",
    "Strategist",
  ]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Animated background */}
      <div className="absolute inset-0 cyber-grid opacity-60" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-float-slow" />
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] animate-float-slow"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-6 animate-fade-in text-glow-cyan">
            // Welcome to my portfolio
          </p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in-up">
            <span className="text-gradient-neon">ZAHIRA SHAIK</span>
          </h1>

          <div
            className="h-10 sm:h-12 mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="font-display text-xl sm:text-2xl md:text-3xl text-primary typing-caret">
              {typed}
            </span>
          </div>

          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Helping brands{" "}
            <span className="text-primary font-semibold">rank</span>,{" "}
            <span className="text-primary font-semibold">engage</span>, and{" "}
            <span className="text-primary font-semibold">convert</span> through
            SEO-driven content.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button asChild variant="neon" size="xl">
              <a href="#blogs">
                <i className="fa-solid fa-rocket mr-2" />
                Explore Portfolio
              </a>
            </Button>
            <Button asChild variant="outlineNeon" size="xl">
              <a href="#contact">
                <i className="fa-solid fa-paper-plane mr-2" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary text-2xl animate-float"
        aria-label="Scroll down"
      >
        <i className="fa-solid fa-chevron-down" />
      </a>
    </section>
  );
};
