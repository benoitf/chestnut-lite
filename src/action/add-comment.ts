import * as GitHub from "@octokit/rest";

/**
 * Add a comment on a specific issue and notify the notifier.
 */
export class AddComment {

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

  public async comment(comment: string): Promise<void> {
    const params: GitHub.IssuesCreateCommentParams = {
      issue_number: this.issueNumber,
      body: comment,
      owner: this.owner,
      repo: this.repo,
    };

    await this.githubPush.issues.createComment(params);
  }
}
