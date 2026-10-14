// serve.mjs — static file server for the SANDSCAPE mirror (boot test / local
// play / serve probe). The origin is a Vercel SPA: `/play` (and every
// extension-less route) is a rewrite onto the built spa.html shell, which the
// mirror carries as index.html at the repo root — so this server serves the
// capture exactly as recorded and rewrites extension-less unknown paths onto
// index.html (the SPA behaviour the capture pinned), exactly like the
// README's `npx serve -s .` recipe. Asset-like paths (with a file extension)
// that are not in the capture are an honest 404, so capture gaps show up in a
// network-log review instead of silently rendering the SPA. Adapted from the
// fleet precedent (aetherfall / kals-valley / clawd-rpg tools/serve.mjs).
//
// usage: node tools/serve.mjs [port]   (default 4325)
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const port = Number(process.argv[2] || 4325);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".wasm": "application/wasm",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".mp3": "audio/mpeg",
  ".ogg": "audio/ogg",
  ".wav": "audio/wav",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".bin": "application/octet-stream",
  ".gz": "application/gzip",
  ".glb": "model/gltf-binary",
  ".webmanifest": "application/manifest+json",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
};

const server = http.createServer((req, res) => {
  let urlPath = "/";
  try {
    urlPath = decodeURIComponent(new URL(req.url ?? "/", "http://localhost").pathname);
  } catch {
    /* malformed request target (e.g. "//"): fall back to the root */
  }
  let rel = urlPath.replace(/^\/+/, "");
  let abs = path.join(proj, rel);
  if (!path.resolve(abs).startsWith(path.resolve(proj))) {
    res.writeHead(403).end("forbidden");
    return;
  }
  if (fs.existsSync(abs) && fs.statSync(abs).isDirectory()) abs = path.join(abs, "index.html");
  if (!fs.existsSync(abs) || !fs.statSync(abs).isFile()) {
    // Vercel SPA rewrite: extension-less routes answer the entry document
    // (the capture pinned that behaviour for /play); asset paths 404 honestly.
    if (!path.extname(rel)) abs = path.join(proj, "index.html");
    else {
      res.writeHead(404, { "content-type": "text/plain" }).end(`404 ${rel}`);
      console.log(`404 ${urlPath}`);
      return;
    }
  }
  res.writeHead(200, { "content-type": TYPES[path.extname(abs).toLowerCase()] || "application/octet-stream" });
  fs.createReadStream(abs).pipe(res);
});

server.listen(port, "127.0.0.1", () => console.log(`serving ${proj} at http://127.0.0.1:${port}/`));
