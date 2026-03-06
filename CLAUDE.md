# 1402 Celsius Ltd — Project Guide for Claude Code

## Project Overview
International procurement and sales company. Tagline: **Empowering Connections**.
Build a production-ready React website to replace a decommissioned Squarespace site.
Deploy via GitHub → Netlify (auto-deploy on push to main).

---

## Tech Stack
- **Framework:** Vite + React 18
- **Routing:** React Router v7
- **Styling:** Tailwind CSS
- **Fonts:** Cormorant Garamond (headings) + Jost (body) via Google Fonts
- **Deployment:** Netlify via GitHub CI/CD

---

## Brand Identity

### Colours (use as Tailwind CSS variables or custom config)
```
--slate:       #4a7585   (primary background)
--slate-dark:  #3a5e6e   (section alternate background)
--navy:        #1a2f3a   (dark sections, footer, hero)
--cream:       #f2edd8   (navigation bar background, light accents)
--cream-dark:  #e8e0c5   (credential badges, light cards)
--gold:        #c9b97a   (accent colour, labels, highlights)
--text-muted:  rgba(255,255,255,0.6)  (body text on dark backgrounds)
```

### Typography
- **Display/Headings:** Cormorant Garamond — use italic for emphasis words
- **Body/UI:** Jost — weights 300 (body), 400 (default), 500 (labels/buttons), 600 (strong)
- **Section labels:** 0.7rem, letter-spacing 0.35em, uppercase, gold colour
- **Buttons:** 0.78rem, letter-spacing 0.2em, uppercase, pill-shaped (border-radius: 50px)

### Design Principles
- Generous whitespace, refined and minimal
- Section labels in gold above every heading
- Cormorant headings with italic gold accent words
- Cards with subtle left-border gold hover effect
- Numbered service cards (01, 02...) with large faded number behind
- NO purple gradients, NO generic AI aesthetics, NO Inter/Roboto fonts

---

## Site Structure

```
src/
├── components/
│   ├── Nav.jsx              # Sticky nav with dropdown for About
│   ├── Footer.jsx           # Two-column footer with both offices
│   └── Newsletter.jsx       # Email signup band
├── pages/
│   ├── Home.jsx             # Hero + Partner grid + Services + Why Choose
│   ├── About.jsx            # Bio + Company overview + Credentials + Approach + Projects + FAQs
│   ├── Posts.jsx            # Blog/news grid
│   └── Contact.jsx          # Booking form + Offices
├── App.jsx                  # Router setup
├── main.jsx
└── index.css                # Tailwind imports + Google Fonts
```

---

## Pages & Content

### Navigation
- Logo: "1402" (large, Cormorant) + "CELSIUS" (Jost, spaced) + "EMPOWERING CONNECTIONS" (tiny)
- Links: HOME | ABOUT (dropdown: Overview, Capabilities, FAQs) | POSTS | LET'S TALK
- Nav background: cream (#f2edd8), sticky, height 100px

### HOME Page
**Hero section:**
- Background: dark navy-to-slate gradient with subtle grid pattern overlay
- Eyebrow: "Welcome to 1402 Celsius" (gold, uppercase, spaced)
- H1: "Your Partner in *International* Procurement and Sales"
- Subtext: connecting suppliers with buyers globally
- CTA button: "Our Services" (cream pill button)

**Partner with US section (6 cards, 2 rows × 3):**
1. Market Entry & Expansion Support — Unlock New Markets with Confidence
2. Procurement & Supply Chain Solutions — Reliable Procurement, Seamless Supply Chains
3. Cross-Cultural Communication & Negotiation — Bridge the Language Gap
4. Customer Connection & Sales Growth — Find the Right Buyers, Boost Your Sales
5. Supplier Relationship Management — Secure Quality, Consistency, and Reliability
6. Trade Compliance & Documentation Support — Simplify International Trade

**Core Services section (9 cards, 3×3 grid):**
01 Brokering Services — Connect, Trade, and Profit
02 Sourcing Expertise — Reliable Suppliers, Quality Products
03 International Expansion — Grow Beyond Borders
04 Cross-Cultural Communication — Bridge the Gap
05 Agricultural Financing & Investment Advisory — Secure Funding, Grow Your Business
06 Sustainability & Environmental Consultancy — Build a Sustainable Future
07 Market Intelligence & Research — Stay Informed, Stay Ahead
08 Supply Chain & Logistics Management — Optimise Your Operations
09 Agricultural Project Management — Turn Ideas into Reality

**Why Choose Us (3 cards, cream background):**
1. Tailored Solutions
2. Global Expertise
3. Reliable Partnership

**Newsletter band:** "Stay in the Loop" email signup

### ABOUT Page

**Bio section:**
- Name: Giuseppe Funaro, Founder & CEO
- 30+ years experience in international business, trading, procurement
- Background: telecommunications, media, agriculture
- Photo placeholder (left), text right

**Company overview:**
- Dynamic international procurement and sales company
- Connecting global markets with high-quality products and services
- UK + Bulgaria offices

**Credentials (3 badges, cream cards):**
1. International Trade Council — Accredited Member (Verification: 66035033242968, Expiry: 22.08.2025)
2. Capitalimprese® — Associazione Italiana Industriali Piccole e Medie Imprese
3. Business Council for Artificial Intelligence — Member

**Our Approach (3 columns):**
- Vision it / Build it / Sustain it

**Key Projects (numbered list):**
1. Expansion of 1402 Celsius (UK & Bulgaria, agricultural commodities, EU market with Ukrainian products)
2. Market Entry — Bluemar Ferries SL (COO)
3. Business Model Reshaping — Sitges Media Factory SL (30% increase in 9 months)
4. Telecommunications Leadership — CCC Alpha (€70M → €120M, EBITDA breakeven → €5M)
5. Strategic Partnerships — Dynegy Europe Communication (fibre optics Italy & Germany)

**FAQs (5 groups):**
- Company Overview
- Services and Offerings
- Trading and Procurement Process
- International Operations
- Sustainability and Compliance

### POSTS Page
Grid of blog post cards (3 columns):
1. Italy Surpasses Japan in Global Export Rankings
2. 1402 Celsius Ltd: Expanding Global Partnerships with All Medical S.p.A.
3. Revolutionising Outdoor Energy: SRW's Photovoltaic Fabric Technology
4. Optimising Global Supply Chains: Strategies for Efficiency and Resilience
5. Harnessing Strategic Partnerships for International Business Growth
6. Agricultural Market Trends (placeholder)

### CONTACT / LET'S TALK Page
- Hero: "Book an Appointment with One of Our Consultants"
- Form fields: First Name, Last Name, Email, Company, Area of Interest (dropdown with all 9 services), Message
- Area of Interest options: all 9 services listed above
- Two office address blocks below form

**UK Office:**
1402 Celsius Ltd, 20-22 Wenlock Road, London, N1 7GU, United Kingdom
Reg. No: 12475013 | VAT: GB 343 1702 32 | Phone: +44 208 123 1402

**Bulgaria Office:**
1402 Celsius Ltd, 1A Aton Street, Building 6, Plovdiv, 4002, Bulgaria
Reg. No: 207314767 | VAT: BG 207314767 | +44 208 123 1402

**Email:** info@1402celsius.com

### FOOTER
- Left: logo + tagline + short company description
- Middle: UK Office address block
- Right: Bulgaria Office address block + email
- Bottom bar: © 2025 1402 Celsius Ltd | Accreditation badges: ITC Accredited Member, Capitalimprese®, BCAI Member

---

## Component Standards

### Buttons
```jsx
// Primary (cream pill)
<button className="bg-cream text-navy px-10 py-3 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-white transition-all">
  Label
</button>

// Outline
<button className="border border-cream text-cream px-10 py-3 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-cream hover:text-navy transition-all">
  Label
</button>
```

### Section Label Pattern
```jsx
<p className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">Label Text</p>
<h2 className="font-cormorant text-5xl font-light leading-tight">Heading <em className="italic text-gold">accent</em></h2>
```

### Service Card Pattern
```jsx
<div className="relative bg-white/5 border border-white/10 p-12 hover:bg-white/10 transition-all group">
  <div className="absolute left-0 top-0 w-0.5 h-0 bg-gold group-hover:h-full transition-all duration-500" />
  <div className="font-cormorant text-5xl text-white/10 mb-5">01</div>
  <h3 className="text-xs tracking-[0.2em] uppercase text-cream font-medium mb-3">Service Name</h3>
  <p className="text-gold text-sm mb-4">Subtitle</p>
  <p className="text-white/60 text-sm leading-loose font-light">Description</p>
</div>
```

---

## Tailwind Config Additions
Add to `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      slate: { DEFAULT: '#4a7585', dark: '#3a5e6e', light: '#6a95a5' },
      cream: { DEFAULT: '#f2edd8', dark: '#e8e0c5' },
      navy: '#1a2f3a',
      gold: '#c9b97a',
    },
    fontFamily: {
      cormorant: ['"Cormorant Garamond"', 'serif'],
      jost: ['Jost', 'sans-serif'],
    },
  },
}
```

---

## Netlify Deployment

**netlify.toml** (place in project root):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

GitHub → Netlify auto-deploy is already configured.
Push to `main` branch triggers a build automatically.

---

## Code Standards
- Functional components only, no class components
- React Router v7 for all navigation (no page reloads)
- Smooth scroll to sections within About page using hash anchors
- Mobile responsive: single column below 768px
- All animations via Tailwind transitions only (no external animation libraries needed)
- Form is UI-only (no backend) — show success message on submit
- Keep components small and focused — one responsibility per file
