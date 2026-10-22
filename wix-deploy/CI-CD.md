# Automatic deployment to Wix

`.github/workflows/deploy-wix.yml` publishes the portfolio whenever a commit
reaches `main`, including a merged pull request. It also supports **Run workflow**
from `main` in GitHub's Actions tab. Opening or updating a PR does not deploy it.

## One-time setup

1. Create a dedicated API key in the Wix account that owns burnsgd.com using
   [Wix's API-key setup](https://dev.wix.com/docs/go-headless/authentication/admin/generate-an-api-key).
   Give it access to the production site and the permissions needed to build
   and release the project's private app and hosting. The site ID is
   `c0e2f0bd-2d10-4300-af65-881a636d4510`; the app ID is in `wix.config.json`.
   Use the finalized production connection rather than the migration preview.
2. In this GitHub repository, open **Settings → Secrets and variables → Actions**.
   Select **New repository secret**, name it `WIX_API_KEY`, and paste the key
   into the secret value. Save it there, rather than in code or a chat message.
3. Merge the workflow PR into `main`. That merge starts the first deployment.
   Follow **Actions → Deploy portfolio to Wix** to see its progress.
   If the workflow was merged before adding the key, add it and choose
   **Re-run all jobs** on the failed run.

No account ID, interactive browser login, Codespace session, or committed
`.env.local` is needed. The CLI reads `wix.config.json` and uses the API key to
authenticate and pull its build environment. The optional GitHub `production`
environment can hold the secret instead of the repository. Leave required
environment reviewers disabled to keep deployments fully automatic.

## Each deployment

The Ubuntu job uses Node 24.22.1 and both projects' lockfiles. It runs ESLint
and `npm run wix:prepare`, which builds the current Next.js source, checks its
TypeScript, and copies the export into `wix-deploy/public/`. It authenticates
with `wix login --api-key`, runs `wix build`, then publishes using
`wix release --version-type minor`. The release comment records the commit SHA.

A failed step stops the job before subsequent steps run. Production runs share
one concurrency group, so releases do not overlap and new commits do not cancel
a release already in progress. Manual runs on branches other than `main` skip
the deployment job.

The key is supplied only to the credential check and Wix login steps. It is
not a `NEXT_PUBLIC_` variable and is not passed to the portfolio build. Only
npm's package cache is cached, not the CLI login or generated environment files.
The workflow does not install apps or seed sample data.

## Migration versus future updates

`wix finalize-migration` was the one-time command that switched the original
site to this frontend. Routine deployments now use the normal build/release
commands; the completed migration does not need to be finalized again.

## Troubleshooting

- **Missing key:** Add the `WIX_API_KEY` Actions secret, then rerun the workflow.
- **Wix permission error:** Confirm the key belongs to the site's owning account
  and can access the private app and deployment operations. Adjust that
  dedicated key's permissions in Wix.
- **Build failure:** Read the failing step, fix the source or dependencies on a
  branch, and merge the fix.

## References

- [Wix CLI API-key login](https://dev.wix.com/docs/wix-cli/command-reference/global-commands/login)
- [Wix build](https://dev.wix.com/docs/wix-cli/command-reference/project-commands/build)
- [Wix release](https://dev.wix.com/docs/wix-cli/command-reference/project-commands/release)
- [GitHub Actions secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets)
