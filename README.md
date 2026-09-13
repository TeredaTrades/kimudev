# KimuDev

Marketing site for KimuDev — the build studio behind the Mekridian
family of products (Bejirond, Money Matters Daily, TeredaTrades,
Aman's Travels). Built with [Astro](https://astro.build), deployed to
GitHub Pages.

No domain purchased yet — targeting **kimudev.io**. See
[`DOMAIN_SWAP.md`](./DOMAIN_SWAP.md) for the exact steps to move off
the current `teredatrades.github.io/kimudev/` GitHub Pages URL once
it's bought.

## Development

```sh
npm install
npm run dev       # http://localhost:4321/kimudev/
npm run build     # outputs to ./dist
npm run preview
```

## Structure

- `src/pages/` — one file per route (`/`, `/services/`, `/work/`,
  `/about/`, `/contact/`)
- `src/layouts/BaseLayout.astro` — shared header/footer/nav
- `src/lib/site.ts` — `withBase()` helper (see `DOMAIN_SWAP.md`),
  contact email, and nav links, all in one place
- `src/styles/global.css` — design tokens (color/type) and shared
  utility classes
- `src/components/BrandMark.astro` — the animated mark used in the
  hero

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on
every push to `main`.
