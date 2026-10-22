# Accessibility

This portfolio targets WCAG 2.2 Level AA. This is an implementation target, not a claim of independently audited conformance.

## Implemented

- Semantic header, named navigation, main content, sections, and footer.
- One page with native fragment links and focusable destination headings.
- A keyboard-visible skip link and high-contrast focus outlines.
- Native details and summary elements for disclosures.
- Smooth scrolling only when the visitor has no reduced-motion preference. Reduced motion disables smooth scrolling and transitions.
- System color-scheme detection, a labelled theme control, and optional local persistence of that preference.
- Visible form labels, required-field instructions, field-linked errors, an error announcement, focus to the first invalid field, and an announced success state.
- A local demonstration form that does not transmit or persist entered information.
- Responsive layout, keyboard-accessible code overflow, and forced-colors styles.

## Verification of the first version

- TypeScript type checking and production build passed.
- axe-core 4.14.0 checks for WCAG 2 A/AA, WCAG 2.1 A/AA, WCAG 2.2 AA, and best practices reported zero violations in light and dark themes.
- The automated contrast checks that needed manual review concerned decorative arrow and theme glyphs. Those use the same contrasting colors as their associated controls.
- A separate rendered-text contrast check found no failures, with minimum observed ratios of 5.00:1 in light mode and 7.25:1 in dark mode, including displayed validation messages.
- Checked that fragment targets exist, IDs are unique, and fragment navigation moves focus to the destination heading.
- Checked keyboard activation of disclosures, empty and invalid form submissions, first-error focus, success feedback, and reset.
- Checked the layout at 320px, 375px, 768px, and desktop viewport widths without document-level horizontal overflow.

## Project board update

- Added a decorative location icon with visible location text retained.
- Project filters and layout choices use native buttons, named groups, and `aria-pressed` state; the result count is announced in a persistent status region.
- Project artwork is decorative. Cards remain a semantic list of headings and descriptions.
- Entry and hover motion run only with `prefers-reduced-motion: no-preference`.
- Checked filtering, restoration of all four items, and grid/list state; keyboard Enter and Space activate the controls without losing focus.
- axe-core reported zero violations in both themes at desktop width, and at 320px, 375px, and 768px iframe widths. No document-level horizontal overflow at those widths. The only contrast items needing manual review were the existing decorative navigation arrows, which inherit the colors of their associated links.
- TypeScript checking and production build passed for the update.

## Tailwind migration and résumé hierarchy

- Replaced component CSS selectors with Tailwind utilities, including responsive layouts, state variants, focus outlines, forced-colors support, and motion-safe variants.
- Defined the existing paired light/dark palette, font stacks, and entry animation with Tailwind theme tokens. Shared class lists and the existing class-merging helper keep reused styles consistent.
- Kept system-theme detection and the explicit theme switch. Both themes retain the original palette.
- Added the résumé eyebrow comment and semantic h4 role/degree headings under the h3 organization/education headings. YP details and the institution/year are indented 20px.
- TypeScript and production build passed. Keyboard filtering and list layout remained functional; the first empty form field retained aria-invalid and error feedback.
- axe-core reported zero violations in both desktop themes (46 passing rules), plus checks at 320px, 375px, and 768px iframe widths. No document-level horizontal overflow. The settled audits only needed manual contrast review for existing decorative navigation arrows, which inherit their link colors.

## Standalone project export

- Packaged as standard Next.js with static export enabled; no Sites runtime is required.
- Installed the standalone dependency set from the public npm registry and generated a portable npm lockfile.
- Standalone TypeScript generation/checking, ESLint (including no explicit any), formatting checks, and production export passed.
- Inspected the generated static site in the browser. Confirmed theme switching, keyboard filtering, grid/list state, empty form validation, and first-error focus.
- The broader accessibility checks above were performed on the hosted version before export. Full manual screen-reader and device coverage remain pending.

## Further review

Complete manual screen-reader testing, device and browser coverage, text-spacing overrides, and a device-level reduced-motion check before making a formal conformance claim. Recheck after changing content, controls, colors, or motion.
