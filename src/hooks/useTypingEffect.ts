import { useEffect, useState } from "react";

export const useTypingEffect = (
  phrases: string[],
  typeSpeed = 80,
  deleteSpeed = 40,
  pause = 1600
) => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setPhraseIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.substring(0, t.length - 1) : current.substring(0, t.length + 1)
          );
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pause]);

  return text;
};
