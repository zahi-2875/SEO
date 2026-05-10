import { SectionHeader } from "./SectionHeader";

const blogs = [
  {
    image: "/blog1.png",
    title: "Top 16 Entrepreneurial Skills",
    description:
      "A deep dive into the top 16 essential skills every entrepreneur needs to succeed in today's fast-paced business world.",
    link: "https://jarvisreach.io/blog/top-entrepreneurial-skills/",
    tag: "Business",
  },
  {
    image: "/blog2.png",
    title: "Deploying Applications Without Using Google Cloud Computing",
    description:
      "Explore alternative strategies and platforms for deploying your applications without relying on Google Cloud.",
    link: "https://jarvisreach.io/blog/deploy-without-google-cloud-computing/",
    tag: "Tech",
  },
  {
    image: "/blog3.png",
    title: "Interview Blog",
    description:
      "An insightful interview with Mahadev Vasireddy, exploring his journey, challenges, and successes.",
    link: "https://bronzectalks0328.blogspot.com/2023/10/interview-with-mahadev-vasireddy.html",
    tag: "Interview",
  },
];

export const Blogs = () => {
  return (
    <section id="blogs" className="relative py-24 md:py-32">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="container mx-auto px-4 relative">
        <SectionHeader
          eyebrow=""
          title={
            <>
              Featured <span className="text-gradient-neon">Writings</span>
            </>
          }
          description="A selection of SEO-driven blog posts crafted to rank, engage, and convert."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <article
              key={i}
              className="group reveal bg-card-glass border border-border/60 rounded-2xl overflow-hidden hover:border-primary/60 hover:-translate-y-2 transition-all duration-500 hover:glow-cyan"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-52 overflow-hidden bg-metal-shine animate-shine">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-wider bg-background/80 backdrop-blur border border-primary/40 text-primary rounded-full">
                  {blog.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 line-clamp-3">
                  {blog.description}
                </p>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider group/link"
                >
                  Read More
                  <i className="fa-solid fa-arrow-right transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
