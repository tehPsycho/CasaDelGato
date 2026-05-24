# CasaDelGato

A simple static storefront built with **HTML, CSS, and JavaScript** and ready for GitHub Pages.

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In **Settings → Pages**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: your default branch (or `gh-pages`), folder `/ (root)`
3. Your site will load at:
   - `https://tehpsycho.github.io/CasaDelGato/`

Because assets are referenced with relative paths (`./styles.css`, `./app.js`), the site works when served from the project subpath.


## Live eBay Listings Integration

The `shop.html` page now loads listings from `data/listings.json` first, and automatically falls back to built-in sample data if that file is missing.

### Refresh listing data from eBay

1. Set credentials in your shell (do not commit these):
   - `EBAY_CLIENT_ID`
   - `EBAY_CLIENT_SECRET`
2. Run:

```bash
python scripts/sync_ebay_listings.py --query "casadelgato antiques" --limit 50
```

This writes `data/listings.json`, which the storefront reads at runtime.
