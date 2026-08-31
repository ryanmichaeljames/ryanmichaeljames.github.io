import "./Resume.css";
import { resume } from "../data/content";
import { useReveal, stagger } from "../hooks/useReveal";

function isCurrent(period: string) {
  return /present/i.test(period);
}

export default function Resume() {
  const { ref, revealClass } = useReveal<HTMLElement>();

  return (
    <section
      id="resume"
      ref={ref}
      className={`section reveal ${revealClass}`}
      aria-labelledby="resume-heading"
    >
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal-item" style={stagger(0)}>
            Resume
          </p>
          <div className="section-head-row reveal-item" style={stagger(1)}>
            <div>
              <h2 id="resume-heading" className="section-heading">
                Resume
              </h2>
              <div className="rule-bar" />
            </div>
          </div>
        </div>

        <div className="resume-grid">
          <div className="reveal-item" style={stagger(2)}>
            <h3 id="capabilities-heading" className="eyebrow eyebrow--plain">
              Capabilities
            </h3>
            <ul className="resume-chips" role="list" aria-labelledby="capabilities-heading">
              {resume.specializations.map((skill) => (
                <li key={skill} className="chip">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 id="experience-heading" className="eyebrow eyebrow--plain reveal-item" style={stagger(3)}>
              Experience
            </h3>
            <ol className="resume-timeline" aria-labelledby="experience-heading">
              {resume.experience.map((item, i) => (
                <li
                  key={`${item.company}-${item.role}`}
                  className="resume-entry reveal-item"
                  style={stagger(i)}
                >
                  <span
                    className={`resume-node${isCurrent(item.period) ? " resume-node--current" : ""}`}
                    aria-hidden="true"
                  />
                  <p className="resume-role">{item.role}</p>
                  <p className="resume-company">{item.company}</p>
                  <p className="resume-period">
                    {item.period} · {item.location}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
