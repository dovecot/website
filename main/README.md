# Dovecot Community Website

This is the production-ready SvelteKit implementation of the Dovecot Community Website. It uses Svelte 5 (runes) and Tailwind CSS v4.

## How to Install, Build, Test, and View the Project

Follow these steps to set up and run the Dovecot Community Website locally.

### 🛠️ Prerequisites

Ensure you have **Node.js (v18+)** and **npm** installed on your machine.

### 📥 1. Installation

Install the project dependencies:

```bash
npm install
```

### 💻 2. Running Locally (Dev Mode)

To view the site with hot-reloading enabled during development:

```bash
npm run dev
```

Once started, open **[http://localhost:5173](http://localhost:5173)** in your browser to view the project.

### 🧪 3. Testing & Validation

To test code syntax, run linter checks, and check Svelte/TypeScript static type safety:

```bash
npm run check
```

### 📦 4. Building for Production

To compile and build a production-optimized package bundle:

```bash
npm run build
```

### 🌐 5. Previewing the Production Build

To view and run the built production bundle locally:

```bash
npm run preview
```

Once started, open the printed localhost URL (default: **[http://localhost:4173](http://localhost:4173)**) to view the compiled production site.

---

## News & Updates Management

To avoid bundling Node.js modules (like `fs`, `path`, or `gray-matter`) directly into Svelte components running in the browser, a pre-build compilation script is used.

The script `scripts/parse-markdown.js` runs automatically during development and build steps to aggregate individual markdown content files into browser-safe static JSON feeds (`news.json` and `security.json`).

### News Updates (Releases and Security Alerts)

* **Directory**: `src/lib/data/news/`
* **Method**: Add a new `.md` file in this directory (e.g. `YYYY-MM-DD-title.md`).

#### Schema Properties (Frontmatter)

| Property | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | The header title of the update. |
| `date` | `string` | Release date formatted for sorting and display (e.g., `12 May 2026, 04:41 UTC`). |
| `link` | `string` | External redirection link (e.g. to a mailing list thread). |

Example file content:

```yaml
---
date: 12 May 2026, 04:14 UTC
title: Dovecot v2.4.4 released
link: https://dovecot.org/mailman3/archives/list/dovecot-news@dovecot.org/thread/YW7GVOH3VVLNAYW2C4TEBTGJW52J7F6H/
---
```

---

### Security Advisories (CVEs)

* **Directory**: `src/lib/data/security/`
* **Method**: Add a new `.md` file named after the CVE identifier (e.g. `CVE-YYYY-XXXX.md`).

#### Schema Properties (Frontmatter)

| Property | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | The CVE identifier (e.g., `CVE-2021-33515`). |
| `excerpt` | `string` | A brief summary paragraph of the vulnerability. |
| `link` | `string` | External advisory link. |
| `date` | `string` | Announcement date for sorting and display (e.g., `2026-03-27` or `27 Mar 2026`). |
| `affected` | `string` | Which versions are affected (default: `Versions prior to release fixes`). |
| `fixed` | `string` | How the issue was fixed (default: `Refer to advisory link`). |

Example file content:

```yaml
---
title: CVE-2021-33515
excerpt: SMTP Submission service STARTTLS injection
link: https://dovecot.org/pipermail/dovecot-news/2021-June/000462.html
date: 21 Jun 2021
---
```

---

## Centralized Data Files

Other portions of the website data have been abstracted out of components for easy customization:

### About Page Features

* **JSON Data File**: [src/lib/data/features.json](src/lib/data/features.json)
* **Usage**: Populates the feature blocks on the `/about` page.
* **Schema properties**:
  * `icon`: Material Symbols icon name (e.g. `"rocket_launch"`, `"verified"`)
  * `title`: title of the feature card
  * `desc`: feature description body paragraph

### Operating System Repositories

* **JSON Data File**: [src/lib/data/repositories.json](src/lib/data/repositories.json)
* **Usage**: Dynamic operating system repository guides and setup instructions on the `/download` page.
* **Schema structure**:
  * `distributions`: Array of operating systems:
    * `id`: string identifier (e.g., `"debian"`, `"centos"`)
    * `name`: name of the OS distribution
    * `icon`: Material Symbols icon name (e.g., `"terminal"`)
    * `installCmd`: package installation command block
    * `packages`: array of available package names
    * `isSpecial`: boolean flag for custom candidate releases (such as Release Candidates)
    * `versions`: maps major Dovecot releases (`"2.4"`, `"2.3"`) to *arrays* of OS release entries, each with:
      * `codename`: name of the OS version release
      * `gpgCmd` / `gpgPath`: GPG key download command and save path
      * `sourcesPath` / `sourcesContent`: configuration location and contents for Debian/Ubuntu
      * `repoPath` / `repoContent`: configuration location and contents for RHEL/CentOS
      * `warning`: optional alert notice for legacy package tags
