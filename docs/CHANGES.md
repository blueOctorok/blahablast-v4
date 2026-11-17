# Changes

Newest first.

## 2026-11-17: v4, a full rebuild

The Vite + React 18 + JavaScript + Tailwind v3 site (v3) was removed and replaced. The old code is still at github.com/blueOctorok/blahablast-v3.

### Stack

- Next.js 16.4.6 (App Router), React 19, TypeScript, Tailwind CSS 4.3.3.
- Tailwind runs as a Turbopack loader (`@tailwindcss/turbopack` in `next.config.ts`), the same setup as `riffster-site`. There is no PostCSS config and no `tailwind.config.js`; colors and fonts are in `src/app/globals.css` under `@theme`.
- The whole page is prerendered as static HTML. The Riffster clip is the only client component.

### Content

- Projects are now Provven (flagship), Riffster, and ShardSwap (client work). EtherGuard and Viper were removed.
- The selfie, the skill percentage bars, the Site Details modal, the project modals and the hamburger menu were removed.
- The contact form was replaced by an email link. The form only worked because Netlify processed it.
- About lists companies without dates, because the resume was the only source and it may be out of date.
- All wording and links are in `src/content/profile.ts` and `src/content/projects.ts`.

### Look

- Near-black background, one green accent (`--color-signal`), Archivo for headlines, Geist for text, Geist Mono for labels.
- The name in the hero and the email in Contact are sized in `cqw` (percent of their column's width), so they fill the column at every window size.
- Blocks fade up as they scroll into view with CSS only (`animation-timeline: view()` in the `reveal` utility). Browsers without it, and visitors who ask for reduced motion, see the content in place.

### Checked

- `npm run build` and `npm run lint` pass. `npx tsc --noEmit` passes.
- No sideways scrolling at 320px, 390px and 1440px wide.

### Known gaps

- `shard-swap.xyz` no longer resolves (checked 2026-11-17), so ShardSwap has no link.
- `public/Resume.pdf` is the v3 file. It lists Flux Point Studios and MRI Software as current and includes a street address and phone number.
- The Provven stack tags (Next.js, TypeScript, Tailwind CSS, Supabase, Midnight, Compact) come from a June 2026 copy of the Provven repo.
- provven.com says "designed for zero-knowledge selective disclosure". This site says Provven "uses zero-knowledge proofs", on Sam's word that the proofs are live.
- Committed locally, but not pushed to GitHub or deployed. See `PROJECT_ROADMAP.md`.
