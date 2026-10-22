# GitHub Actions deployment

[Deploy portfolio to Wix](../.github/workflows/deploy-wix.yml) runs whenever a
commit reaches `main`, including a merged pull request. It also supports
**Run workflow** from `main` in GitHub's Actions tab.

## Configure the deployment key

1. Create a dedicated API key in the Wix account that owns burnsgd.com using
   [Wix's API-key setup](https://dev.wix.com/docs/go-headless/authentication/admin/generate-an-api-key).
   Give it access to the production site and the permissions needed to build
   and release the project's private app and hosting. The site and app IDs are
   recorded in `wix.config.json`.
2. In the GitHub repository, open **Settings → Secrets and variables → Actions**.
   Select **New repository secret**, name it `WIX_API_KEY`, and save the key as
   its value. Do not commit the key or generated `.env.local` files.
3. Deploy by merging a change into `main`, or select
   **Actions → Deploy portfolio to Wix → Run workflow → main**.

The workflow authenticates using the API key and pulls the Wix environment on
each fresh runner. It does not need an interactive login or a running Codespace.

## Workflow

The Ubuntu job uses Node 24.22.1 and both projects' lockfiles. It:

1. Installs frontend dependencies and runs ESLint.
2. Runs `npm run wix:prepare` to build the Next.js source, check TypeScript, and
   copy the export into `wix-deploy/public/`.
3. Installs Wix dependencies and authenticates with `wix login --api-key`.
4. Runs `wix env pull` to generate the required build environment.
5. Runs `wix build`, then `wix release --version-type minor`.

A failed step stops subsequent steps. Production runs share one concurrency
group, so releases do not overlap and a new commit does not cancel an active
release. The Wix release comment and GitHub job summary record the commit SHA.

## Troubleshooting

- **Missing key:** Add the `WIX_API_KEY` repository secret, then rerun the workflow.
- **Missing `WIX_CLIENT_ID`:** Confirm **Pull the Wix build environment** passed
  before the Wix build. Login alone does not create `.env.local`.
- **Wix permission error:** Confirm the key belongs to the site's owning account
  and can access the private app and deployment operations.
- **Build failure:** Read the failing step, fix the source or dependencies on a
  branch, and merge the fix.

For a failed run, use **Re-run all jobs** after correcting configuration. Source
or workflow fixes need a new commit on `main` to deploy the updated code.

## References

- [Wix CLI API-key login](https://dev.wix.com/docs/wix-cli/command-reference/global-commands/login)
- [Wix environment pull](https://dev.wix.com/docs/wix-cli/command-reference/project-commands/env-pull)
- [Wix build](https://dev.wix.com/docs/wix-cli/command-reference/project-commands/build)
- [Wix release](https://dev.wix.com/docs/wix-cli/command-reference/project-commands/release)
- [GitHub Actions secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets)
