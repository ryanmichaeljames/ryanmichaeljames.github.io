import "./Hero.css";
import { profile } from "../data/content";
import { stagger } from "../hooks/useReveal";

const links = [
  {
    label: "GitHub",
    href: profile.links.github,
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: profile.links.twitter,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-name">
      <div className="hero-bloom" aria-hidden="true" />
      <div className="container hero-inner">
        <p className="hero-eyebrow">
          <span className="hero-eyebrow-text">
            {profile.title} — {profile.location}
          </span>
          <span className="hero-caret" aria-hidden="true" />
        </p>

        <h1 id="hero-name" className="hero-name">
          {profile.name}
        </h1>

        <div className="hero-rule" aria-hidden="true" />

        <p className="hero-tagline">{profile.tagline}</p>

        <ul className="hero-links" role="list" aria-label="Social and professional links">
          {links.map((link, i) => (
            <li key={link.label} style={stagger(i)}>
              <a
                href={link.href}
                className="hero-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} (opens in new tab)`}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
