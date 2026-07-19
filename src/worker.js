// The Worker: handles /api/menu, serves static files for everything else
import { menu } from "../menu-data.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/menu") {
      return new Response(JSON.stringify(menu), {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=60",
        },
      });
    }

    // Everything else: serve files from /public (the menu page)
    return env.ASSETS.fetch(request);
  },
};
