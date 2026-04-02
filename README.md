# Manoj Mehta Website (React + Vite)

This is a React version of the personal website, set up for automatic deployment to GitHub Pages with the custom domain `manoj-mehta.com`.

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

## Auto-deploy on push

A GitHub Actions workflow is included in `.github/workflows/deploy.yml`.

After you push this project to GitHub and enable **GitHub Pages → Build and deployment → Source = GitHub Actions**, every push to `main` will automatically rebuild and deploy the site.

## Custom domain

The `public/CNAME` file is included, so GitHub Pages will keep serving the site from:

- `https://manoj-mehta.com`

Make sure your GoDaddy DNS still points to GitHub Pages.
