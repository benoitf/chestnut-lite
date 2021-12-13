import * as GitHub from "@octokit/rest";

/**
 * Add a label on a specific issue and notify the notifier.
 */
export class AddLabel {

  private githubPush: GitHub;
  private owner: string;
  private repo: string;
  private issueNumber: number;

  constructor(githubPush: GitHub, owner: string, repo: string, issueNumber: number) {
    this.githubPush = githubPush;
    this.owner = owner;
    this.repo = repo;
    this.issueNumber = issueNumber;
  }

  public async add(labels: string[], link: string): Promise<void> {
    const params: GitHub.IssuesAddLabelsParams = {
      issue_number: this.issueNumber,
      labels,
      owner: this.owner,
      repo: this.repo,
    };

    await this.githubPush.issues.addLabels(params);
    console.info("Added the label **" + labels + "** on issue " + this.issueNumber + ":" + link);
  }
}
