# QR Code Menu — Cloudflare Worker

A menu page + API in one Worker. Free hosting, no cold starts.

## Layout

- `public/index.html` — the menu page customers see
- `menu-data.js`     — THE MENU. Edit this to change items/prices.
- `src/worker.js`    — serves /api/menu as JSON, everything else from /public
- `wrangler.jsonc`   — Cloudflare config (tells it what to deploy)

## Deploy via Git (recommended)

Push this to your GitHub repo. In the Cloudflare project:
Settings -> Build -> set Deploy command to: npx wrangler deploy
Then every push to main deploys to production automatically.

Also enable your public URL once:
Settings -> Domains & Routes -> workers.dev -> Enable

## Deploy via CLI (alternative)

npm i -g wrangler
wrangler deploy

## Updating the menu

Edit menu-data.js on GitHub -> auto-redeploys in ~30s.

## Images

Add "image" to any item in menu-data.js. For real photos, drop files
into public/images/ and use image: "/images/dish.jpg" (resize to
~600px wide first).

## QR code

Generate it from the final URL — ideally a custom domain attached in
Settings -> Domains & Routes, so printed codes never go stale.
