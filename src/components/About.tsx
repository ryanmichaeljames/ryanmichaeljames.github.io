import "./About.css";
import { profile } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <p id="about-heading" className="section-label">About</p>
        <div className="about-content">
          <p>{profile.bio}</p>
        </div>
      </div>
    </section>
  );
}
