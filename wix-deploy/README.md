# Finish the Wix migration from Codespaces

The Next.js project in the repository root remains the portfolio source.
This folder is a separate Wix deployment project. Its generated `public/`
folder receives the complete static export from the current source.

## Create the Codespace

Open this branch on GitHub, choose **Code → Codespaces → Create codespace**,
and wait for the post-create setup to finish. Setup selects Node 24.22.1 and
installs the two projects' locked dependencies. It does not publish anything.

## Prepare the latest frontend

In the repository-root terminal:

```sh
npm run wix:prepare
```

This builds the Next.js portfolio and copies `out/` into this folder's
generated `public/`. It preserves the Wix connection and any local
environment files. The résumé link uses its existing Wix Media Manager URL.

## Sign in and complete the migration

```sh
cd wix-deploy
npx wix login
```

Open the URL printed by Wix and approve the device code. Then run:

```sh
npx wix finalize-migration
```

The migration command handles its own build and release. Do not run
`wix build` or `wix release` separately for this migration.

The checked-in connection points at the existing migration preview. Let the
CLI resolve and update the parent connection; do not replace these IDs by
hand or create another Wix site. No apps or sample data need to be installed.

After a successful completion, check https://www.burnsgd.com/, the theme
toggle, the interactive examples, the portrait, and the résumé download.
Keep the CLI's updated `wix.config.json` for later work.

## Local files and credentials

Dependencies, compiled frontend files, Wix build output and `.env*` files
are ignored by Git. Sign in inside Codespaces; copying credentials or
Windows `node_modules` from another machine is unnecessary.

The Windows-only native-library and drive-path patches are not used in this
Linux environment.
