import { SectionHeader } from "./SectionHeader";

const items = [
  {
    title: "Jarvis Reach — Blog Writer",
    description: "SEO-driven blog writing for a growing digital brand.",
    link: "https://jarvisreach.io/blog/",
    icon: "fa-pen-nib",
  },
  {
    title: "College Magazine",
    description: "Published in 4 editions — articles, features, and creative pieces.",
    link: "https://www.vvitguntur.com/vov-magazine",
    icon: "fa-book-open",
  },
  {
    title: "We Are with You Charitable Trust",
    description: "Website copy & social media content for nonprofit outreach.",
    link: null,
    icon: "fa-hand-holding-heart",
  },
  {
    title: "Personal Blog Writer",
    description: "Personal long-form blog covering lifestyle, growth & insights.",
    link: "https://bronzectalks0328.blogspot.com/",
    icon: "fa-blog",
  },
  {
    title: "Wattpad — The Accidental Match",
    description: "Original fiction story published on Wattpad.",
    link: "https://www.wattpad.com/story/366349384-the-accidental-match",
    icon: "fa-feather-pointed",
  },
  {
    title: "Poetry Anthology — The Aurora Embrace Vol 3",
    description: "Featured poet in a published literary anthology.",
    link: "https://www.amazon.in/AURORAS-EMBRACE-VOL-3-AUTHORS-BHARAT/dp/8119990064",
    icon: "fa-scroll",
  },
];

export const Experience = () => (
  <section id="experience" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4">
      <SectionHeader
        eyebrow="Experience"
        title={
          <>
            Where I've <span className="text-gradient-neon">Written</span>
          </>
        }
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {items.map((it, i) => {
          const content = (
            <>
              <div className="shrink-0 w-14 h-14 rounded-lg bg-metal border border-primary/40 flex items-center justify-center text-primary text-2xl group-hover:text-accent-glow group-hover:border-accent/60 group-hover:text-glow-orange focus:text-accent-glow active:text-accent-glow visited:text-primary transition-all">
                <i className={`fa-solid ${it.icon}`} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold mb-1 group-hover:text-accent-glow transition-colors">
                  {it.title}
                </h3>
                <p className="text-muted-foreground text-sm">{it.description}</p>
                {it.link && (
                  <span className="inline-flex items-center gap-1 mt-3 text-xs uppercase tracking-wider text-primary">
                    View <i className="fa-solid fa-arrow-up-right-from-square" />
                  </span>
                )}
              </div>
            </>
          );

          const className = "group reveal bg-card-glass border border-border/60 rounded-xl p-6 flex gap-5 hover:border-accent/60 hover:-translate-y-1 hover:glow-orange transition-all duration-500";
          const style = { transitionDelay: `${i * 0.05}s` };

          if (it.link) {
            return (
              <a
                key={i}
                href={it.link}
                target="_blank"
                rel="noreferrer"
                className={className}
                style={style}
              >
                {content}
              </a>
            );
          }

          return (
            <div
              key={i}
              className={className}
              style={style}
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
