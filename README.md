# Casa Del Gato — Phase 1 MVP

Premium Next.js storefront for curated antique and vintage products using local mock data, with architecture prepared for future eBay API sync.

## Stack
- Next.js 15 + App Router
- TypeScript
- Tailwind CSS
- Local JSON data source

## Run
```bash
npm install
npm run dev
```

## Current Scope
- Premium homepage with featured collections and products
- Product listing grid with client-side search + filters
- Dynamic product detail pages with image gallery, metadata, tags, and related items
- Normalized product schema and mock listing dataset (24 entries)
- Data abstraction via repository interface
- Future-ready `/src/lib/ebay` adapter placeholder with OAuth/API TODOs
- SEO baseline via global metadata + OpenGraph

## Future eBay Sync
When eBay developer access is approved, implement sync logic in:
- `src/lib/ebay/adapter.ts`

UI and pages should not require major refactoring when switching from mock JSON to API-backed data.
