import "./Projects.css";
import { useGitHubRepos } from "../hooks/useGitHubRepos";

export default function Projects() {
  const { repos, loading, error } = useGitHubRepos("ryanmichaeljames");

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <p id="projects-heading" className="section-label">Projects</p>

        {loading && (
          <ul className="projects-grid projects-grid--loading" aria-label="Loading repositories" role="list">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i} className="project-card project-card--skeleton">
                <div className="skeleton skeleton--title" />
                <div className="skeleton skeleton--line" />
                <div className="skeleton skeleton--line skeleton--short" />
                <div className="skeleton skeleton--tag" />
              </li>
            ))}
          </ul>
        )}

        {error && (
          <p className="projects-error" role="alert">
            Could not load repositories. <a href="https://github.com/ryanmichaeljames?tab=repositories" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>
          </p>
        )}

        {!loading && !error && (
          <ul className="projects-grid" role="list">
            {repos.map((repo) => (
              <li key={repo.id} className="project-card">
                <div className="project-name">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${repo.name} — view on GitHub (opens in new tab)`}
                  >
                    {repo.name}
                  </a>
                </div>
                {repo.description && (
                  <p className="project-description">{repo.description}</p>
                )}
                <div className="project-footer">
                  {repo.language && (
                    <span className="project-lang" aria-label={`Language: ${repo.language}`}>
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="project-stars" aria-label={`${repo.stargazers_count} stars`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {repo.stargazers_count}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
