# Changes

Newest first.

## 2026-11-17: Provven resume

`public/Resume.pdf` is printed by Provven, from the resume-wallet repo (`npm run resume:sam`). Same words as the one-page file it replaced: Pace Drivers and Provven, Riffster, the three skill groups, and the same background. The QR opens blahablast.io. There are no proof marks. Nothing on the page is a verified credential.

The file is not a Provven record. It is not shown on the Provven site. The head of the page is the name, with no Provven wordmark. blahablast.io is the public page.

`resume/resume.html` is no longer the print source. Do not regenerate the PDF from it.

## 2026-11-17: resume

`public/Resume.pdf` is a new one-page file. The print source is `resume/resume.html`. It follows the portfolio: Pace Drivers and Provven, Riffster, ShardSwap under Flux Point, the same three skill groups, and the same background. The street address, phone number and Italian line are gone, because this file is public and the site does not show them.

Dates for the older jobs are the ones from the previous resume. Pace Drivers says Present, with no start month, because none was on file. Flux Point Studios and MRI Software still say Present.

Regenerate with Chrome, from the project folder:

`chrome --headless --disable-gpu --no-pdf-header-footer --print-to-pdf=public/Resume.pdf resume/resume.html`

## 2026-11-17: Pace Drivers

About now says Sam is a software architect at Pace Drivers, and that Provven is built for them. The co-founder, lead developer and architect line stays. Pace Drivers is the first row under Shipped software at, as Software architect.

## 2026-11-17: domain is blahablast.io

The Vercel deploy is live at `https://blahablast-v4.vercel.app`. DNS stays on Netlify's nameservers. Removing the domain from the Netlify site deleted the address records, so `blahablast.io` has no A record and `www` does not resolve. The zone is still there. Next is to add the domain in Vercel and put the records Vercel shows into that Netlify zone. Vercel's A address is per project.

## 2026-11-17: Provven role

The Provven line now reads "Co-founder, lead developer and architect." The About paragraph says the same, and that he designed it.

## 2026-11-17: motion

The layout and the quiet type are unchanged. Movement was added on top.

- Hero: the name climbs in one letter at a time. The grid lights up green around the mouse, and a soft green cloud trails after it. The lines between the three cards glow near the mouse.
- A strip of tool names slides sideways under the hero (`tool-ticker.tsx`).
- Header: a green line fills as the page is scrolled. Nav links grow an underline, and the Resume button fills green.
- Project pictures open out from the middle and pull back from a zoom as they scroll in. They lean toward the mouse, up to 5 degrees, with a light under it (`media-frame.tsx`).
- About: the bio lights up word by word as it is scrolled.
- Contact: the email turns green left to right on hover.
- Blocks that scroll in now sharpen from a blur as well as rising.

How it works: `pointer-area.tsx` is the only new JavaScript. It writes the mouse position to CSS variables and the stylesheet does the rest. Everything tied to scrolling is CSS scroll-driven animation. Firefox got that in version 159 (October 2026); an older browser shows the page still.

Checked in the browser at desktop and phone width: no sideways scroll, every block ends fully visible at the bottom of the page, and all of it switches off for a visitor who asked for less movement. Hover effects were checked with simulated mouse events, not a real mouse.

Known gaps:

- The last links in Contact have no scroll reveal, because the page ends before it could finish on a short window.
- The three bio paragraphs light up at the same time, each at its own pace, not strictly one after another.

## 2026-11-17: languages removed

The Background list no longer has an English and Italian row.

## 2026-11-17: Flutter is a practice, not one app

The intro and the Flutter card were describing Riffster. Flutter is now "applications in Flutter" and "application development in Dart, for mobile and desktop." The Flutter tool list is iOS, Android and Windows. C++ and real-time audio stay on the Riffster project, which already says bass and guitar.

## 2026-11-17: quieter type

The layout is unchanged. The type was doing too much.

- Archivo is gone. Headlines use Geist, the same face as the body, at weight 500.
- Headlines are no longer uppercase, stretched, or sized to fill the column. The name is `text-5xl` / `text-7xl`. Section titles are `text-3xl` / `text-4xl`. Project names are `text-4xl` / `text-5xl`.
- Body copy dropped from `text-xl` and `text-2xl` to `text-lg`.
- The small labels keep the mono face, with less letter-spacing.

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
- Pushed to `github.com/blueOctorok/blahablast-v4`. Not deployed yet. See `PROJECT_ROADMAP.md`.
