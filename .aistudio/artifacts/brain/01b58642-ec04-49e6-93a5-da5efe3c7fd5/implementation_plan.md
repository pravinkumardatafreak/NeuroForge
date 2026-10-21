# NeuroForge Academy — Mobile Ergonomics, Installable PWA & GitHub Pages Deployment

This upgrade transforms **NeuroForge Academy** into a mobile-first, offline-capable Progressive Web App (PWA) with thumb-friendly mobile navigation and an automated, zero-cost GitHub Pages (`github.io`) publishing pipeline that seamlessly updates whenever you push new study materials.

## User Review & Critical Decisions

> [!IMPORTANT]
> **100% Free & Future-Updateable Architecture**
> - **Zero Cost**: Both GitHub Pages hosting and Progressive Web App (PWA) installation use open browser standards and GitHub's free static hosting tier—there are no subscriptions, servers, or paid APIs required.
> - **Seamless Future Updates**: A versioned Service Worker with a stale-while-revalidate caching strategy and an in-app "Update Available" banner ensures that whenever you edit flashcards, projects, or notes and push to GitHub, your installed phone app automatically fetches the latest version.

- **Confirmed Decision 1 (Mobile Navigation)**: Sticky compact top app bar with a slide-out full sidebar drawer, paired with a 5-tab bottom quick-navigation bar in the natural thumb zone (`< 768px`).
- **Confirmed Decision 2 (Installable PWA & Offline Mode)**: Web App Manifest (`manifest.webmanifest`), custom Service Worker (`sw.js`) for full offline caching of all 13 study modules and diagrams, generated home-screen icons (`192x192`, `512x512`, `apple-touch-icon`), and an in-app **Install App** button (with iOS Safari "Add to Home Screen" guide).
- **Confirmed Decision 3 (GitHub Pages Publishing)**: Automated GitHub Actions deployment workflow, `.nojekyll` bypass, relative path compatibility (`./`), and a step-by-step publishing & update guide in the documentation.

---

## 1. Overview & Core Concept

- **What It Does**: Enables Pravin to open, install, and study from NeuroForge Academy on any Android or iOS smartphone—online or offline—and publish live to `https://<username>.github.io/<repo-name>/` with automatic updates on every `git push`.
- **Target Audience / Persona**: Pravin Kumar R rehearsing 90+ ML/DL viva flashcards, 7 flagship project defenses, and Zoho/Enterprise mock interviews on the go (commutes, waiting rooms, or right before an interview).
- **Key Value**: Eliminates the current mobile navigation blocker where the sidebar is hidden off-screen on phones, adds one-tap thumb switching between top study hubs, and makes the entire study cockpit installable like a native mobile app at zero cost.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Mobile Browsing & Drawer Navigation (`≤ 768px`)**:
   - A compact sticky top header displays the hamburger menu trigger, the active section title, live XP/Daily Goal pill, and an **Install App** button.
   - Tapping the hamburger button smoothly slides out the full 280px navigation drawer over a blurred backdrop scrim; selecting any module navigates immediately and auto-closes the drawer.
2. **One-Handed Bottom Quick-Nav Bar (`≤ 768px`)**:
   - Fixed at the bottom of the mobile viewport with 5 high-frequency destinations: **Map** (`home`), **10-Step** (`accelerator`), **Projects** (`present`), **Viva** (`viva`), and **War Room** (`zoho-mock`).
   - Touch targets meet the `44×44px` minimum ergonomic specification, and combined sticky surfaces stay strictly within the 15% mobile viewport height budget.
3. **In-App PWA Installation & Auto-Updates**:
   - On Android/Chrome/Desktop, clicking **Install App** triggers the native install prompt (`beforeinstallprompt`).
   - On iOS Safari, clicking **Install App** opens a concise 2-step modal showing how to tap **Share → Add to Home Screen**.
   - Once installed in standalone mode, the install button automatically hides. When offline, a subtle indicator confirms all flashcards and code blocks are running from local cache.

### Visual Identity & Theme
- **Aesthetic Direction**: Dark technical cockpit (`#07070f` deep canvas, `#0d0d1a` structural panels) preserving NeuroForge's existing high-contrast glassmorphism.
- **Color Palette & Mood**: High-contrast `#f0f0f8` primary typography with `#00ffc8` (cyan), `#7c3aed` (violet), and `#f59e0b` (amber) semantic accents.
- **Typography & Hierarchy**: `Outfit` for display/UI controls and `JetBrains Mono` (`tabular-nums`) for formulas, timers, and code pipelines. Mobile grids, cheat-sheet tables, and code blocks adapt cleanly to `375px–430px` viewports with horizontal scroll containment so nothing clips or overflows.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Relative Asset & Manifest Paths (`./`) for Subpath Hosting**
  - *Chosen Approach*: Configure `start_url: "./"`, `scope: "./"`, and relative asset paths in the Web App Manifest and Service Worker.
  - *Why*: GitHub Pages project sites are served from `https://<username>.github.io/<repo-name>/` rather than the root domain `/`. Relative paths guarantee the app and its Service Worker work identically on a root domain, a GitHub Pages repository subpath, and the preview environment.
  - *Alternatives Considered*: Root-relative paths (`/manifest.webmanifest`), which break when hosted under a repository subpath on `github.io`.

- **Decision 2: Network-First HTML/JS with Cache Fallback + Update Notification**
  - *Chosen Approach*: Precache all core HTML, CSS, JS, and diagram assets on first visit; serve cached assets instantly when offline, and check for updated files in the background when online.
  - *Why*: Since you are in the starting stage and will frequently add new flashcards, interview scripts, or projects, this ensures visitors and your installed mobile app always get your newest changes as soon as you push to GitHub—while still working 100% offline on a plane or subway.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

### Architecture & Component Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    GitHub Repository & GitHub Actions                   │
│   git push main ──► Deploy Workflow ──► Live at username.github.io      │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                PWA Service Worker & Offline Cache Layer                 │
│  ┌─────────────────────────┐  ┌───────────────────┐  ┌───────────────┐  │
│  │ Static Asset Precache   │  │ Web App Manifest  │  │ Auto-Update & │  │
│  │ (HTML/CSS/JS/Diagrams)  │  │ + Home Icons      │  │ Offline Toast │  │
│  └─────────────────────────┘  └───────────────────┘  └───────────────┘  │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│               Responsive UI Shell & Navigation Controller               │
│  ┌─────────────────────────┐  ┌───────────────────┐  ┌───────────────┐  │
│  │ Mobile Sticky Top Bar   │  │ Slide-Out Sidebar │  │ Mobile Bottom │  │
│  │ (Menu + Title + Install)│  │ Drawer + Backdrop │  │ 5-Tab Bar     │  │
│  └────────────┬────────────┘  └─────────┬─────────┘  └───────┬───────┘  │
│               └─────────────────────────┼────────────────────┘          │
│                                         ▼                               │
│                    window.navigateTo(sectionId) Router                  │
│             (Syncs Active States Across Sidebar & Bottom Bar)           │
└─────────────────────────────────────────────────────────────────────────┘
```

### Data Model & State
- **Browser Persistence (`localStorage`)**:
  - `nf_xp`: Cumulative study XP across modules and quizzes.
  - `nf_daily_goal_target` & `nf_daily_study_progress`: Daily module target and completion tracking.
  - `pwa_install_dismissed`: Remembers if the user dismissed the iOS install helper modal.
- **UI State Synchronization**:
  - `isMobileDrawerOpen`: Controls the slide-out drawer (`transform: translateX(0)`) and backdrop overlay visibility on viewports `≤ 768px`, automatically closing on route change or `Escape` key press.

### Interactive Component & State Mapping
- **Hamburger Menu Button & Scrim Overlay**: Toggles `.mobile-open` on `#sidebar` and `.visible` on `#sidebar-backdrop`; locks background body scroll when open on mobile.
- **Unified `navigateTo(sectionId)` Handler**: Updates active highlight states simultaneously on both the full sidebar links (`.nav-item`) and the mobile bottom quick-nav buttons (`.mobile-bottom-item`), updates the mobile header title, and closes the mobile drawer.
- **PWA Install Controller**: Listens for `beforeinstallprompt` and `appinstalled`, wires the header/sidebar **Install App** button, and provides an interactive iOS Safari instruction modal when WebKit is detected.
