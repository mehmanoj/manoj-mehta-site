# Manoj Mehta Website (React + Vite)

This site supports multiple saved content versions so you can keep older resume/site variants in the codebase and publish only the active one selected in `.env`.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Content versioning via `.env`

The active site content is controlled only by `VITE_SITE_VERSION`.

Available versions:

- `v2` → current published version
- `master` → original baseline version

Create or update `.env`:

```bash
VITE_SITE_VERSION=v2
```

Switch to an older version when needed:

```bash
VITE_SITE_VERSION=master
```

The inactive versions remain in `src/data/versions/` for future reuse.

## Auto-deploy on push

A GitHub Actions workflow is included in `.github/workflows/deploy.yml`.

After you push this project to GitHub and enable **GitHub Pages → Build and deployment → Source = GitHub Actions**, every push to `main` will automatically rebuild and deploy the site.

## Custom domain

The `public/CNAME` file is included, so GitHub Pages will keep serving the site from:

- `https://manoj-mehta.com`

Make sure your GoDaddy DNS still points to GitHub Pages.
