import "./Built.css";
import { builtLinks } from "../data/content";

export default function Built() {
  return (
    <section id="built" className="section" aria-labelledby="built-heading">
      <div className="container">
        <p id="built-heading" className="section-label">{builtLinks.sectionLabel}</p>
        <ul className="built-list" role="list" aria-label="Tools and websites built by Ryan James">
          {builtLinks.items.map((item) => (
            <li key={item.url} className="built-item">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="built-link">
                <span className="built-name">{item.name}</span>
                <span className="built-url">{item.url.replace(/^https?:\/\//, "")}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
