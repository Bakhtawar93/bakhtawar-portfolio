# Bakhtawar Abbas — Portfolio (V5)

A fully static developer portfolio built with HTML, CSS and vanilla JavaScript. No React, npm, database or build step.

## Quick preview

1. Extract the ZIP.
2. Open `index.html` in Chrome or Edge. The core website works directly from the filesystem.
3. For a local server (optional): open a terminal in this directory and run `python -m http.server 8000`, then visit `http://localhost:8000`.
4. Test the mobile menu, case-study buttons, copy-email button and contact form. The form opens a mail draft in your configured email application; **it does not submit to any server**.

## Project structure

- `index.html` — semantic page sections and sample UI illustrations
- `assets/css/style.css` — all styling and responsive layouts
- `assets/js/main.js` — navigation, active section, reveals, case studies, form
- `assets/images/bakhtawar-profile.webp` — chosen LinkedIn-style portrait, replaceable
- `assets/images/favicon.svg` — site icon
- `assets/images/social-preview.svg` — fallback social preview

## Personal details & content

Search `index.html` and `assets/js/main.js` for these values to change them:

- Name: `Bakhtawar Abbas`
- Email: `abbasbnaqvi1993@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/bakhtawarabbasdev/`
- GitHub: `https://github.com/Bakhtawar93`
- Employer: `Prime Logix`
- Official role: `Web Developer` (based on LinkedIn Experience; verify if needed)

Hero portrait: replace `assets/images/bakhtawar-profile.webp` with a properly licensed/owned photograph of your choice. The included portrait is AI-edited and is not guaranteed to match real-life facial features exactly. Keep the same filename or update the `src` attribute in HTML.

Case study copy is stored in the `CASE_STUDIES` object in `assets/js/main.js`; visual previews and summaries are in `index.html`. Examples are anonymized, illustrative interfaces, *not real screenshots*. Please check employer/client permissions before publishing descriptions of professional work. Some project areas overlap and must not be advertised as separate independently built systems.

## Fonts and dependencies

Fonts: **Poppins** (body and headings) and **DM Mono** (labels), served via Google Fonts CDN. The fallback fonts work if the network is unavailable. The site has no JavaScript framework, animation package or tracking library.

## Contact form: important

The form is *mailto-based*. When the user selects **Prepare email**, the browser attempts to open their email application with the entered name, email, subject, and message. It does not send directly to an inbox. This can fail if no default mail handler is configured. Direct mail links and a copy-email button provide a fallback.

To accept submissions without a configured email application, integrate an actual form service or backend (such as Formspree) and update the privacy disclosure. Never claim direct server delivery until it's configured and tested.

## Publish on Cloudflare Pages with GitHub

1. Log in at GitHub and create a new **public repository** (e.g., `bakhtawar-portfolio`). Ensure no private client code is included.
2. Upload the files **inside** the `bakhtawar-portfolio-v5` directory, keeping `index.html` at the repository root (via **Add file → Upload files**). Commit.
3. In Cloudflare dashboard, go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git** (labels may vary).
4. Authorize GitHub and select the repository.
5. Set framework preset to **None**. Build command: **leave blank**. Build output directory: **`/`** (repository root), or follow Cloudflare's current plain-static-site guidance if the UI requires a value.
6. Deploy. Cloudflare creates a `*.pages.dev` address. Verify all routes/sections, images and contact actions after publishing.
7. For a purchased domain, open the Pages project's **Custom domains** area and follow Cloudflare's DNS instructions. Domain registration is not included in free hosting.

### Quality checks before launch

- Review the final mobile layout at 320, 375, 768 and 1440 CSS pixels.
- Verify email and public URLs. Check case study statements for accuracy and permission.
- Replace AI-edited portrait with a true-to-life professional photo if authenticity is a concern.
- Test form with your email application; otherwise add an actual backend.
- Update absolute `og:image` to the final deployed domain (e.g., `https://yourdomain.com/assets/images/social-preview.svg`) and ideally replace it with a 1200×630 PNG/JPG for consistent social previews.
- Check browser console and Lighthouse after deployment.

## Accessibility / motion

Semantic landmarks, keyboard-operable navigation, a skip link, labelled case dialog, ARIA states and `prefers-reduced-motion` behavior are included. Reveal animations have static fallback if JavaScript is disabled.
