# Casa Del Gato eBay Portal

This repository contains a starter implementation plan for building a website that mirrors and curates your eBay store listings while still sending buyers to eBay to complete purchase.

## Goals

- Pull your current eBay listings automatically.
- Organize them by categories and custom tags (period, material, room, etc.).
- Display listings on your own site with search/filter.
- Link every item back to the original eBay listing.

## Recommended architecture

1. **Data sync layer**
   - Use the eBay APIs (Browse API + Feed/Inventory where appropriate).
   - Save normalized listing data locally in JSON or a small database.
2. **Curation layer**
   - Add custom metadata fields that eBay does not have (e.g., "Featured", "Victorian", "Under $150").
3. **Frontend portal**
   - Render category pages and filters.
   - Include a clear `Buy on eBay` link for each product.

## eBay integration notes

To sync listings, create eBay developer credentials:

- eBay Developer Program account
- App ID (Client ID)
- Cert ID / Secret
- OAuth token for API calls

Set these as environment variables:

- `EBAY_CLIENT_ID`
- `EBAY_CLIENT_SECRET`

## Quick start for sync script

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python3 scripts/sync_ebay_listings.py --query "casa del gato antiques" --limit 50
```

This writes `data/listings.json` which can be consumed by your website.

## Suggested next build step

- Build a simple frontend (Next.js, Astro, or plain React) that reads `data/listings.json`.
- Add UI filters:
  - Category
  - Price range
  - Shipping type
  - Condition
  - Custom tags

## Compliance / platform rules

- Keep prices and availability synced frequently to avoid stale info.
- Always link back to eBay for checkout.
- Respect eBay API terms and rate limits.
