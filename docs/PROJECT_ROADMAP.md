# Portfolio roadmap

A new chat can start here.

## What it is

Sam Blaha's portfolio, version 4. One page: hero, selected work (Provven, Riffster, ShardSwap), about, contact. Sam is positioned as a web, blockchain and Flutter developer.

## Where things live

- `src/app/page.tsx` only renders `HomePage`. `src/components/home-page.tsx` lists the sections in order.
- `src/content/profile.ts` and `src/content/projects.ts` hold every word and link. A new project is a new object in `projects.ts`; no component changes.
- `src/app/globals.css` holds the colors, fonts and the shared utilities: `shell` (page column), `eyebrow` (small mono label), `display` (headline weight and spacing; the face is the body face), `grid-lines`, `reveal` (scroll fade).
- Motion is almost all CSS, in `globals.css`. Two kinds:
  - Scroll-driven: `reveal`, `unveil`, `zoom-out`, `scroll-fill`, `scroll-progress`. Each is inside `@supports` and a reduced-motion check. An ancestor between one of these and the page must use `overflow-clip`, never `overflow-hidden`, or the animation stops following the page.
  - Mouse-driven: `pointer-mask`, `spotlight`, `follow-pointer`, `tilt`. They read CSS variables written by `src/components/pointer-area.tsx`, the only JavaScript in the motion.
- `public/` holds `Resume.pdf`, `blockchain-cert.pdf` and `media/`. Replacing a file under the same name updates the site.
- File names are kebab-case and components are named exports, the same as `riffster-site`.

## Run it

```bash
npm install
npm run dev
```

`npm run build` and `npm run lint` must both pass before a push.

## Next steps: GitHub and Vercel

The site is on `main` at `https://github.com/blueOctorok/blahablast-v4`. The old v3 site is still live on Netlify.

1. Done: the empty public repo `blahablast-v4` exists.
2. Done: `main` is pushed.
3. Sam: in Vercel, in the team that holds `riffster-site`, import `blahablast-v4`. No settings or environment variables are needed.
4. Agent: check the Vercel URL at desktop and phone widths.
5. Sam: add the domain to the Vercel project and switch its DNS records at the registrar. The agent needs the domain and registrar to write out the records.
6. Sam, last: remove the domain from Netlify once the new site is serving.

## Waiting on Sam

- An updated `Resume.pdf`.
- Whether Flux Point Studios and MRI Software are still current, if a dated timeline is wanted.
- A LinkedIn URL, if it should be in Contact.
- In-app Provven screenshots, if something other than the public homepage should be shown.
- Whether ShardSwap has a new address.

## Suggested additions, not approved

- A working contact form through Resend.
- A small interactive "selective disclosure" demo in the Provven feature.
- A social share image for link previews. This also needs the final domain, for `metadataBase` in `src/app/layout.tsx`.
