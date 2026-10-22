# Travis Burns — hireMe.tsx

A one-page portfolio built with **Next.js, React, TypeScript, and Tailwind CSS 4**. It includes light/dark themes, native section links, a local accessibility-focused form demo, and a filterable project board.

This is a standalone project. It runs on your computer and exports a static website for your own hosting. No environment variables, API keys, database, or ChatGPT account are needed.

## Open in VS Code

1. Unzip the download.
2. Open the `travis-burns-portfolio` folder in VS Code with **File → Open Folder**.
3. Use Node.js **22.13 or newer**. Node 24 is recorded in `.nvmrc` for version managers.
4. Open the integrated terminal and run:

```sh
npm ci
npm run dev
```

Open **http://localhost:3000**. Changes to the source will update the page while the development server is running. Stop it with **Ctrl+C**.

VS Code will recommend the Tailwind CSS, ESLint, and Prettier extensions. Formatting on save is configured; it works after installing the Prettier extension.

## Where to make changes

| File                            | What it controls                                                          |
| ------------------------------- | ------------------------------------------------------------------------- |
| `components/hireMe.tsx`         | Main page copy, sections, navigation, résumé, theme switch, and form demo |
| `components/ProjectBoard.tsx`   | Sample project data, filters, grid/list views, artwork, and code excerpt  |
| `components/portfolioStyles.ts` | Shared Tailwind utility class lists                                       |
| `app/globals.css`               | Tailwind import, palette, fonts, animation token, and base utilities      |
| `app/layout.tsx`                | Browser title, search description, favicon metadata, and document layout  |
| `app/page.tsx`                  | Page entry point                                                          |
| `public/`                       | Files copied into the published site, such as images or your résumé PDF   |
| `next.config.ts`                | Static export and hosting configuration                                   |

Use full Tailwind class names in your source, including conditional styles. The project board contains examples of typed mappings instead of constructing class names from partial strings.

The form is an interactive demonstration: it does not send or store submissions. The project board uses clearly marked sample content.

## Useful commands

```sh
npm run dev           # Develop at http://localhost:3000
npm run typecheck     # Check TypeScript
npm run lint          # Check code, including the no-explicit-any rule
npm run format        # Format source and documentation
npm run format:check  # Check formatting without writing
npm run build         # Generate a deployable static site in out/
npm run preview       # Preview out/ at http://localhost:4173
```

`npm ci` installs the exact versions recorded in `package-lock.json`. Commit the lockfile with your source.

## Put it on GitHub

Create an empty repository on GitHub. Leave the initial README, license, and gitignore options unchecked because the project already contains its README and gitignore.

In the VS Code terminal, run:

```sh
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the example remote with your repository URL. You can also use **Source Control → Initialize Repository → Publish Branch** in VS Code.

The supplied `.gitignore` keeps dependencies, local settings containing secrets, and generated build output out of Git. The ZIP does not contain Git history or a preconfigured remote.

## Build and publish

```sh
npm ci
npm run typecheck
npm run lint
npm run build
npm run preview
```

After you review the built site, publish the **contents of `out/`** to the web root for your domain. Include the `_next` directory and all other generated assets. Uploading only `index.html` will leave the site without its styles and interactive code.

The supplied ZIP includes an `out/` build of this version. Rebuild after making edits; the generated files do not update automatically.

For hosting that connects to a GitHub repository, use:

| Setting                  | Value                                     |
| ------------------------ | ----------------------------------------- |
| Install command          | `npm ci`                                  |
| Build command            | `npm run build`                           |
| Publish/output directory | `out`                                     |
| Node version             | 24, or another supported version >= 22.13 |

Use the host's static-site option. The exported site does not need a running Node server. `npm run preview` is a local review server, not a production hosting command.

This configuration assumes the site is served from the root of a domain, such as `https://your-domain.com/`. For a GitHub Pages **project** site under `/repository-name/`, set Next.js `basePath` to `/repository-name`, update the favicon path in `app/layout.tsx` to include that prefix, and rebuild. A GitHub Pages user site or custom domain at the root uses the default configuration. An empty `public/.nojekyll` file is included so `_next` assets are preserved on Pages.

Pointing your existing domain at a new host or replacing files on your current hosting account is a separate step. This package does not change your current website or DNS.
