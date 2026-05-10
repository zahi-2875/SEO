import { SectionHeader } from "./SectionHeader";

const certs = [
  { title: "SEO Learning", issuer: "Hubspot Academy", icon: "fa-magnifying-glass-chart" },
  { title: "Amazon SEO for Beginners", issuer: "Udemy", icon: "fa-cart-shopping" },
  { title: "SEO", issuer: "Great Learning", icon: "fa-chart-line" },
  { title: "Technical SEO Essentials", issuer: "Semrush Academy", icon: "fa-certificate" },
];

const extras = [
  { title: "TEDx Host 2023", icon: "fa-microphone-lines" },
  { title: "NSS Volunteer", icon: "fa-people-group" },
  { title: "College News Reader", icon: "fa-newspaper" },
];

export const Certifications = () => (
  <section id="certifications" className="relative py-24 md:py-32">
    <div className="absolute inset-0 cyber-grid opacity-30" />
    <div className="container mx-auto px-4 relative">
      <SectionHeader
        eyebrow="Credentials"
        title={
          <>
            Certifications & <span className="text-gradient-neon">Beyond</span>
          </>
        }
      />

      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Certs */}
        <div className="reveal">
          <h3 className="font-display text-xl text-primary mb-6 uppercase tracking-wider text-glow-cyan">
            <i className="fa-solid fa-certificate mr-2" /> Certifications
          </h3>
          <div className="space-y-4">
            {certs.map((c, i) => (
              <div
                key={i}
                className="bg-card-glass border border-border/60 rounded-xl p-5 flex items-center gap-4 hover:border-primary/60 hover:glow-cyan transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-metal border border-primary/40 flex items-center justify-center text-primary text-xl">
                  <i className={`fa-solid ${c.icon}`} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{c.title}</h4>
                  <p className="text-sm text-muted-foreground">{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular */}
        <div className="reveal" style={{ transitionDelay: "0.15s" }}>
          <h3 className="font-display text-xl text-primary mb-6 uppercase tracking-wider text-glow-cyan">
            <i className="fa-solid fa-star mr-2" /> Extracurricular
          </h3>
          <div className="space-y-4">
            {extras.map((e, i) => (
              <div
                key={i}
                className="group bg-card-glass border border-border/60 rounded-xl p-5 flex items-center gap-4 hover:border-accent/60 hover:glow-orange transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-metal border border-accent/40 flex items-center justify-center text-accent-glow text-glow-orange text-xl group-hover:text-accent-glow focus:text-accent-glow active:text-accent-glow transition-all">
                  <i className={`fa-solid ${e.icon}`} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{e.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
