# Jaime's Portfolio — Architecture & Features

## File Structure

```
jaime-portfolio/
├── index.html          # HTML structure (semantic, no inline styles)
├── styles.css          # All styling (variables, animations, responsive)
├── script.js           # All interactivity (scroll, navigation, animations)
└── README.md           # This file
```

## Setup

1. **Download all three files** into a single folder
2. **Rename** `portfolio-index.html` → `index.html`
3. **Rename** `portfolio-styles.css` → `styles.css`
4. **Rename** `portfolio-script.js` → `script.js`
5. **Push to GitHub Pages repo** (`jaime-ordovas-curbera.github.io`)
6. **Deploy** — site is live at `https://jaime-ordovas-curbera.github.io`

## Features Added

### 1. **Scroll Progress Bar**
- Thin gradient line at the top of the page
- Fills as you scroll down the document
- Subtle visual feedback without being intrusive
- Uses CSS transitions for smooth animation

### 2. **Section Fade-In Animations**
- Content reveals smoothly as you scroll into view
- Intersection Observer (performant, no jank)
- Staggered animation for projects (cascading effect)

### 3. **Enhanced Project Cards**
- Subtle border and background transitions on hover
- Cards lift slightly (`translateY(-4px)`) for depth
- Smooth color transitions for better feedback

### 4. **Sticky Sidebar Navigation**
- Automatically highlights active section based on scroll position
- Activation point is 30% down the viewport (feels natural)
- Smooth underline animations on hover

### 5. **Back-to-Top Button**
- Appears when scrolled past 300px
- Smooth fade-in/out
- Smooth scroll back to top

### 6. **Keyboard Shortcuts**
- `j` — scroll to next project
- `k` — scroll to previous project
- `/` — search mode (ready to expand)
- Non-intrusive (only works when not typing in input)

### 7. **Smooth Hover Effects**
- Links have underline animations on hover
- Skill tags have subtle glow and lift effects
- Contact links have letter-spacing animation (small but satisfying)

### 8. **Mobile-Responsive Index**
- Sidebar becomes sticky top navigation on mobile
- No wasted space, clean reflow

## CSS Architecture

### Variables
```css
--background: #0b0d0f;
--surface: #111417;
--text: #f1f3f4;
--text-secondary: #a4abb3;
--text-muted: #69717a;
--transition-fast: 0.15s ease;
--transition-smooth: 0.3s ease;
--transition-slow: 0.5s ease;
```

### Organization
- **Reset & Variables** — foundation
- **Scroll Progress** — fixed element
- **Hero Section** — landing
- **Portfolio Layout** — grid structure
- **Sidebar Navigation** — sticky index
- **Content Sections** — main content
- **Bio & Text** — typography
- **Projects** — cards and highlights
- **Skills** — tags with interactions
- **Contact** — CTA section
- **Footer** — info
- **Back to Top** — utility button
- **Animations** — keyframes
- **Mobile Breakpoints** — responsive design

## JavaScript Functionality

### 1. Scroll Progress (`updateScrollProgress()`)
- Calculates scroll percentage
- Updates width of progress bar in real-time

### 2. Active Section Detection (`updateActiveSection()`)
- Finds which section is currently in view
- Updates index link styles
- Uses 30% viewport height as activation point

### 3. Smooth Navigation (`click` handlers on index links)
- Smooth scroll to target section
- Accounts for fixed header offset

### 4. Back-to-Top Toggle (`toggleBackToTop()`)
- Shows/hides button based on scroll position
- Smooth scroll to top on click

### 5. Intersection Observer (`sectionObserver`)
- Monitors when sections enter viewport
- Triggers fade-in animations

### 6. Keyboard Shortcuts
- Listens for `j`, `k`, `/` keys
- Ignores input fields
- Extensible for future features

### 7. Performance Optimization
- `requestAnimationFrame` for smooth scroll updates
- Event debouncing for resize/scroll
- `{ passive: true }` for scroll listeners (better performance)

## Future Feature Ideas

### Tier 1: Quick Wins (1-2 hours)
1. **Dark/Light Theme Toggle** — with localStorage persistence
2. **Reading Time Estimator** — "5 min read" labels on projects
3. **Project Filter by Technology** — click a skill tag to see related projects
4. **Scroll Position Memory** — return to same section on revisit
5. **Easter Eggs** — hidden keyboard commands (e.g., `?` for help menu)

### Tier 2: Medium Effort (3-6 hours)
1. **Expandable Project Details** — click project card to see full case study
2. **Timeline Component** — visual timeline of education/experience
3. **Contact Form** — Netlify Forms or Formspree integration
4. **Blog/Articles Section** — link to medium.com or dev.to posts
5. **Project Comparison Slider** — swipe between project details
6. **Social Proof Cards** — quotes from collaborators (if you have them)
7. **Skill Proficiency Levels** — visual bars or percentages next to skills

### Tier 3: Advanced (6+ hours)
1. **Interactive Project Showcase** — embedded demos or live previews
2. **Animated SVG Icons** — custom icons that animate on interaction
3. **PDF Resume Download** — button to download CV as PDF
4. **Dark Mode Detection** — auto-detect system preference on first visit
5. **Analytics Dashboard** — view traffic, popular sections (privacy-friendly)
6. **CMS Integration** — manage content from a headless CMS (Contentful, Sanity)
7. **Email Subscription** — newsletter signup for new projects/blog posts
8. **Internationalization** — Spanish/English language toggle (useful for Spain + global audience)

### Tier 4: Polish & Performance
1. **Web Fonts Optimization** — use `font-display: swap` for better performance
2. **Image Optimization** — lazy load any images, use WebP
3. **Core Web Vitals** — optimize LCP, FID, CLS
4. **PWA** — make installable as offline app
5. **Lighthouse Audit** — 90+ score across all metrics
6. **OpenGraph Meta Tags** — better social media preview

## Design Philosophy

- **Clarity over flashiness** — every element serves a purpose
- **Performance first** — no animations that hurt scroll speed
- **Accessibility** — proper ARIA labels, keyboard navigation
- **Intention** — every interaction has a reason
- **Restraint** — less is more (CSS variables help keep things DRY)

## Color Palette

| Purpose | Color |
|---------|-------|
| Background | `#0b0d0f` |
| Surface | `#111417` |
| Text | `#f1f3f4` |
| Text Secondary | `#a4abb3` |
| Text Muted | `#69717a` |
| Border | `#24292e` |
| Accent (optional) | `#667eea` → `#764ba2` |

## Responsive Breakpoints

- **Desktop** — 1150px max-width, full sidebar
- **Tablet (800px)** — sidebar becomes top nav, 48px padding
- **Mobile (500px)** — hero contact hidden, stacked layout

## Performance Notes

- **Scroll Progress Bar** — CSS-only transition, minimal repaint
- **Section Animations** — Intersection Observer (async, non-blocking)
- **Smooth Scroll** — `requestAnimationFrame` for optimal performance
- **No jQuery** — vanilla JS only, lightweight
- **No External Libraries** — everything is hand-written

## How to Customize

1. **Colors** — edit CSS variables at top of `styles.css`
2. **Typography** — adjust font sizes in `clamp()` functions for fluid scaling
3. **Animation Speed** — modify `--transition-*` variables
4. **Project Data** — edit HTML in `index.html`, re-deploy
5. **New Sections** — add new `<section>` with same class structure

## Deployment Checklist

- [ ] Update all links (GitHub, LinkedIn, email)
- [ ] Test on mobile (use Chrome DevTools)
- [ ] Test keyboard shortcuts
- [ ] Verify scroll progress bar is visible
- [ ] Check back-to-top button threshold (300px)
- [ ] Validate HTML (W3C Validator)
- [ ] Lighthouse audit (target 90+)
- [ ] Test in multiple browsers

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari 14+

## Questions?

This portfolio is designed to be extended. Feel free to:
- Add new sections
- Modify animations
- Integrate with backend services
- Add more interactive elements

Just keep the core philosophy: **intention, clarity, performance**.
