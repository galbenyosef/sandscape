# Vendored prettier 3.9.6 (module API)

The pinned renderer this mirror's `readable/`, `src/` and `split-spec.json`
were produced with, vendored INTO THIS MIRROR so the derivation never has to
reach into a sibling mirror's tree.

- version: 3.9.6 (exact; `tools/derive.mjs` and `tools/audit.js` both refuse
  any other version)
- source: the published npm tarball `prettier-3.9.6.tgz`
  (integrity `sha512-OpN0zzVdiaiAhxpuuj5efpIS4sY9j7bY6uR5mnj5yPzGkdkjNKSJeUThPb60Jw29QuAZgA4o+/iB49kFiaBX6g==`)
- files: `index.mjs` + `doc.mjs` + `plugins/*.mjs` (all 13 language plugins)
  + `package.json` + `LICENSE` + `THIRD-PARTY-NOTICES.md`
- `index.mjs` is the MODULE API entry point (never the CLI: the CLI respects
  `.gitignore` and can silently echo its input instead of formatting).
- `package.json` here is a MINIMAL stub carrying `name`/`version`/`license`
  so the `pkg.version === PINNED` check in the loaders works. It is NOT the
  published `package.json` (whose `exports` map would point at files that are
  not vendored here).

The bytes are identical to the published 3.9.6 tarball, so a mirror's
derived layers re-render byte-for-byte.

## Why this is vendored rather than resolved at runtime

The derive/audit tools used to fall back to a path in ANOTHER mirror's
`node_modules/`. That directory is gitignored and uncommitted, so it exists
only on whichever machine happened to install it: a clean checkout, a disk
cleanup or a different machine broke every mirror's derive tools at once, and
the failure looked like a broken tool rather than a missing dependency.

`tools/derive.mjs` and `tools/audit.js` now resolve, in order:
1. `$PRETTIER_MJS` (explicit override),
2. `tools/vendor/prettier/index.mjs` (this vendored copy — the normal case),
3. `node_modules/prettier/index.mjs` (a local `npm install` of the same
   pinned version still works).

If none of those resolves, `tools/derive.mjs` fails with a message naming
every path it tried and the exact command to get the renderer back
(`git checkout -- tools/vendor/prettier`, or
`npm install --no-save prettier@3.9.6`); `tools/audit.js` says the same in
its report, because a skipped re-render check must not read as a pass.

## Provenance

The 17 tarball files here were compared byte-for-byte with the published
`prettier-3.9.6.tgz` (sha512
`OpN0zzVdiaiAhxpuuj5efpIS4sY9j7bY6uR5mnj5yPzGkdkjNKSJeUThPb60Jw29QuAZgA4o+/iB49kFiaBX6g==`).
`package.json` and this file are the mirror's own additions, and are the only
two files here that are not tarball bytes.
