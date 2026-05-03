import "./Header.css";
import { profile } from "../data/content";

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header-inner">
          <a href="#top" className="header-logo" aria-label="Ryan James — home">
            rj
          </a>
          <nav className="header-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#writing">Writing</a>
            <a href="#resume" className="hide-mobile">Resume</a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
