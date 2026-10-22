# Manual deployment to Wix

Normal updates deploy automatically when changes reach `main`. See
[GitHub Actions setup and troubleshooting](CI-CD.md).

For a manual deployment, use Linux or GitHub Codespaces with Node.js 24.22.1.
The repository root contains the Next.js source; this folder contains the Wix
hosting project and its finalized connection in `wix.config.json`.

## Install and prepare

Run these commands from the repository root, stopping if any step fails:

```sh
npm ci
npm ci --prefix wix-deploy --include=dev --include=optional
npm run lint
npm run wix:prepare
```

The prepare command builds the current frontend and copies `out/` into this
folder's generated `public/` directory.

## Sign in

```sh
cd wix-deploy
npx wix login
```

Approve the device code using the URL printed by Wix. After login completes,
pull the build environment:

```sh
npx wix env pull
```

## Build and publish

Run the release only after the build succeeds:

```sh
npx wix build && npx wix release --version-type minor
```

Check [burnsgd.com](https://www.burnsgd.com/) after the release completes.
Dependencies, generated frontend files, build output, and `.env*` files are
ignored by Git. Keep the existing site/app connection in `wix.config.json`.
