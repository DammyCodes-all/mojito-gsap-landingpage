# Mojito — GSAP-powered Next.js Landing Page

Lightweight Next.js landing page template using GSAP for animations. Bootstrapped with create-next-app (App Router).

## Project overview

Purpose: a minimal, performant landing page built with Next.js (App Router) and GSAP for timeline-driven animations and micro-interactions.

What you'll find:

- Next.js app folder structure (app/)
- Example landing page at app/page.tsx
- GSAP animation setup and example animation(s)

## Requirements

- Node.js 16.8+ (recommended 18+)
- npm / yarn / pnpm / bun

## Quick start

1. Install dependencies:
   npm install

   # or

   yarn

   # or

   pnpm install

2. Run the dev server:
   npm run dev

   # opens at http://localhost:3000

3. Build for production:
   npm run build
   npm start
   # or use `npm run preview` to preview a production build locally

## Important scripts

- dev: next dev
- build: next build
- start: next start
- preview: next start --preview (if configured)
  (See package.json for full script names)

## Where to edit

- app/page.tsx — main landing page content and entry point for animations.
- app/layout.tsx — global layout, fonts, metadata.
- public/ — static assets (images, icons).
- styles/ or app globals — global styles (if present).

## Notes on GSAP

- GSAP is used for timeline animations. Typical pattern:
  - Create a ref for the element (or query selector in useEffect).
  - Create a timeline (gsap.timeline()) and add tweens.
  - Kill or revert the timeline on cleanup to avoid memory leaks.
- If using server-side rendering (Next.js), import GSAP dynamically or guard usage to run only in the browser (e.g., inside useEffect or with dynamic import).

Example pattern:

- useEffect(() => {
  // import('gsap').then(({ gsap }) => { /_ create timeline _/ });
  }, []);

## Environment & Deployment

No special environment variables required for the template. For deployment:

- Vercel: push to a Git repo and import to Vercel (automatic Next.js support).
- Other hosts: build with `npm run build` and serve with `npm start` or follow host-specific docs.

## Contributing

- Open issues for bugs or feature requests.
- Create PRs for improvements — keep changes focused and document behavior.

## License

MIT (or change to your preferred license)

## Troubleshooting

- If animations don't run in dev, ensure GSAP is loaded only in the browser (see GSAP notes).
- If static assets 404, check paths under public/ and references in code.

<!-- End of README -->
