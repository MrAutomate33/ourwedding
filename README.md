# Wedding Website

A small static website for Mariëlle and Jérémy's wedding.

## Local development

Use Node.js 24 and npm:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. React controls need the development server
or a production build; do not open the source HTML directly.

```sh
npm run build
npm run preview
```

The build type-checks the React controls and creates the static site in `dist`.
All existing page URLs are retained. The public homepage remains the Save the
Date; `wedding.html` remains the full-site draft.

## UI and theme

Reusable interactive controls use Fluent UI React v9. Static editorial content,
Bootstrap layout utilities, images and external embeds remain in the HTML pages.
The Icelandic wedding palette and semantic colors are defined in `css/theme.css`;
`src/theme.ts` maps those same CSS variables to Fluent UI tokens. Keep shared
colors there instead of introducing page-specific hex values.
Buttons have filled, themed backgrounds; island wrappers remain transparent.
Information cards use translucent color without backdrop blur.
Section content and decorative gift rain stay below the fixed navigation.
Menus and the mobile drawer retain their separate overlay layers.

Headings use Playfair Display; body text and Fluent controls use Inter. Proposal
photos use the Fluent Carousel with five-second autoplay, manual controls and
hover/focus pauses. Reduced-motion preferences disable automatic playback.
Portrait slides show neighboring photo previews. Schedule annotations use
reusable `aside.schedule-support-note` blocks inside their associated events.
Our Story hearts appear 0.8 seconds apart and replay on visibility re-entry with
a five-second cooldown. The Journey proposal video pauses offscreen and restarts
from the beginning on each viewport visit, without looping while it stays visible.
The Wedding Day uses static botanical artwork over a subtle gradient.

The Journey terrain uses a transparent, 3x-resolution WebP texture for sharp,
fast scrolling; the SVG is retained as its editable source. Re-render from the
SVG instead of enlarging the existing WebP when changing artwork resolution.

## GitHub Pages

In the repository's **Settings > Pages**, choose **GitHub Actions** as the build
source. The Pages workflow builds pull requests and deploys `dist` on pushes to
`main` (or manual runs on `main`). Do not publish the unbuilt source directory.
Relative build URLs support the existing `/ourwedding/` project-site path.
Publishing the full wedding draft as the homepage is a separate launch decision.
