This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Development Log (Day-wise)
This project has been updated over multiple days to standardize contact forms, fix missing pages, and improve hero/CTA patterns site-wide.

- **2025-12-08 (Day 1)**
	- Audited codebase for broken routes, inline forms, and missing index pages.
	- Implemented a shared `ContactForm` component at `src/components/ContactForm.tsx`.
	- Replaced multiple inline/dark contact sections across services, about, and partner pages with the white `ContactForm`.
	- Added `/about` and `/resources` index pages to fix 404s and standardized the hero layouts for both pages.
	- Fixed a JSX syntax error on the home page that prevented the dev server from starting.

- **2025-12-09 (Day 2)**
	- Standardized the hero sections for `services` and `contact`, using dark overlays + white text for improved readability.
	- Added a 'What We Do and Focus On' section to `src/app/services/page.tsx` to match individual service pages.
	- Converted the `services` contact block to a white `ContactForm` and styled the adjacent quote panel accordingly.
	- Replaced service page-specific local forms with `ContactForm` on data-analytics, cybersecurity, cloud-infrastructure, AI, prototype-mvp, and software-development pages.
	- Began troubleshooting a Windows `.next\trace` EPERM issue that can block `npm run dev`.

- **2025-12-12 (Day 3)**
	- Cleaned up page hero consistency for `resources` and `contact` (same layout and CTA style).
	- Ensured `ContactForm` is used across all services and support pages.
	- Left notes and instructions in README for resolving common dev issues (Windows EPERM, dev port conflicts).

## Completed: Stipulated Tasks
The following tasks have been implemented or addressed so far:

- Add a shared `ContactForm` and standardize it across pages (services, about, partners, resources, contact).
- Fix 404s — created `src/app/about/page.tsx`, `src/app/resources/page.tsx` and normalized routes.
- Replace inline/dark contact blocks with a white `ContactForm` card across the site.
- Add hero overlays and replace background images on selected pages to improve readability and contrast.
- Add a 'What We Do and Focus On' section for the services overview to match each service page.
- Fix JSX syntax errors and other code issues discovered during the rollout.

## Remaining Tasks and Stipulated Deliverables
These are recommended next steps or outstanding items to complete the full requested deliverables:

1. Validate visual layout in the dev server for all pages and resolve any CSS/regression issues.
2. Re-run lint and TypeScript checks, adjust for any remaining errors or warnings (e.g., react/no-unescaped-entities).
3. Ensure images load correctly in Next 15.4.x — move usage to `next/image` with correct `unoptimized`/loader settings as needed.
4. Ensure there are no remaining inline/dark forms across all pages (final sweep).
5. Add unit/integration tests for the `ContactForm` component to guard form behavior and validation.
6. Revert any temporary ESLint relaxations (if required) and escape strings for stricter lint rules.
7. Final visual QA and accessibility checks — color contrast, keyboard navigation, and form focus states.

## Troubleshooting `npm run dev` on Windows
If you run into issues starting the dev server (e.g., EPERM on `.next\trace`, port conflicts, or permission errors), try these steps in PowerShell:

```powershell
# 1) Check and stop processes using port 3000 (replace <PID> if present):
Get-NetTCPConnection -LocalPort 3000 | Select-Object LocalAddress,LocalPort,State,OwningProcess
If you get an OwningProcess PID, run:
Stop-Process -Id <PID> -Force

# 2) Remove the build cache and force a rebuild:
Remove-Item -Recurse -Force .next

# 3) Start the dev server and capture logs:
npm run dev 2>&1 | Tee-Object -FilePath dev-log.txt
Get-Content dev-log.txt -Tail 200
```

If `.next` deletion gives `EPERM` or permission errors, close VS Code and Explorer windows, run PowerShell as Administrator, then re-run `Remove-Item`.

If a syntax or JSX error appears in the logs, please paste the last 50-100 lines of `dev-log.txt` and I’ll fix the issue.

---
If you'd like, I can keep this changelog updated as we complete more tasks, create a pull request summarizing all changes, or create a detailed checklist of any remaining pages you want standardized. Tell me which you'd prefer and I’ll proceed.
