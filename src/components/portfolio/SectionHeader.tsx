interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

export const SectionHeader = ({ eyebrow, title, description }: Props) => (
  <div className="text-center max-w-2xl mx-auto mb-14 reveal">
    <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4 text-glow-cyan">
      // {eyebrow}
    </p>
    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">{title}</h2>
    {description && (
      <p className="text-muted-foreground text-lg">{description}</p>
    )}
  </div>
);
