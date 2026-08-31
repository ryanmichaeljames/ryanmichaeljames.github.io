import "./Projects.css";
import { useGitHubRepos, type ProjectRepo } from "../hooks/useGitHubRepos";
import { useReveal, stagger } from "../hooks/useReveal";
import { featuredRepos, profile } from "../data/content";

const GITHUB_REPOS_URL = `${profile.links.github}?tab=repositories`;

/** Linguist colours for the languages that actually appear on this account. */
const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178C6",
  JavaScript: "#f1e05a",
  PowerShell: "#012456",
  "C#": "#178600",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  Bicep: "#519aba",
  HCL: "#844FBA",
  Dockerfile: "#384d54",
  Vue: "#41b883",
  Svelte: "#ff3e00",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Ruby: "#701516",
  "C++": "#f34b7d",
  C: "#555555",
  PHP: "#4F5D95",
  "Jupyter Notebook": "#DA5B0B",
};

const FALLBACK_DOT = "#8b8b91";

/** Very dark dots need a hairline ring to stay visible on --surface. */
function needsRing(hex: string): boolean {
  const value = Number.parseInt(hex.slice(1), 16);
  if (Number.isNaN(value)) return false;
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.16;
}

function ProjectCard({ repo, index }: { repo: ProjectRepo; index: number }) {
  const dot = (repo.language && LANGUAGE_COLORS[repo.language]) || FALLBACK_DOT;
  const hasMeta = Boolean(repo.language) || repo.stargazers_count > 0;

  return (
    <li
      className={`project-card reveal-item${repo.featured ? " project-card--featured" : ""}`}
      style={stagger(index)}
    >
      {repo.featured && (
        <p className="project-flag">
          <span className="project-flag-dot" aria-hidden="true" />
          Featured
        </p>
      )}

      <h3 className="project-name">
        <a
          href={repo.html_url}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${repo.name} — view on GitHub (opens in new tab)`}
        >
          {repo.name}
          <span className="project-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </h3>

      {repo.description && <p className="project-description">{repo.description}</p>}

      <div className="project-foot">
        {hasMeta && (
          <div className="project-meta">
            {repo.language && (
              <span className="project-lang">
                <span
                  className={`project-dot${needsRing(dot) ? " project-dot--ringed" : ""}`}
                  style={{ background: dot }}
                  aria-hidden="true"
                />
                {repo.language}
              </span>
            )}
            {repo.stargazers_count > 0 && (
              <span className="project-stars" aria-label={`${repo.stargazers_count} stars`}>
                <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 1l2 4.3 4.7.6-3.4 3.3.8 4.7L8 11.6 3.9 13.9l.8-4.7L1.3 5.9 6 5.3z" />
                </svg>
                {repo.stargazers_count}
              </span>
            )}
          </div>
        )}

        {repo.topics.length > 0 && (
          <ul className="project-topics" role="list">
            {repo.topics.slice(0, 4).map((topic) => (
              <li key={topic} className="chip chip--sm">
                {topic}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default function Projects() {
  const { repos, loading, error } = useGitHubRepos("ryanmichaeljames", featuredRepos);
  const { ref: headRef, revealClass: headRevealClass } = useReveal<HTMLDivElement>();
  const { ref: gridRef, revealClass: gridRevealClass } = useReveal<HTMLUListElement>();

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <div ref={headRef} className={`section-head reveal ${headRevealClass}`}>
          <p className="eyebrow reveal-item" style={stagger(0)}>
            Projects
          </p>
          <div className="section-head-row reveal-item" style={stagger(1)}>
            <div>
              <h2 id="projects-heading" className="section-heading">
                Projects
              </h2>
              <div className="rule-bar" />
            </div>
            <span className="section-note">Live from GitHub</span>
          </div>
        </div>

        {loading && (
          <ul className="projects-grid" aria-label="Loading repositories" aria-busy="true" role="list">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i} className="project-card project-card--skeleton">
                <div className="skeleton skeleton--title" />
                <div className="skeleton skeleton--line" />
                <div className="skeleton skeleton--line skeleton--short" />
                <div className="skeleton skeleton--chips" />
              </li>
            ))}
          </ul>
        )}

        {!loading && error && (
          <p className="projects-notice" role="alert">
            <span className="projects-notice-label">Error</span>
            Could not load repositories from the GitHub API.{" "}
            <a href={GITHUB_REPOS_URL} className="link-wipe" target="_blank" rel="noopener noreferrer">
              View them on GitHub ↗
            </a>
          </p>
        )}

        {!loading && !error && repos.length === 0 && (
          <p className="projects-notice">
            <span className="projects-notice-label">Empty</span>
            No public repositories to show right now.{" "}
            <a href={GITHUB_REPOS_URL} className="link-wipe" target="_blank" rel="noopener noreferrer">
              View on GitHub ↗
            </a>
          </p>
        )}

        {!loading && !error && repos.length > 0 && (
          <ul ref={gridRef} className={`projects-grid reveal ${gridRevealClass}`} role="list">
            {repos.map((repo, i) => (
              <ProjectCard key={repo.id} repo={repo} index={i} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
