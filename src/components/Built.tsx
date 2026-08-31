import "./Built.css";
import { builtLinks } from "../data/content";
import { useReveal, stagger } from "../hooks/useReveal";

export default function Built() {
  const { ref, revealClass } = useReveal<HTMLElement>();

  return (
    <section
      id="built"
      ref={ref}
      className={`section reveal ${revealClass}`}
      aria-labelledby="built-heading"
    >
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal-item" style={stagger(0)}>
            {builtLinks.sectionLabel}
          </p>
          <div className="section-head-row reveal-item" style={stagger(1)}>
            <div>
              <h2 id="built-heading" className="section-heading">
                {builtLinks.sectionLabel}
              </h2>
              <div className="rule-bar" />
            </div>
          </div>
        </div>

        <ul className="built-list" role="list" aria-label="Tools and websites built by Ryan James">
          {builtLinks.items.map((item, i) => (
            <li key={item.url} className="built-item reveal-item" style={stagger(i + 2)}>
              <a
                href={item.url}
                className="built-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.name} (opens in new tab)`}
              >
                <span className="built-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="built-body">
                  <span className="built-name">{item.name}</span>
                  <span className="built-url">{item.url.replace(/^https?:\/\//, "")}</span>
                </span>
                <span className="built-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
