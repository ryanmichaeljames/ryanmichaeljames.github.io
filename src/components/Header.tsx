import "./Header.css";
import { profile } from "../data/content";

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header-inner">
          <a href="#top" className="header-logo" aria-label="Ryan James — home">
            ryanjames.dev
            <span className="header-cursor" aria-hidden="true" />
          </a>
          <nav className="header-nav" aria-label="Main navigation">
            <a href="#about" className="link-wipe">About</a>
            <a href="#projects" className="link-wipe">Projects</a>
            <a href="#built" className="link-wipe hide-mobile">Built</a>
            <a href="#resume" className="link-wipe hide-mobile">Resume</a>
            <a
              href={profile.links.github}
              className="link-wipe"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </nav>
        </div>
      </div>
      <div className="header-progress" aria-hidden="true" />
    </header>
  );
}
