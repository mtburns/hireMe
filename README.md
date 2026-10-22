# Travis Burns — hireMe.tsx

Portfolio built with Next.js, React, TypeScript, and Tailwind CSS. Hosted on Wix at
[burnsgd.com](https://www.burnsgd.com/).

## Run locally

Use Node.js **24.22.1** to match GitHub Actions and Codespaces.

```sh
git clone https://github.com/mtburns/hireMe.git
cd hireMe
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Changes update automatically;
stop the development server with **Ctrl+C**. Local frontend development does
not require Wix credentials or environment variables.

In GitHub Codespaces, wait for the dependency setup to finish, then run
`npm run dev` and open the forwarded port 3000.

## Check and format

```sh
npm run typecheck     # Check TypeScript
npm run lint          # Run ESLint
npm run format:check  # Check formatting
npm run format        # Apply formatting
```

## Preview a production build

```sh
npm run build
npm run preview
```

The build exports the site to `out/`. Preview it at
[localhost:4173](http://localhost:4173).

## Deploy to Wix

Merging a pull request into `main` automatically deploys to
[burnsgd.com](https://www.burnsgd.com/). Direct pushes to `main` also deploy;
opening or updating a PR does not.

The workflow installs dependencies, checks lint, builds the portfolio, pulls
Wix's build environment, builds the hosting project, and releases it. Lint or
build failures stop the job before publishing.

Check progress under **Actions → Deploy portfolio to Wix**. To deploy the current
`main` manually, select **Run workflow** and choose `main`.

- [GitHub Actions setup and troubleshooting](wix-deploy/CI-CD.md)
- [Manual deployment from Linux or Codespaces](wix-deploy/README.md)

`npm run wix:prepare` builds the frontend and copies the export into
`wix-deploy/public/`. The `wix-deploy` folder holds Wix's separate deployment
dependencies and connection settings. Generated output and `.env*` files are
ignored by Git.
