# Portfolio roadmap

A new chat can start here.

## What it is

Sam Blaha's portfolio, version 4. One page: hero, selected work (Provven, Riffster, ShardSwap), about, contact. Sam is positioned as a web, blockchain and Flutter developer. Newest role: software architect at Pace Drivers. Provven is the product built for them.

## Where things live

- `src/app/page.tsx` only renders `HomePage`. `src/components/home-page.tsx` lists the sections in order.
- `src/content/profile.ts` and `src/content/projects.ts` hold every word and link. A new project is a new object in `projects.ts`; no component changes.
- `src/app/globals.css` holds the colors, fonts and the shared utilities: `shell` (page column), `eyebrow` (small mono label), `display` (headline weight and spacing; the face is the body face), `grid-lines`, `reveal` (scroll fade).
- Motion is almost all CSS, in `globals.css`. Two kinds:
  - Scroll-driven: `reveal`, `unveil`, `zoom-out`, `scroll-fill`, `scroll-progress`. Each is inside `@supports` and a reduced-motion check. An ancestor between one of these and the page must use `overflow-clip`, never `overflow-hidden`, or the animation stops following the page.
  - Mouse-driven: `pointer-mask`, `spotlight`, `follow-pointer`, `tilt`. They read CSS variables written by `src/components/pointer-area.tsx`, the only JavaScript in the motion.
- `public/` holds `Resume.pdf`, `blockchain-cert.pdf` and `media/`. Replacing a file under the same name updates the site. `Resume.pdf` is printed by Provven (`npm run resume:sam` in the resume-wallet repo). `resume/resume.html` is a readable copy of the words, not the print source.
- File names are kebab-case and components are named exports, the same as `riffster-site`.

## Run it

```bash
npm install
npm run dev
```

`npm run build` and `npm run lint` must both pass before a push.

## Next steps: GitHub and Vercel

The site is on `main` at `https://github.com/blueOctorok/blahablast-v4`, and it is live at `https://blahablast-v4.vercel.app` (checked 2026-11-17, title matches). The domain is `blahablast.io`.

DNS is still hosted by Netlify. Nameservers are `dns1` through `dns4.p02.nsone.net`. Removing the domain from the Netlify site deleted the address records (checked 2026-11-17): the apex has no A record and `www` does not resolve, so the domain is offline. The zone itself is still there. There were no MX or TXT records. Vercel gives each project its own A address, so the number has to be copied from this project's Domains page.

1. Done: the empty public repo `blahablast-v4` exists.
2. Done: `main` is pushed.
3. Done: imported to Vercel. Live at `blahablast-v4.vercel.app`.
4. Done: the domain was removed from the Netlify site. The DNS zone was kept.
5. Done on Vercel: `blahablast.io` is Production, and `www.blahablast.io` is a 308 redirect to it. Both say Invalid Configuration until DNS is saved. The records Vercel shows are an A record for `@` at `216.150.1.1`, and a CNAME for `www` at `b5113c93b80918b2.vercel-dns-016.com`.
6. Sam, in Netlify's DNS for `blahablast.io`: add those two records. Leave the nameservers where they are.

## Waiting on Sam

- Whether Flux Point Studios and MRI Software are still current. The new resume still lists both as Present, and Pace Drivers has no start month.
- A LinkedIn URL, if it should be in Contact.
- In-app Provven screenshots, if something other than the public homepage should be shown.
- Whether ShardSwap has a new address.

## Suggested additions, not approved

- A working contact form through Resend.
- A small interactive "selective disclosure" demo in the Provven feature.
- A social share image for link previews. This also needs the final domain, for `metadataBase` in `src/app/layout.tsx`.
