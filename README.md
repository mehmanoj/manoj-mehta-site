# Manoj Mehta Website (React + Vite)

This is a React version of the personal website, set up for version-specific resume content and assets.

## Local development

```bash
npm install
npm run dev
```

To preview a specific version, pass `VITE_SITE_VERSION` when you start dev or build:

```bash
VITE_SITE_VERSION=master npm run dev
VITE_SITE_VERSION=v2 npm run dev
VITE_SITE_VERSION=v3 npm run dev
```

## Production build

```bash
VITE_SITE_VERSION=master npm run build
VITE_SITE_VERSION=v2 npm run build
VITE_SITE_VERSION=v3 npm run build
npm run preview
```

The `predev` and `prebuild` scripts copy the matching versioned resume assets from `versioned-assets/<version>/` into `public/` before the site starts or builds.

## Available versions

- `master`
- `v2`
- `v3`

## Custom domain

The `public/CNAME` file is included, so the site can continue serving from `https://manoj-mehta.com`.
