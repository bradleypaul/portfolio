# Portfolio

Personal site for Paul Bradley — Next.js, TypeScript, CSS Modules.

All copy lives in `src/data/content.ts`.

## Local

```bash
npm install
npm run dev
```

Opens at http://localhost:3000

```bash
npm run build
npx serve out
```

The production build is a static export in `out/`.

## Deploy to GitHub Pages

1. Create a public repo named `portfolio` under `bradleypaul`.
2. In the repo settings, set Pages to **GitHub Actions**.
3. Push `main`. The workflow in `.github/workflows/deploy.yml` builds with `basePath: /portfolio` and publishes `out/`.

The live URL will be `https://bradleypaul.github.io/portfolio/`.

For a Vercel deploy, leave `GITHUB_PAGES` unset so there is no base path.

## Content

Edit `src/data/content.ts` for name, roles, projects, stack, about, and contact links.
