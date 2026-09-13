// @ts-check
import { defineConfig } from 'astro/config';

// No domain yet — we're going for kimudev.io, not purchased yet — so this
// deploys as a GitHub Pages *project* site at
// https://teredatrades.github.io/kimudev/, which means every internal
// link needs the `/kimudev` prefix. Rather than hardcode that prefix into
// every href, every internal link in this project goes through
// `withBase()` (src/lib/site.ts), which reads `base` below. That makes
// the domain swap, once kimudev.io (or whatever domain) is purchased, a
// two-line change:
//
//   1. site: 'https://kimudev.io'
//   2. base: '/'
//
// ...plus adding a `public/CNAME` file containing the domain (see
// DOMAIN_SWAP.md at the repo root for the full checklist). No template
// files need to change — every link re-resolves automatically.
export default defineConfig({
  site: 'https://teredatrades.github.io',
  base: '/kimudev',
  trailingSlash: 'always',
});
