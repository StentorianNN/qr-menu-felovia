# QR Code Menu — Cloudflare Worker

A menu page + API in one Worker. Free hosting, no cold starts.

## Layout

- `public/index.html` — the menu page customers see
- `menu-data.js`     — THE MENU. Edit this to change items/prices.
- `src/worker.js`    — serves /api/menu as JSON, everything else from /public
- `wrangler.jsonc`   — Cloudflare config (tells it what to deploy)

## Updating the menu — the only command you need

1. Edit `menu-data.js` (change prices, add items, whatever).
2. From this folder, run:

   ```
   npm run publish
   ```

That's it. One command:
- commits every changed file (`git add -A` + `git commit`)
- pushes to GitHub: https://github.com/StentorianNN/qr-menu-felovia
- deploys to Cloudflare: https://qr-menu.yagizgurses16.workers.dev

Give the commit a message if you want (optional, defaults to "Update menu"):

```
npm run publish -- "added tiramisu, raised pizza prices"
```

If `npm run publish` says "No file changes to commit," it means you
haven't saved anything new — check you edited and saved `menu-data.js`.

### Just deploying without committing

Rare, but if you ever want to redeploy without a git commit (e.g. to
retry a failed deploy), run:

```
npm run deploy
```

### First-time machine setup only

If you ever set this up on a new computer, you'll need to log in once:

```
gh auth login --web
gh auth setup-git
wrangler login
npm install
```

After that, `npm run publish` works from that machine too.

## Images

Add "image" to any item in menu-data.js. For real photos, drop files
into public/images/ and use image: "/images/dish.jpg" (resize to
~600px wide first).

## QR code

Generate it from the final URL — ideally a custom domain attached in
Settings -> Domains & Routes, so printed codes never go stale.
