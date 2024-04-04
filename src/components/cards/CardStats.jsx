import { Card, CardContent } from '../ui/card';
import Link from 'next/link';
import { IconStar, IconGitCommit, IconGitPullRequest, IconBriefcase, IconHelpHexagon } from '@tabler/icons-react';

import { getGithubUserStats } from '@/services/Github';

export default async function CardStats({ t }) {
  const stats = await getGithubUserStats('matiasvallejosdev');

  return (
    <Link href="https://github.com/matiasvallejosdev">
      <Card className="h-auto shadow-none">
        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <IconStar size={24} className="text-brand" />
              <p className="text-base">{t('stars')}:</p>
              <p className="text-base">{stats.totalStars}</p>
            </div>
            {/* total commits 2024 */}
            <div className="flex gap-2 items-center">
              <IconGitCommit size={24} className="text-brand" />
              <p className="text-base">{t('commits')}:</p>
              <p className="text-base">{stats.totalCommits}</p>
            </div>
            {/* total pull request 2024 */}
            <div className="flex gap-2 items-center">
              <IconGitPullRequest size={24} className="text-brand" />
              <p className="text-base">{t('pullrequest')}:</p>
              <p className="text-base">{stats.totalPullRequests}</p>
            </div>
            {/* total issues */}
            <div className="flex gap-2 items-center">
              <IconHelpHexagon size={24} className="text-brand" />
              <p className="text-base">{t('issues')}:</p>
              <p className="text-base">{stats.totalIssues}</p>
            </div>
            {/* total projects */}
            <div className="flex gap-2 items-center">
              <IconBriefcase size={24} className="text-brand" />
              <p className="text-base">{t('projects')}:</p>
              <p className="text-base">{stats.totalProjects}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
