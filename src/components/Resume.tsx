import "./Resume.css";
import { resume } from "../data/content";

export default function Resume() {
  return (
    <section id="resume" className="section" aria-labelledby="resume-heading">
      <div className="container">
        <p className="section-label" aria-hidden="true">Resume</p>
        <div className="resume-grid">
          <div>
            <h2 className="resume-block-title">Specialisations</h2>
            <ul className="resume-tags" role="list" aria-label="Technical specialisations">
              {resume.specializations.map((skill) => (
                <li key={skill} className="resume-tag">{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="resume-block-title">Experience</h2>
            <ul className="resume-experience" role="list">
              {resume.experience.map((item) => (
                <li key={`${item.company}-${item.role}`} className="resume-experience-item">
                  <div className="resume-experience-header">
                    <span className="resume-experience-role">{item.role}</span>
                    <span className="resume-experience-company">{item.company}</span>
                  </div>
                  <p className="resume-experience-meta">{item.period} · {item.location}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
