import "./About.css";
import { profile } from "../data/content";
import { useReveal, stagger } from "../hooks/useReveal";

export default function About() {
  const { ref, revealClass } = useReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`section section--about reveal ${revealClass}`}
      aria-labelledby="about-heading"
    >
      <div className="container">
        <p id="about-heading" className="eyebrow reveal-item" style={stagger(0)}>
          About
        </p>
        <p className="about-bio reveal-item" style={stagger(1)}>
          {profile.bio}
        </p>
      </div>
    </section>
  );
}
