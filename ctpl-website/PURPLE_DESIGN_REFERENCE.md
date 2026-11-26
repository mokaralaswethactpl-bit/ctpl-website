# CTPL Premium Purple Design - Implementation Notes

Primary #7C3AED, light background #FBF9FF, soft lavender #F1E8FF, uniform deep-plum cards #562677 (hover #632C89), dark title #25143F.

Updated project: kept existing routes, content, image paths, documents, Angular components and individual SCSS stylesheets. The shared color decisions are applied as page-specific overrides at the end of component SCSS files so Angular view encapsulation does not block them.

Effects: sticky translucent glass header, soft glass mega menu, light glass hero ghost button, gentle hover lift, existing scroll reveal directive with reduced-motion fallback, and restrained hero entry. No animation frameworks or large dependencies were added.

Use `npm ci` then `npm run build` and `npm start`. Note: original build compatibility and full visual QA should be checked on the local machine.
