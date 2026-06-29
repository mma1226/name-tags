# Modal Design System

A design system for **Modal** ([modal.com](https://modal.com)) — serverless cloud compute for AI teams. This package captures Modal's product UI (app.modal.com) conventions: a dense, dark-mode, typography-forward interface built around Inter for UI, Goga for display, and a signature electric green `rgb(127, 238, 100)` accent.

## Sources

- **Figma — "Modal Design System"** (`Design System.fig`, mounted as VFS). Pages read: `/cover`, `/Typography`, `/Colors`, `/Elevation`, `/Table`, `/Navigation`, `/Drawer`, `/Avatar`, `/Button`, `/Chip`, `/Tag`, `/Input-update-states`, `/Checkbox`, `/Breadcrumb`, `/Menu-Item`, `/Pop-ups`, `/Elevation-Semantic-Colors`, `/Chart-colors`.
- **Uploaded assets**: `Goga-Regular.otf`, `Goga-Semibold.otf`, Modal logo SVGs (dark / light / one-color / mark).
- No codebase was attached — components recreated from Figma pseudocode.

## Index

| File / Folder             | Purpose |
| ------------------------- | ------- |
| `README.md`               | This document |
| `SKILL.md`                | Agent-skill manifest |
| `colors_and_type.css`     | CSS custom properties: color ramps, semantic tokens, type scale |
| `fonts/`                  | `Goga-Regular.otf`, `Goga-Semibold.otf` |
| `assets/`                 | Modal logos (dark, light, one-color, mark) |
| `preview/`                | Per-token / per-component HTML cards for the Design System tab |
| `ui_kits/app/`            | Hi-fi recreation of the Modal app UI (dashboard, table, drawer) |
| `ui_kits/app/index.html`  | Interactive click-thru of the app |

## Products represented

Modal ships **two surfaces**:
1. **app.modal.com** — the logged-in product (dashboard, apps list, functions, logs, secrets, settings). This Figma focuses almost entirely here.
2. **modal.com marketing** — covered only tangentially (`/Header-Component`, `/Footer-Component`, `/Marketing-Button`). We document tokens usable by both; the UI kit targets the app.

## Content Fundamentals

**Voice: engineer-to-engineer, terse, zero fluff.** Modal writes UI copy like a well-designed CLI — labels are nouns, buttons are verbs, no marketing adjectives.

- **Casing**: Sentence case everywhere (buttons, tabs, menu items, table headers). Never Title Case. e.g. "Live usage", "Manage workspaces", "Create environment", "Search or filter".
- **Person**: Second-person ("you") in docs/marketing; impersonal/imperative in the app ("Run", "Deploy", "Stop all containers").
- **Tone**: Technical, confident, utilitarian. Copy reads like a Linux man page crossed with Linear. No exclamation points, no emoji in product UI.
- **Numbers & units**: Precise — `$123,045.82`, `14:10:49`, `1248429`, `1 day`. Times are 24-hour with seconds. IDs are raw integers.
- **Empty / status states**: Terse — "Succeeded", "Running", "Error", "No differences with current component". Status is a chip, not a sentence.
- **Emoji**: Not used in product UI. Rare celebratory ✅ appears in internal Figma annotations (e.g. "Button ✅") — never ship that.
- **Unicode**: Smart quotes in prose ("Modal's design system…"), en-dashes in ranges, `→` never seen as a text char (use icons).
- **Microcopy examples from the file**:
  - "Tables make up a large part of Modal's interface, so maintaining consistent patterns is important to creating a unified user experience."
  - "Buttons are used to take actions."
  - "Chips are used to communicate status and labeling entities."
  - "Tags are used for metadata and key:value pairs, usually seen in a group."
  - Placeholder: "Search or filter" with a `⌘K` shortcut.

## Visual Foundations

### Background & surface
- **Dark-mode first**, and by default. The canvas is `rgb(24,24,24)` (`--bg-base`) — not pure black. Pure black (`#000`) is only used for full-bleed hero/elevation demos.
- **Surfaces are flat, not glossy.** Cards are filled rectangles with a 1px subtle border (`rgba(255,255,255,0.06)`) and occasionally a soft `0 2px 8px rgba(24,24,24,0.2)` shadow. No gradients on cards.
- **Elevated surfaces (dropdowns, drawers, dialogs)** use `rgba(28,28,28,0.90)` + `backdrop-filter: blur(12px)` + a hairline light border. Four elevation tiers: 10 (drawer), 50 (dropdown), 90 (dialog), each stackable transparent ↔ opaque.

### Color
- **The green is sacred.** `rgb(127, 238, 100)` is Modal's one-and-only brand accent. It appears as: live-activity dot (with `0 0 6px` glow), active menu item highlight (`rgba(127,238,100,0.10)` wash), primary chart series, and rare highlight shadows (`shadow-glow: 2px 2px 5px rgba(127,238,100,0.10)`).
- **Everything else is gray.** The neutral ramp from `#0a0a0a` to `#fff` does 90% of the work. Text hierarchy is built almost entirely from gray values: `#e8e8e8` (headings) → `#d1d1d1` (body) → `#a3a3a3` (secondary) → `#8b8b8b` (muted) → `#747474` (placeholder).
- **Status colors** are desaturated on dark: red `#f87171`, orange `#ffab5e`, yellow `#ffea71`, blue `#91c8ef`, pink `#ff8de6`. Used sparingly — usually inside chips or as a 5-10% wash.
- **Charts** use a paired scheme: primary (teal `#069285` + pale green `#adeaab`) and secondary (terracotta `#d9866b` + peach `#f6dfc8`).

### Type
- **Inter** for all UI. **Always** with `cv11` OpenType feature (single-story `a`). Dominant size is **14px / 20px line-height**.
- **Goga** (custom) for marketing display (H1–H3). Goga never appears in the app proper — only hero pages, splash screens, and the cover.
- **Fira Mono** for code, logs, IDs in logs. Never for UI labels.
- Weight usage: 400 (body, most headings h2–h5) and 500 (labels, buttons, h1). 700 is rare. 600 (Semibold) appears only for Goga display weights.

### Borders, corners, shadows
- **Radii**: `4px` (table cells, tags), `6px` (buttons, cards), `8px` (inputs), `12px` (chip pills, avatars). `50%` for dots and circular avatars.
- **Borders** are always hairline `1px`. Color choices: `rgb(47,47,47)` (input), `rgb(70,70,70)` (outline button), `rgba(255,255,255,0.06)` (card/surface). Dashed purple `rgb(151,71,255)` appears only as a **Figma annotation** — never ship.
- **Shadows** are restrained. Subtle `shadow-md` on elevated surfaces, the signature faint green glow on accent states. No colorful drop shadows.

### States
- **Hover**: +6% white overlay (`rgba(255,255,255,0.06)` bg). Borders step one rung brighter. No scale changes, no transitions beyond `150ms ease`.
- **Active/selected**: accent-wash background (`rgba(127,238,100,0.10)`) + brighter text. Menu items get a `rgb(39,39,39)` offset fill.
- **Press**: same as hover; no shrink animation.
- **Focus**: 1px border step-up; an inner caret bar on inputs (`rgb(209,209,209)`).
- **Disabled**: text → `rgb(93,93,93)`, border unchanged.
- **Danger hover**: `rgba(248,113,113,0.05)` wash.

### Imagery / Illustration
- **No illustrations in the app.** No hand-drawn marks, no textures, no repeating patterns.
- Avatars are **24px circles** with 1px `rgba(255,255,255,0.06)` rim. Three presets: Modal logomark, initials (Tosh Modal 15px), and uploaded photo.
- Marketing pages use a **black-and-gradient** hero (colorful gradient band visible in the Elevation reference frame) but this is the exception, not the rule.

### Animation
- Minimal. Modal favors **no motion > bad motion**. The only ambient animation is the `li:loader-2` spinner inside chips. No fades, no bounces, no skeletons with shimmer (static chip with spinner instead).
- The green activity dot has a soft `box-shadow` glow — static, not pulsing, in most frames.

### Layout rules
- **Dense.** Table row height 32–36px, menu item 36px, chip 20px, button 32px (regular). 42px is the outer padding on foundation cards; 16–20px is the app chrome padding.
- **Fixed app header** (~60px top nav + 43px tab bar = 103px total) with a 1px `rgb(39,39,39)` bottom divider.
- **Left-aligned numbers? No** — IDs stay left, but numeric data columns can go right (see `/Table/right-alignment-no-dates`).
- Primary column in tables uses a faintly darker fill; header row is `rgb(36,36,36)` with `rgb(24,24,24)` borders — inverted from most tables.

### Transparency & blur
- Reserved for **elevated surfaces only** (drawers, dropdowns, popovers). 90% opacity + 12px blur. Content panels are always opaque.
- Button fills use translucent whites on primary surfaces (`rgba(255,255,255,0.1)`) with translucent borders (`rgba(255,255,255,0.2)`). This is the "translucent primary" pattern.

## Iconography

- **Lucide** ([lucide.dev](https://lucide.dev)) is Modal's icon system. Every icon seen in the Figma pseudocode is prefixed `Li...` (`LiChevronDown`, `LiSearch`, `LiX`, `LiGem`, `LiZap`, `LiPackage`, `LiGlobe`, `LiClock`, `LiCheck`, `LiAlertTriangle`, `LiLoader2`, `LiSettings`, `LiPlusCircle`, `LiBook`, `LiSlack`, `LiEyeOff`, `LiStar`, `LiCpu`, `LiArrowUpDown`). These are verbatim Lucide names.
- **Default size 16px** (UI), occasionally 12px inside chips and 20px in large buttons. Stroke weight: Lucide's default (`1.5` / `2`).
- **Icon color** is always a gray token — never the green accent, except the live-activity dot (which is a filled circle, not an icon).
- **No custom icons ship in the UI.** The one exception is the Modal logomark (in `assets/`).
- **Emoji**: never in product UI. Not used as status indicators.
- **Unicode**: en-dash, smart quotes, `·` dots in prose. No arrow or checkmark unicode — always a Lucide SVG.

This system links Lucide from the CDN in previews:
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
```

## Missing / substitutions

- **Tosh Modal** (used for avatar initials) — not available. Falls back to Inter 500.
- **Basier Circle** (447 instances in the file, mostly internal annotations) — not available. Falls back to Inter.
- No Modal codebase was attached. Components below were recreated from Figma pseudocode alone. Please re-attach via the Import menu if you want a closer match to production.

## UI kits

- `ui_kits/app/` — the logged-in Modal app (workspace picker, apps list table, live-usage header, drawer).

