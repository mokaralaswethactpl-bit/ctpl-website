# CTPL Premium Hybrid — Angular Starter

A responsive Angular standalone-components starter based on the November 2026 CTPL site inventory and the uploaded CTPL visual blueprints. Designed for internal review and subsequent production implementation.

## Run locally

Install Node.js 20.19+ or 22.12+, then:

```bash
npm install
npm start
```

Open http://localhost:4200. Build for deployment with `npm run build`.

## What's included

- Responsive sticky navigation with full primary categories and drop-down links.
- Homepage sections: hero, experience, all six product families, six software services, safety feature, stakeholder pathways, enquiry CTA, footer.
- Internal routes for 35+ CTPL content destinations, with editable summaries and external official-source links.
- Balanced animations: hero image slow pan, 600 ms scroll-once content reveal, 250 ms card hover, 200 ms dropdown transitions; reduced-motion support.
- Images extracted from the user's CTPL PDF: product images and vehicle hero. Original images and rights should be verified before going live.
- Source inventory in `src/app/content.ts` — single source of truth for editing titles, descriptions and linked references.

## Crucial: content completeness

**This is not a verified page-for-page migration of all content and files on containe.in.** It is a navigable starter that preserves the breadth of identified sections and references the original destination for the full information. Publication requires a content audit and manual transfer of missing detailed specifications, investor tables/PDF files, portal destinations, downloadable approvals, support processes, phone/address data and working forms. Do not claim the Angular starter contains every sentence or publication of the original site.

During source review, several CTPL URLs (`/motoreye-model-efrt/`, `/limits-model-epi/`, `/customer-centre/`) displayed unrelated shopping/e-commerce pages. **Do not clone or auto-link sensitive information from those pages until the site owner confirms their integrity.** The matching routes are marked as requiring source verification.

### Content edit guide

- `src/app/content.ts`: products, services, about, investor, dealer/customer records; every entry includes the original website URL.
- `src/app/home.component.ts`: homepage text, CTA, ordering and sections.
- `src/styles.css`: colours (`--navy`, `--teal`, etc.), typography, spacing and motion.
- `src/assets/images/`: hero and approved product illustrations; replace with finalized official brand assets and a licensed/authed background video if desired.
- `src/app/detail.component.ts`: shared detail page. Extend this for real PDF downloads, subpage tables and specific application flows.

### Production checklist

1. Owner approves exact information architecture and page-by-page migration matrix.
2. Export authenticated source text/images/docs from WordPress (or approved original content repository), including date/version metadata.
3. Audit each investor/dealer download and preserve legal document naming, dates, and direct PDF links.
4. Validate contact methods, dealer service integrations, recharge/validity requests and secure backend APIs (not mocked forms).
5. Run accessibility and keyboard checks, mobile QA, SEO metadata, performance testing, and Angular production build.

## Verification status

The package contents were generated locally. This environment did not have access to the npm registry, so `npm install` / `ng build` could not be run here. Please run them locally and report any errors for fixes.
