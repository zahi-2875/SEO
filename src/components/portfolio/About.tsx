import { useState } from "react";

export const About = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Profile image */}
          <div className="md:col-span-2 reveal flex justify-center">
            <div className="relative group">
              {/* Rotating ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/30 animate-spin-slow" />
              <div
                className="absolute -inset-8 rounded-full border border-accent/20 animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "30s" }}
              />
              {/* Glow halo */}
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl group-hover:bg-primary/50 transition-all duration-500" />

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-primary/60 glow-cyan-strong bg-metal">
                {!imageError ? (
                  <img
                    src="/avatar.jpg"
                    alt="Zahira Shaik - SEO Content Writer"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center font-display text-5xl text-primary/60">
                    ZS
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* About content */}
          <div className="md:col-span-3 reveal" style={{ transitionDelay: "0.15s" }}>
            <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4 text-glow-cyan">
              // About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Crafting <span className="text-gradient-neon">words</span> that{" "}
              <span className="text-gradient-neon">rank</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I'm <span className="text-primary font-semibold">Zahira Shaik</span>,
              an SEO content writer passionate about turning search intent into
              storytelling. From keyword-driven blogs to brand-building copy, I
              create content that climbs rankings without losing soul.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently working on Research Content, contributing to literary
              anthologies, and collaborating with brands and creators to shape
              voices that resonate online.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: "Blogs Written", value: "50+" },
                { label: "Editions Published", value: "7" },
                { label: "Years Writing", value: "4+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card-glass border border-border/60 rounded-lg p-4 text-center hover:border-primary/60 hover:glow-cyan transition-all duration-300"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary text-glow-cyan">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
