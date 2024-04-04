async function getGithubUserStats(username) {
  const apiUrl = `https://api.github.com/users/${username}`;
  const reposUrl = `${apiUrl}/repos`;
  const eventsUrl = `${apiUrl}/events`;

  // Get all repositories to calculate total stars and issues
  const reposResponse = await fetch(reposUrl);
  const repos = await reposResponse.json();
  if (reposResponse.status !== 200) {
    return {
      totalStars: 0,
      totalCommits: 0,
      totalPullRequests: 0,
      totalIssues: 0,
      totalProjects: 0, // Adding total projects count
    };
  }

  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  let totalIssues = 0;
  for (const repo of repos) {
    const issuesResponse = await fetch(`${repo.url}/issues?state=all`);
    const issues = await issuesResponse.json();
    totalIssues += issues.length;
  }

  // Get user events to calculate total commits and pull requests
  const eventsResponse = await fetch(eventsUrl);
  const events = await eventsResponse.json();
  const currentYear = new Date().getFullYear();
  let totalCommits = 0;
  let totalPullRequests = 0;

  for (const event of events) {
    if (event.type === 'PushEvent' && new Date(event.created_at).getFullYear() === currentYear) {
      totalCommits += event.payload.commits.length;
    }
    if (event.type === 'PullRequestEvent') {
      totalPullRequests++;
    }
  }

  return {
    totalStars,
    totalCommits,
    totalPullRequests,
    totalIssues,
    totalProjects: repos.length, // Total number of projects is the length of the repos array
  };
}

async function getRepoStars(username, repoName) {
  const url = `https://api.github.com/repos/${username}/${repoName}`;
  const response = await fetch(url);
  const repoData = await response.json();

  // Return the stargazers_count, which is the total number of stars for the repository
  return repoData.stargazers_count;
}

export { getGithubUserStats, getRepoStars };
