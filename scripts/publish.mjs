#!/usr/bin/env node
// One-command publish: commit + push to GitHub, then deploy to Cloudflare.
// Usage: npm run publish -- "commit message"
import { execSync } from "node:child_process";

const message = process.argv.slice(2).join(" ") || "Update menu";

function run(cmd) {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

try {
  run("git add -A");

  const status = execSync("git status --porcelain").toString().trim();
  if (status) {
    run(`git commit -m "${message.replace(/"/g, '\\"')}"`);
    run("git push");
  } else {
    console.log("\nNo file changes to commit — skipping commit/push.");
  }

  run("npm run deploy");

  console.log("\nDone: pushed to GitHub and deployed to Cloudflare.");
} catch (err) {
  console.error("\nPublish failed:", err.message);
  process.exit(1);
}
