# Mariëlle & Jérémy — Wedding Website

A static, dependency-light wedding website celebrating Mariëlle & Jérémy's wedding on **15 July 2027** in Europe/Amsterdam time, themed around their proposal at **Kerlingarfjöll, Iceland**. Built with plain HTML, CSS and JavaScript plus Bootstrap 5.3.3 (via CDN), designed to be hosted for free on **GitHub Pages**.

This README is written for beginners — no build tools, frameworks, or npm installs are required.

---

## 1. Project Description

This repository contains a single-page wedding website with sections for the couple's story, a timeline of their journey to the proposal, wedding day schedule, venue/location info, an RSVP form (embedded via Microsoft Forms), dress code, gifts, a photo gallery, ceremony masters, and FAQ. The design uses a "Romantic Icelandic Nature" theme: deep midnight blues, moss greens, aurora teal accents, volcanic browns, and soft sand/mist neutrals.

---

## 2. Folder Structure

```
ourwedding/
├── index.html               # Main website (all sections)
├── 404.html                  # Custom 404 error page
├── favicon.svg                # Site favicon
├── .nojekyll                  # Disables Jekyll processing on GitHub Pages
├── css/
│   └── style.css              # All custom styles
├── js/
│   └── script.js              # Countdown, gallery, timeline, nav behaviour
├── img/
│   ├── hero-placeholder.svg
│   ├── proposal-placeholder.svg
│   ├── gallery-placeholder-1.svg … gallery-placeholder-4.svg
│   ├── person-placeholder.svg
│   └── map-placeholder.svg
└── README.md
```

---

## 3. How to Preview Locally

No build step is required. Choose one option:

**Option A — Open directly**
Double-click `index.html` to open it in your browser. (Some browsers restrict `fetch`/iframes on `file://` URLs, so Option B is recommended.)

**Option B — Simple local server (recommended)**
```bash
# Python 3 (usually pre-installed on macOS/Linux)
cd ourwedding
python3 -m http.server 8000
# Then open http://localhost:8000 in your browser
```
or, with Node.js installed:
```bash
npx serve .
```

---

## 4. How to Replace Placeholders

All placeholder text is wrapped in square brackets, e.g. `[ADD VENUE NAME]`. To find every placeholder:

```bash
grep -rn "\[ADD" index.html
grep -rn "\[VERIFY" index.html
```

Open `index.html` in a text editor, search for each bracketed placeholder, and replace it with real content. Common placeholders include:

- `[ADD VENUE NAME]`, `[ADD VENUE ADDRESS]`, `[ADD VENUE DESCRIPTION]`
- `[ADD MAP EMBED OR MAP LINK]`, `[ADD DIRECTIONS URL]`
- `[ADD TRAVEL INSTRUCTIONS]`, `[ADD PARKING INSTRUCTIONS]`
- `[ADD HOTEL OR ACCOMMODATION INFORMATION]`, `[ADD TAXI OR TRANSPORT INFORMATION]`
- `[ADD RSVP DEADLINE]`, `[ADD MICROSOFT FORMS EMBED URL]`, `[ADD MICROSOFT FORMS PUBLIC URL]`
- `[ADD STORY]`, `[ADD PHOTO]`, `[ADD DATE]`, `[ADD PROPOSAL DATE]`
- `[ADD NAME]`, `[ADD SHORT INTRODUCTION]`, `[ADD CONTACT METHOD]`
- `[VERIFY AND ADD EXACT PROPOSAL COORDINATES]`
- `[ADD PHOTO POLICY]`, `[ADD GIFT MESSAGE]`, `[ADD WISHLIST LINK]`, `[ADD CONTRIBUTION DETAILS]`
- `[ADD DINNER TIME]`, `[ADD SPEECH TIME]`, `[ADD PARTY TIME]`

Also update the canonical URL and Open Graph URL comments near the top of `index.html` once you know your final domain.

---

## 5. How to Replace Images

All images currently use lightweight SVG placeholders in `img/`. To swap in real photos:

1. Add your photo files (JPEG/WebP recommended) to the `img/` folder.
2. In `index.html`, update the relevant `<img src="img/...">` attribute to point to your new file.
3. Update the `alt` attribute with a meaningful description for accessibility.
4. Keep file names lowercase, hyphenated, and descriptive (e.g. `img/proposal-sunset.jpg`).
5. For the hero background, also update `.hero-parallax` in `css/style.css` if you rename the file.

## 6. Recommended Image Sizes

| Purpose             | Recommended size (px) | Format          |
|---------------------|------------------------|-----------------|
| Hero background      | 1920 × 1080 (or larger, 16:9) | JPEG/WebP, <500KB |
| Proposal / story photos | 1200 × 900             | JPEG/WebP, <300KB |
| Gallery photos        | 1000 × 1000 (square-ish) | JPEG/WebP, <250KB |
| Ceremony master photos | 400 × 400 (square)     | JPEG/WebP, <100KB |
| Map screenshot        | 800 × 400               | PNG/JPEG          |

Compress photos before uploading (e.g. with [Squoosh](https://squoosh.app/)) to keep the site fast.

---

## 7. Microsoft Forms RSVP Setup

1. Go to [forms.microsoft.com](https://forms.microsoft.com) and create a new form named e.g. "Wedding RSVP — Mariëlle & Jérémy".
2. Recommended form questions:
   - Full name(s) of guest(s)
   - Will you attend? (Yes / No)
   - Number of guests attending
   - Dietary requirements / allergies
   - Song request (optional)
   - Message for the couple (optional)
3. Click **Collect responses** → choose **Anyone can respond** (do NOT restrict to your organization, or external guests won't be able to submit).
4. Click the embed (**`< >`**) icon to get an iframe `src` URL. Paste it into the `iframe src="[ADD MICROSOFT FORMS EMBED URL]"` in `index.html`.
5. Also copy the public share link and use it for `[ADD MICROSOFT FORMS PUBLIC URL]` (the fallback button).
6. **Test the form in a private/incognito browser window** to confirm external guests can access it without signing in.
7. Test on both desktop and mobile.
8. **Never commit exported guest responses to this repository** — keep response data in Microsoft Forms/Excel only.

---

## 8. GitHub Pages Deployment

1. Push this repository to GitHub (public or private with Pages enabled).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch (e.g. `main`) and root folder (`/`), then save.
5. Your site will be published at `https://<username>.github.io/<repository-name>/`.
6. The included `.nojekyll` file ensures GitHub Pages serves files as-is without Jekyll processing (important since folders start with normal names, but this avoids any Jekyll-related surprises).

---

## 9. Custom Domain

1. Buy a domain (e.g. from Namecheap, Google Domains successor, etc.).
2. In your domain's DNS settings, add a `CNAME` record pointing to `<username>.github.io` (for a subdomain like `wedding.example.com`), or `A` records pointing to GitHub Pages' IP addresses (for an apex domain — see [GitHub's documentation](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)).
3. In your repository's **Settings → Pages**, enter your custom domain and save (this creates a `CNAME` file in the repo).
4. Enable **Enforce HTTPS** once the certificate is issued.
5. Update the canonical URL and Open Graph URL comments in `index.html` to match your new domain.

---

## 10. Privacy Checklist

- [ ] Confirm ceremony masters' contact details are shared with their explicit permission before publishing.
- [ ] Confirm the Microsoft Forms RSVP does not require organizational sign-in (so external guests can respond).
- [ ] Do not commit any guest data, RSVP exports, or spreadsheets to this repository.
- [ ] Review all photos for consent before publishing, especially of guests who are not the couple.
- [ ] Avoid publishing full home addresses; use general area descriptions where possible for venue directions if privacy is a concern.
- [ ] No analytics or third-party tracking scripts are included by default — keep it that way unless you've reviewed a privacy policy.

---

## 11. Accessibility Testing Checklist

- [ ] Tab through the entire site using only the keyboard — all interactive elements should be reachable and show a visible focus outline.
- [ ] Test the skip-to-content link (press Tab immediately on page load).
- [ ] Verify all images have descriptive `alt` text (decorative SVGs use `aria-hidden="true"`).
- [ ] Confirm the countdown announces changes via `aria-live="polite"` without being overly chatty.
- [ ] Check color contrast of text against backgrounds (aim for WCAG AA, 4.5:1 for body text).
- [ ] Test with a screen reader (e.g. VoiceOver, NVDA) for section headings and landmark navigation.
- [ ] Confirm `prefers-reduced-motion` disables parallax, aurora animation, and scroll-reveal animations.
- [ ] Verify the FAQ accordion and gallery modal are operable via keyboard (Enter/Space to open, Escape to close, arrow keys in the lightbox).

---

## 12. Mobile Testing Checklist

- [ ] Test on at least one small phone width (≈360px) and one tablet width (≈768px).
- [ ] Confirm the offcanvas mobile menu opens, closes on link click, and is scrollable.
- [ ] Verify the hero section content and countdown are readable without horizontal scrolling.
- [ ] Check that the gallery grid reflows to a single/two column layout on narrow screens.
- [ ] Confirm the RSVP iframe container resizes responsively and doesn't overflow.
- [ ] Test tap targets are large enough (buttons, nav links, accordion headers).

---

## 13. Pre-Launch Checklist

- [ ] Replace every `[ADD ...]` and `[VERIFY ...]` placeholder in `index.html`.
- [ ] Replace all placeholder SVGs in `img/` with real photos.
- [ ] Set up and test the Microsoft Forms RSVP (see Section 7).
- [ ] Add the canonical URL and Open Graph URL once the domain is known.
- [ ] Update the JSON-LD structured data `location` fields with the real venue name/address.
- [ ] Verify the Icelandic phrase "Ástin finnur sér leið" with a native speaker before publishing.
- [ ] Run the accessibility and mobile checklists above.
- [ ] Proofread all text content, dates, and times.
- [ ] Confirm the countdown target date/time (`2027-07-15T14:30:00+02:00`) matches the final schedule.
- [ ] Test the site on GitHub Pages (or your custom domain) after deployment, not just locally.

---

## 14. Troubleshooting

**The countdown shows "NaN" or doesn't move.**
Check the browser console for JavaScript errors. Ensure `js/script.js` is loaded (view page source, confirm the `<script src="js/script.js">` tag is present and the file path is correct).

**Fonts or Bootstrap styles don't look right.**
Check your internet connection — Google Fonts, Bootstrap CSS/JS, and Bootstrap Icons are loaded from CDNs (`fonts.googleapis.com`, `cdn.jsdelivr.net`). If your network blocks these domains, the site will still work but with fallback system fonts and no Bootstrap styling.

**RSVP form doesn't show guests' expected fields.**
Re-check your Microsoft Forms sharing settings — the form must allow "Anyone with the link" to respond, not just organization members.

**Images look blurry or don't appear.**
Confirm the file path matches exactly (case-sensitive on GitHub Pages' Linux servers, even if it works on your local Mac/Windows machine).

**404 page doesn't show my styling.**
Confirm `css/style.css` is loaded with a relative path (`css/style.css`) and that the file exists at the repository root's `css/` folder.

**Gallery lightbox doesn't open.**
Ensure Bootstrap's JS bundle loads before `js/script.js` at the bottom of the page, and check the browser console for errors.

---

## License / Credit

This is a personal project for Mariëlle & Jérémy's wedding. Feel free to fork and adapt the structure for your own wedding — please replace all personal content, photos, and placeholders with your own.
