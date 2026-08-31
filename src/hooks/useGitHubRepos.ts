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

/** A repo plus the presentation flag derived from the featured list. */
export interface ProjectRepo extends GitHubRepo {
  featured: boolean;
}

const EXCLUDED = new Set(["ryanmichaeljames.github.io", "ryanmichaeljames"]);

/**
 * Live GitHub fetch. When `featured` is non-empty, only the listed repos are
 * shown, in the given order; otherwise all public non-fork repos are shown
 * sorted by stars, then recency.
 */
export function useGitHubRepos(username: string, featured: readonly string[] = []) {
  const [repos, setRepos] = useState<ProjectRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const featuredKey = featured.join(",");

  useEffect(() => {
    let cancelled = false;

    const rank = new Map(
      featuredKey
        .split(",")
        .filter(Boolean)
        .map((name, index) => [name.toLowerCase(), index] as const)
    );

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?type=public&sort=updated&per_page=100`,
          { headers: { Accept: "application/vnd.github+json" } }
        );

        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

        const data: GitHubRepo[] = await res.json();

        if (cancelled) return;

        const ordered = data
          .filter(
            (r) =>
              !r.fork &&
              !EXCLUDED.has(r.name) &&
              (rank.size === 0 || rank.has(r.name.toLowerCase()))
          )
          .map<ProjectRepo>((r) => ({
            ...r,
            topics: r.topics ?? [],
            featured: rank.has(r.name.toLowerCase()),
          }))
          .sort((a, b) => {
            const aRank = rank.get(a.name.toLowerCase()) ?? Number.MAX_SAFE_INTEGER;
            const bRank = rank.get(b.name.toLowerCase()) ?? Number.MAX_SAFE_INTEGER;
            return (
              aRank - bRank ||
              b.stargazers_count - a.stargazers_count ||
              new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
            );
          });

        setRepos(ordered);
        setLoading(false);
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
  }, [username, featuredKey]);

  return { repos, loading, error };
}
