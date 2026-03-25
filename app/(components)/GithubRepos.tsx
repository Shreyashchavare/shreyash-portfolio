import Link from "next/link";

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  pushed_at: string;
};

export default async function GithubRepos({ username, limit = 6 }: { username: string; limit?: number }) {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=${limit}&sort=updated`, {
    // revalidate every 30 minutes
    next: { revalidate: 1800 }
  });
  if (!res.ok) {
    return (
      <div className="text-sm text-red-400">Failed to load GitHub repositories.</div>
    );
  }
  const repos = (await res.json()) as GithubRepo[];

  if (!Array.isArray(repos) || repos.length === 0) {
    return <div className="text-sm text-white/70">No repositories to display.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map((repo) => (
        <div key={repo.id} className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">
              <Link href={repo.html_url} target="_blank" rel="noreferrer" className="hover:underline">
                {repo.name}
              </Link>
            </h3>
            <span className="text-xs opacity-70">★ {repo.stargazers_count}</span>
          </div>
          {repo.description && (
            <p className="text-sm opacity-80 mt-1">{repo.description}</p>
          )}
          <div className="text-xs opacity-60 mt-2 flex gap-3">
            {repo.language && <span>{repo.language}</span>}
            <span>Updated {new Date(repo.pushed_at).toLocaleDateString()}</span>
            {repo.fork && <span>Fork</span>}
          </div>
        </div>
      ))}
    </div>
  );
}


