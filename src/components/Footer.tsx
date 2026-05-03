import "./Footer.css";
import { profile } from "../data/content";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">© {year} Ryan James</p>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={profile.links.twitter} target="_blank" rel="noopener noreferrer">X</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
