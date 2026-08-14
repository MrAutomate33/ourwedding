# Wedding Site — Guest Experience Review

Tested as a wedding guest on desktop (1440px, standards-compliant Chromium rendering) and mobile (390px, iPhone-sized viewport with touch emulation). This file lists what feels off and what I'd recommend doing about it. A separate file, `OPEN-QUESTIONS.md`, lists missing information I need from you before the content can be finished.

Priority key: 🔴 Critical (fix before sending to guests) · 🟠 Important (should fix) · 🟡 Polish (nice to have)

---

## 🔴 Critical bugs

### 1. Duplicate navigation bar appears on desktop
**What I saw:** On desktop widths (tested at 1440px), a second, unstyled row of navigation links (`Home Our Story Our Journey The Proposal Wedding Day Location RSVP Dress Code Gifts Gallery...`) renders directly underneath the real navbar, pushed into the page instead of hidden. It does **not** happen on mobile (390px).

**Root cause (confirmed via computed styles):** The mobile menu panel (`#offcanvasNav`, a Bootstrap "offcanvas" drawer) is nested *inside* the `<nav>` element, which has the class `navbar-expand-lg`. Bootstrap ships a rule that says: "if an offcanvas panel lives inside a `navbar-expand-lg` container, turn it into a normal, always-visible part of the navbar once the screen is ≥992px wide" (`position: static; visibility: visible !important; transform: none !important;`). Since this site already has a separate, purpose-built desktop menu, this Bootstrap behavior is not wanted here — but because of how the HTML is nested, Bootstrap applies it anyway.

**Recommended fix:** Move the offcanvas `<div class="offcanvas offcanvas-end ...">…</div>` block so it is a **sibling directly after `</nav>`**, instead of a child inside `<nav>`. The toggle button uses `data-bs-target="#offcanvasNav"` (an ID reference), so this move is safe and doesn't require any other change. This one fix also resolves bug #2 below.

### 2. Mobile menu opens almost empty
**What I saw:** On mobile, tapping the hamburger icon opens a menu, but only a thin dark bar with a close (✕) button is visible — none of the actual links, language buttons, or RSVP button are visible, even though they exist correctly in the page (confirmed via accessibility inspection). A guest tapping the menu would see what looks like a broken, empty menu.

**Root cause (confirmed via computed styles):** The `<nav>` element has `backdrop-filter: blur(10px)` for the frosted-glass look. In CSS, `backdrop-filter` (like `transform`) causes any `position: fixed` descendant to be positioned *relative to that element* instead of the full screen. Because the offcanvas menu is nested inside `<nav>`, it gets squeezed into the navbar's own ~56px height instead of filling the screen.

**Recommended fix:** Same as bug #1 — moving the offcanvas panel to be a sibling of `<nav>` (not nested inside it) fixes this automatically, since it removes the `backdrop-filter` ancestor.

> **This is the single most important fix on this list.** Right now, real guests on their phones — which is most of them — cannot use the menu at all.

### 3. The mobile menu doesn't fully close when navigating
**What I saw:** After opening the mobile menu and then moving to a different section, the menu still appeared to be open/overlaying the page instead of closing cleanly — I noticed a leftover dark overlay strip on top of the destination section.

**Likely cause:** The menu-close behavior is wired to run when a guest clicks a link *inside* the menu itself (`initOffcanvasClose` listens for clicks on the menu's own links). If the menu is left open and the page is navigated another way — for example a browser back/forward action, or a fresh link opened while the menu was still open in a previous view — nothing tells the menu to close, since that code path only ever triggers on an in-menu click.

**Recommended fix:** Also close the offcanvas menu whenever the page's hash/section changes for any reason (not only on a direct click inside the menu), for example by listening for `hashchange` or by closing it right before scrolling to a new section.

---

## 🟠 Important issues

### 4. RSVP form still contains template/placeholder questions
**What I saw:** Opening the embedded Microsoft Forms RSVP, the form is titled **"Attendee confirmation survey"** and asks:
- "Which date can you attend?" — with helper text about being offered "alternative dates"
- "Your department" 
- A generic Microsoft Forms privacy disclaimer

This is left over from a Microsoft Forms business/event template and hasn't been adapted for a wedding with one fixed date. A guest filling this out would be genuinely confused by "which date" and "your department."

**This can't be fixed from the website code** — it needs to be edited directly inside Microsoft Forms (title, and each question's wording). I've listed the exact fields to review in `OPEN-QUESTIONS.md`.

### 5. Deep links to some sections land in the wrong place
**What I saw:** Opening the site directly at `#gallery` (as if a guest clicked a link straight to the gallery, e.g. from a text message) consistently lands the page scrolled to the RSVP section instead, on two separate fresh loads. Some other anchors (e.g. `#dress-code`) worked correctly.

**Likely cause:** The full-screen loading animation blocks scrolling for up to ~2 seconds while the page decides where to land; by the time it un-blocks, the browser has already given up on the originally-requested scroll position, and something later in the page (most likely the lazy-loaded RSVP form area) ends up being where the page settles.

**Recommended fix:** After the loading screen finishes, explicitly re-apply the intended scroll position in code (e.g. re-run `location.hash` handling or call `scrollIntoView()` on the target section once the loader is done), rather than relying on the browser to remember it.

### 6. Wedding-day schedule has a repeated time slot
**What I saw:** The schedule shows two separate lines both timed **15:45–17:30**:
- "Toast, cake, congratulations & drinks"
- "Beer, wine & soft drinks"

To a guest skimming the schedule, this reads like a duplicate/glitch rather than two aspects of the same moment.

**Recommended fix:** Merge into a single schedule item, e.g. *"15:45–17:30 — Toast, cake & drinks (beer, wine and soft drinks available)"*.

### 7. Mixed-language placeholder text when switching to English or French
**What I saw:** Several sections have real Dutch fallback text hard-coded directly into the HTML (not hooked up to translations) for content that's still a placeholder, e.g. in **Our Journey** and **The Proposal**: switching the site to English still shows Dutch bracketed placeholders like `[DATUM TOEVOEGEN]` and `[VERHAAL TOEVOEGEN]` next to already-translated English headings. It looks unfinished/buggy to an English-speaking guest, even though it's really just a content gap (see `OPEN-QUESTIONS.md`).

**Recommended fix:** Once you provide the real story/dates, this resolves itself since real content will be entered per-language. If any placeholders remain at launch, they should at least be translated per-language rather than always Dutch.

---

## 🟡 Polish / nice-to-have

- **Gallery photos are still generic vector illustrations** (mountain silhouette, aurora waves) rather than real photos, each captioned "[ADD PHOTO]". This is expected to be temporary, but flagging it as the most visually obvious "unfinished" signal on the whole site — I'd prioritize replacing these before sending invitations, even ahead of some text placeholders.
- **The "Children, pets and plus-ones are not invited" note** sits directly under the wedding-day schedule with no separating heading, so a first-time reader could misread it as being about schedule timing rather than a general guest policy. Consider a small heading like "Please note" above it, or moving it closer to the FAQ/RSVP section where it's already restated.
- **Gallery filter buttons wrap unevenly on mobile** ("Friends & Family" drops to its own full-width row while the other four sit two-per-row above it) — functional, just visually a little inconsistent. Minor.
- **The Journey timeline background** uses a subtle repeating contour pattern; on some placeholder-heavy cards it currently competes a little with the "featured" proposal card's photo for attention. Once all placeholder text is replaced with real stories, worth a final visual pass.
- **RSVP deadline and several FAQ answers still show bracketed placeholders** (`[DATE TO BE ADDED]`, `[WEERSADVIES TOEVOEGEN]`, etc.) — guests will see these literally if the site is shared before they're filled in. Tracked in `OPEN-QUESTIONS.md`.

---

## What already works well
- Countdown timer, language switcher (NL/EN/FR), FAQ accordion, gallery filters, and the "More" navigation dropdown all function correctly and look polished on both desktop and mobile.
- The OpenStreetMap embed with the heart pin, optimized photos, and the six-color Icelandic palette all render consistently and give the site a cohesive, romantic feel.
- Mobile hero, countdown, and RSVP sections (aside from the menu bug above) are clean and easy to read on a phone.
