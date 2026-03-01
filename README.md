# Green Gainz Website

Static website for **Green Gainz**, designed to deploy directly on **GitHub Pages**.

## Features

- Single-page marketing site
- Responsive layout with mobile navigation
- Services, process, packages, FAQ, and contact sections
- Simple lead form via `mailto:`
- SEO-friendly metadata + basic JSON-LD

## Run locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy on GitHub Pages

1. Push to GitHub.
2. Go to **Settings → Pages**.
3. Choose:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/ (root)`
4. Save.

## Business content setup checklist

Before going live, update:

- `hello@greengainz.co` to your real inbox (if needed)
- The Calendly URL in the contact section
- Package details and copy to match actual offers
- `schema.org` URL in `index.html` to your live domain
