import { useState, useEffect } from "react";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
  topics: string[];
}

const EXCLUDED = new Set(["ryanmichaeljames", "ryanmichaeljames.github.io"]);

export function useGitHubRepos(username: string) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?type=public&sort=updated&per_page=100`,
          { headers: { Accept: "application/vnd.github+json" } }
        );

        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

        const data: GitHubRepo[] = await res.json();

        if (!cancelled) {
          const filtered = data
            .filter((r) => !r.fork && !EXCLUDED.has(r.name))
            .sort(
              (a, b) =>
                b.stargazers_count - a.stargazers_count ||
                new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
            );

          setRepos(filtered);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load repos");
          setLoading(false);
        }
      }
    }

    fetchRepos();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return { repos, loading, error };
}
