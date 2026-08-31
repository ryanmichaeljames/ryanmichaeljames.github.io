import "./Footer.css";
import { profile } from "../data/content";

const year = new Date().getFullYear();
const BRAND_LINE = "Dataverse ↔ DevOps ↔ AI";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">© {year} Ryan James</p>
          <p className="footer-brand">{BRAND_LINE}</p>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href={profile.links.github} className="link-wipe" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={profile.links.linkedin} className="link-wipe" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={profile.links.twitter} className="link-wipe" target="_blank" rel="noopener noreferrer">
              X
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
