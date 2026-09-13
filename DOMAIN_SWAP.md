# Swapping in a custom domain

This site currently deploys to GitHub Pages as a *project* site:
`https://teredatrades.github.io/kimudev/`. We're going for **kimudev.io**.
Once it's purchased, do this:

1. **DNS** — at your registrar, point `kimudev.io` at GitHub Pages
   (an `A`/`ALIAS` record to GitHub's Pages IPs, or a `CNAME` record to
   `teredatrades.github.io` if using a `www` subdomain — see GitHub's
   docs on "Managing a custom domain for your GitHub Pages site").

2. **`public/CNAME`** — create this file containing exactly:
   ```
   kimudev.io
   ```

3. **`astro.config.mjs`** — change two lines:
   ```js
   site: 'https://kimudev.io',
   base: '/',
   ```

4. **`src/lib/site.ts`** — update `CONTACT_EMAIL` to the real inbox
   once one exists on the new domain.

5. Push to `main`. The GitHub Actions workflow rebuilds and deploys
   automatically. GitHub Pages settings will also need the custom
   domain entered once, under Settings → Pages.

No template files need touching — every internal link in this project
goes through `withBase()` (`src/lib/site.ts`), which reads `base` from
step 3, so the whole site's links flip over automatically.
