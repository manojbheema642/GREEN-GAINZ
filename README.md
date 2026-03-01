# Green Gainz Website (GitHub Pages)

Marketing site for **Green Gainz**, built as a static site for simple hosting on GitHub Pages.

## What's included

- Responsive homepage with:
  - Hero and value proposition
  - Services overview
  - 3-step consulting process
  - Client outcome metrics + testimonial
  - FAQ section
  - Contact form that opens email client (`mailto`)

## Run locally

```bash
python3 -m http.server 8000
```

Visit: <http://localhost:8000>

## Deploy on GitHub Pages

1. Push the repo to GitHub.
2. Open repository **Settings → Pages**.
3. Under **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: your default branch (for example `main`)
   - **Folder**: `/ (root)`
4. Save and wait for the Pages URL.

No build step is required because this is plain HTML/CSS/JS.
