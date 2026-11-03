# Dependency security maintenance — 2026-11-03

- Upgrade Next.js and its ESLint configuration from 14.1 to 15.5.28, keeping React 18. Dynamic dashboard pages now await route parameters as required by Next.js 15.
- Update backend packages, including bcrypt 6, mysql2 and Sequelize. Override uuid to the patched CommonJS-compatible 11 series; smoke-check password hashing and Sequelize UUID defaults without connecting to a database.
- Use patched Sharp and PostCSS consistently, including nested Next.js dependencies. Remove unused upload-related packages rather than retain vulnerable, unused dependency trees.
- Remove the checked-in backend node_modules from Git tracking; dependencies are reproduced from package-lock.json. The old files remain recoverable in Git history.

## Verification and remaining limitations

The Next.js production build and TypeScript checks are run before pushing. The backend has only a placeholder `npm test` command, not a real test suite; dependency and API smoke checks provide scoped validation. No production database was accessed.

The 233 originally reported GitHub alerts no longer match the new dependency versions. The current npm advisory database also flags tooling dependencies on `minimatch` below 11.0.1 (GHSA-g3hv-75wg-m249, moderate), newer glob cancellation behavior (GHSA-3g3m-2fjr-6pw4, moderate), and `deepmerge` 4.2.0–4.3.1 (GHSA-gcqx-w48m-w2h4, low; no patched release available). These require upstream-compatible tooling upgrades and remain visible; no scanner configuration or alert dismissal is used to suppress them.

Existing frontend ESLint warnings about hook dependencies and markup are not changed as part of dependency maintenance.
