import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/button";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zahira-shaik-1ab213262/",
    icon: "fa-linkedin-in",
    brand: true,
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=zahiraworkemail@gmail.com",
    icon: "fa-envelope",
    brand: false,
  },
];

export const Contact = () => (
  <section id="contact" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4">
      <SectionHeader
        eyebrow="Contact"
        title={
          <>
            Let's <span className="text-gradient-neon">Collaborate</span>
          </>
        }
        description="Open to freelance projects, collaborations, and full-time opportunities."
      />

      <div className="max-w-3xl mx-auto reveal">
        <div className="bg-card-glass border border-border/60 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/20 blur-3xl rounded-full" />

          <div className="relative">
            <p className="text-muted-foreground mb-2">Reach me directly at</p>


            <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="group w-14 h-14 rounded-full bg-metal border border-primary/40 flex items-center justify-center text-primary text-xl hover:border-primary/80 hover:text-primary-glow hover:glow-cyan hover:-translate-y-1 focus:text-primary-glow active:text-primary-glow visited:text-primary transition-all duration-300"
                >
                  <i className={`${s.brand ? "fa-brands" : "fa-solid"} ${s.icon}`} />
                </a>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild variant="neon" size="lg">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=zahiraworkemail@gmail.com" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-paper-plane mr-2" />
                  Send a Message
                </a>
              </Button>
            </div>
          </div>
        </div>

        <footer className="text-center text-muted-foreground text-sm mt-12">
          © {new Date().getFullYear()} Zahira Shaik
        </footer>
      </div>
    </div>
  </section>
);
