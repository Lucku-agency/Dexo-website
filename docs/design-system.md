# DEXO Design System

> Connecting U.S. companies with elite Brazilian tech professionals

**Version:** 1.0.0
**Last updated:** 2026-03-26
**Specialist:** @brad-frost (Atomic Design methodology)
**Aesthetic:** Dark premium SaaS with purple-cyan gradient identity

---

## Table of Contents

1. [Design Principles](#1-design-principles)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Component Specifications](#5-component-specifications)
6. [Section-by-Section Design Direction](#6-section-by-section-design-direction)
7. [Animation Principles](#7-animation-principles)
8. [Tailwind Configuration](#8-tailwind-configuration)
9. [Global CSS Variables](#9-global-css-variables)
10. [Icon System](#10-icon-system)
11. [Accessibility](#11-accessibility)
12. [Implementation Notes](#12-implementation-notes)

---

## 1. Design Principles

| Principle | Description |
|-----------|-------------|
| **Premium Dark** | Every surface defaults to dark. Light elements are intentional accents, never backgrounds. |
| **Gradient as Identity** | The purple-to-cyan gradient is the brand's visual signature. Use it sparingly on headlines, CTAs, and key visual moments. |
| **Depth through Glass** | Glassmorphism cards create layered depth. Backdrop blur + translucent borders separate content planes without hard edges. |
| **Motion with Purpose** | Every animation communicates state change or guides attention. No decorative motion. |
| **Progressive Disclosure** | Information density increases as users scroll deeper. Hero is spacious; lower sections are denser. |
| **Trust through Precision** | Pixel-perfect alignment, consistent spacing, and systematic typography signal reliability. |

---

## 2. Color System

### 2.1 Core Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--color-bg` | `#0B0F14` | `11, 15, 20` | Page background, base layer |
| `--color-surface` | `#111827` | `17, 24, 39` | Cards, sections, elevated surfaces |
| `--color-surface-hover` | `#1a2332` | `26, 35, 50` | Surface hover state |
| `--color-border` | `#1F2937` | `31, 41, 55` | Default borders, dividers |
| `--color-border-hover` | `#374151` | `55, 65, 81` | Border on interactive hover |

### 2.2 Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-purple` | `#7C3AED` | Primary accent, CTAs, active states |
| `--color-purple-light` | `#8B5CF6` | Hover states, lighter accent |
| `--color-purple-dark` | `#6D28D9` | Pressed/active states |
| `--color-purple-muted` | `rgba(124, 58, 237, 0.15)` | Purple tinted backgrounds |
| `--color-cyan` | `#22D3EE` | Secondary accent, links, trust signals |
| `--color-cyan-light` | `#67E8F9` | Highlights, data points |
| `--color-cyan-dark` | `#06B6D4` | Pressed/active secondary |
| `--color-cyan-muted` | `rgba(34, 211, 238, 0.15)` | Cyan tinted backgrounds |

### 2.3 Text Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-text-primary` | `#F9FAFB` | Headings, primary body text |
| `--color-text-secondary` | `#9CA3AF` | Descriptions, captions, metadata |
| `--color-text-tertiary` | `#6B7280` | Disabled text, placeholders |
| `--color-text-inverse` | `#0B0F14` | Text on light/colored backgrounds |

### 2.4 Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | `#10B981` | Success states, positive indicators |
| `--color-success-muted` | `rgba(16, 185, 129, 0.15)` | Success backgrounds |
| `--color-warning` | `#F59E0B` | Warning states |
| `--color-warning-muted` | `rgba(245, 158, 11, 0.15)` | Warning backgrounds |
| `--color-error` | `#EF4444` | Error states, destructive actions |
| `--color-error-muted` | `rgba(239, 68, 68, 0.15)` | Error backgrounds |

### 2.5 Gradient Definitions

```css
/* Brand gradient - primary signature */
--gradient-brand: linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%);

/* Brand gradient - reversed */
--gradient-brand-reverse: linear-gradient(135deg, #22D3EE 0%, #7C3AED 100%);

/* Subtle brand gradient for backgrounds */
--gradient-brand-subtle: linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(34, 211, 238, 0.1) 100%);

/* Hero mesh gradient */
--gradient-hero-mesh: radial-gradient(ellipse at 20% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
                      radial-gradient(ellipse at 80% 20%, rgba(34, 211, 238, 0.1) 0%, transparent 50%),
                      radial-gradient(ellipse at 50% 80%, rgba(124, 58, 237, 0.08) 0%, transparent 50%);

/* Surface gradient for premium feel */
--gradient-surface: linear-gradient(180deg, #111827 0%, #0B0F14 100%);

/* Glow for CTAs */
--gradient-glow-purple: 0 0 20px rgba(124, 58, 237, 0.4), 0 0 40px rgba(124, 58, 237, 0.2);
--gradient-glow-cyan: 0 0 20px rgba(34, 211, 238, 0.4), 0 0 40px rgba(34, 211, 238, 0.2);
```

### 2.6 Glass Properties

```css
/* Standard glass card */
--glass-bg: rgba(255, 255, 255, 0.03);
--glass-border: rgba(255, 255, 255, 0.08);
--glass-border-hover: rgba(255, 255, 255, 0.15);
--glass-blur: 12px;

/* Elevated glass (modals, dropdowns) */
--glass-elevated-bg: rgba(255, 255, 255, 0.05);
--glass-elevated-border: rgba(255, 255, 255, 0.1);
--glass-elevated-blur: 16px;

/* Navigation glass */
--glass-nav-bg: rgba(11, 15, 20, 0.8);
--glass-nav-blur: 20px;
```

---

## 3. Typography

### 3.1 Font Stack

```css
--font-heading: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
```

**Loading strategy:** Google Fonts with `display=swap`. Preload the two primary weights (Regular 400, Bold 700) for both families.

### 3.2 Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `--text-display` | 72px / 4.5rem | 800 (ExtraBold) | 1.05 | -0.02em | Hero headline only |
| `--text-h1` | 56px / 3.5rem | 700 (Bold) | 1.1 | -0.02em | Page titles |
| `--text-h2` | 48px / 3rem | 700 (Bold) | 1.15 | -0.015em | Section titles |
| `--text-h3` | 40px / 2.5rem | 700 (Bold) | 1.2 | -0.01em | Sub-section titles |
| `--text-h4` | 32px / 2rem | 600 (SemiBold) | 1.25 | -0.01em | Card titles, features |
| `--text-h5` | 24px / 1.5rem | 600 (SemiBold) | 1.3 | -0.005em | Small headings |
| `--text-h6` | 20px / 1.25rem | 600 (SemiBold) | 1.35 | 0 | Labels, eyebrows |
| `--text-lg` | 18px / 1.125rem | 400 (Regular) | 1.6 | 0 | Lead paragraphs |
| `--text-base` | 16px / 1rem | 400 (Regular) | 1.7 | 0 | Body text |
| `--text-sm` | 14px / 0.875rem | 400 (Regular) | 1.6 | 0.005em | Secondary text, captions |
| `--text-xs` | 12px / 0.75rem | 500 (Medium) | 1.5 | 0.02em | Badges, micro text |

### 3.3 Responsive Typography

| Token | Mobile (<768px) | Tablet (768-1024px) | Desktop (>1024px) |
|-------|-----------------|---------------------|-------------------|
| `--text-display` | 40px | 56px | 72px |
| `--text-h1` | 36px | 48px | 56px |
| `--text-h2` | 32px | 40px | 48px |
| `--text-h3` | 28px | 32px | 40px |
| `--text-h4` | 24px | 28px | 32px |

### 3.4 Gradient Text

```css
.gradient-text {
  background: linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

Apply gradient text to: hero headline, section eyebrow labels, key statistics, and selected feature titles. Do NOT apply to body text, navigation links, or form labels.

---

## 4. Spacing & Layout

### 4.1 Spacing Scale (8px base)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Micro gaps (icon-to-text inline) |
| `--space-2` | 8px | Tight padding (badges, tags) |
| `--space-3` | 12px | Compact padding (small cards) |
| `--space-4` | 16px | Default component padding |
| `--space-5` | 20px | Medium gaps |
| `--space-6` | 24px | Default section inner padding |
| `--space-8` | 32px | Large component gaps |
| `--space-10` | 40px | Section padding mobile |
| `--space-12` | 48px | Section gaps |
| `--space-16` | 64px | Large section padding |
| `--space-20` | 80px | Section vertical padding tablet |
| `--space-24` | 96px | Section vertical padding desktop |
| `--space-32` | 128px | Hero vertical padding |

### 4.2 Container

```css
--container-max: 1280px;
--container-padding: 24px;        /* mobile */
--container-padding-md: 32px;     /* tablet */
--container-padding-lg: 40px;     /* desktop */
```

### 4.3 Grid System

- 12-column grid on desktop
- 8-column on tablet
- 4-column on mobile
- Column gap: 24px (desktop), 16px (mobile)
- Row gap: 24px

### 4.4 Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 6px | Buttons, inputs, badges |
| `--radius-md` | 8px | Small cards, dropdowns |
| `--radius-lg` | 12px | Cards, modals |
| `--radius-xl` | 16px | Feature cards, hero elements |
| `--radius-2xl` | 24px | Large containers, images |
| `--radius-full` | 9999px | Pills, avatars, circular buttons |

---

## 5. Component Specifications

### 5.1 Buttons

#### Primary Button

```
Background:     linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)
Text:           #F9FAFB (white)
Font:           16px / SemiBold (600)
Padding:        12px 28px
Border-radius:  8px
Border:         none
Shadow:         0 0 0 0 rgba(124, 58, 237, 0)
Transition:     all 300ms cubic-bezier(0.4, 0, 0.2, 1)

:hover
  Background:   linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)
  Shadow:       0 0 20px rgba(124, 58, 237, 0.4), 0 0 40px rgba(124, 58, 237, 0.2)
  Transform:    translateY(-1px)

:active
  Background:   linear-gradient(135deg, #6D28D9 0%, #7C3AED 100%)
  Shadow:       0 0 10px rgba(124, 58, 237, 0.3)
  Transform:    translateY(0)

:focus-visible
  Outline:      2px solid #8B5CF6
  Outline-offset: 2px

:disabled
  Background:   #374151
  Text:         #6B7280
  Cursor:       not-allowed
  Shadow:       none
```

#### Secondary Button

```
Background:     transparent
Text:           #22D3EE
Font:           16px / SemiBold (600)
Padding:        12px 28px
Border-radius:  8px
Border:         1.5px solid #22D3EE
Transition:     all 300ms cubic-bezier(0.4, 0, 0.2, 1)

:hover
  Background:   rgba(34, 211, 238, 0.1)
  Border-color: #67E8F9
  Text:         #67E8F9
  Shadow:       0 0 15px rgba(34, 211, 238, 0.2)

:active
  Background:   rgba(34, 211, 238, 0.15)
  Border-color: #06B6D4

:focus-visible
  Outline:      2px solid #22D3EE
  Outline-offset: 2px
```

#### Ghost Button

```
Background:     transparent
Text:           #F9FAFB
Font:           16px / Medium (500)
Padding:        12px 28px
Border-radius:  8px
Border:         1.5px solid transparent
Transition:     all 300ms cubic-bezier(0.4, 0, 0.2, 1)

:hover
  Background:   rgba(255, 255, 255, 0.05)
  Border-color: rgba(255, 255, 255, 0.1)

:active
  Background:   rgba(255, 255, 255, 0.08)
```

#### Button Sizes

| Size | Padding | Font Size | Min Height |
|------|---------|-----------|------------|
| `sm` | 8px 16px | 14px | 36px |
| `md` | 12px 28px | 16px | 44px |
| `lg` | 16px 36px | 18px | 52px |

### 5.2 Cards

#### Glass Card (default)

```
Background:     rgba(255, 255, 255, 0.03)
Border:         1px solid rgba(255, 255, 255, 0.08)
Border-radius:  12px
Backdrop-filter: blur(12px)
Padding:        24px
Transition:     all 400ms cubic-bezier(0.4, 0, 0.2, 1)

:hover
  Border-color: rgba(255, 255, 255, 0.15)
  Background:   rgba(255, 255, 255, 0.05)
  Transform:    translateY(-2px)
  Shadow:       0 8px 32px rgba(0, 0, 0, 0.3)
```

#### Feature Card

```
Extends:        Glass Card
Padding:        32px
Icon:           48px, color: #7C3AED (purple)
Title:          20px / SemiBold, color: #F9FAFB
Description:    16px / Regular, color: #9CA3AF
Icon container: 56px x 56px, bg: rgba(124, 58, 237, 0.1), radius: 12px
Gap (icon to title): 16px
Gap (title to desc): 8px
```

#### Testimonial Card

```
Extends:        Glass Card
Padding:        32px
Quote:          18px / Regular, italic, color: #F9FAFB, line-height: 1.7
Author name:    16px / SemiBold, color: #F9FAFB
Author role:    14px / Regular, color: #9CA3AF
Avatar:         48px, radius: full, border: 2px solid rgba(255,255,255,0.1)
Divider:        1px solid rgba(255, 255, 255, 0.06), margin: 20px 0
```

#### Stat Card

```
Extends:        Glass Card
Padding:        24px
Text-align:     center
Number:         40px / Bold, gradient-text (purple to cyan)
Label:          14px / Medium, color: #9CA3AF, text-transform: uppercase, letter-spacing: 0.05em
Gap:            8px
```

### 5.3 Navigation

#### Desktop Navigation

```
Position:       fixed top
Width:          100%
Height:         72px
Z-index:        50
Padding:        0 40px
Display:        flex, align-center, justify-between
Transition:     all 300ms ease

-- On load (top of page) --
Background:     transparent
Border-bottom:  none

-- On scroll (after 50px) --
Background:     rgba(11, 15, 20, 0.85)
Backdrop-filter: blur(20px)
Border-bottom:  1px solid rgba(255, 255, 255, 0.06)

-- Structure --
Left:           Logo (auto height, max 32px tall)
Center:         Nav links (gap: 32px)
Right:          Language switcher + Primary CTA (gap: 16px)

-- Nav link --
Font:           14px / Medium (500)
Color:          #9CA3AF
Transition:     color 200ms ease
:hover          color: #F9FAFB
:active         color: #7C3AED
-- Active link: color: #F9FAFB, with a 2px bottom indicator in purple
```

#### Mobile Navigation

```
Breakpoint:     < 768px
Hamburger:      24px icon, color: #F9FAFB, top-right
Menu panel:     Full screen overlay
  Background:   rgba(11, 15, 20, 0.95)
  Backdrop-filter: blur(20px)
  Padding:      80px 24px 24px
  Links:        24px / SemiBold, color: #F9FAFB, gap: 24px, centered
  CTA:          Full width primary button at bottom
  Close:        X icon top-right, same position as hamburger
  Animation:    fade in 300ms + slide down 20px
```

### 5.4 Form Elements

#### Text Input

```
Background:     #111827
Border:         1.5px solid #1F2937
Border-radius:  8px
Padding:        12px 16px
Font:           16px / Regular, color: #F9FAFB
Placeholder:    color: #6B7280
Transition:     all 200ms ease

:hover
  Border-color: #374151

:focus
  Border-color: #22D3EE
  Shadow:       0 0 0 3px rgba(34, 211, 238, 0.15)
  Outline:      none

:error
  Border-color: #EF4444
  Shadow:       0 0 0 3px rgba(239, 68, 68, 0.15)
```

#### Select

```
Same as Text Input, plus:
  Arrow icon:   ChevronDown from Lucide, 16px, color: #9CA3AF, right: 12px
  Appearance:   none (custom arrow)
```

#### Textarea

```
Same as Text Input, plus:
  Min-height:   120px
  Resize:       vertical
  Line-height:  1.6
```

#### Label

```
Font:           14px / Medium (500)
Color:          #F9FAFB
Margin-bottom:  6px
Display:        block
```

#### Helper Text

```
Font:           13px / Regular
Color:          #6B7280
Margin-top:     4px

-- Error variant --
Color:          #EF4444
```

#### Form Group Spacing

- Label to input: 6px
- Input to helper: 4px
- Field group to field group: 20px
- Form to submit button: 32px

### 5.5 Badges / Tags

```
Background:     rgba(124, 58, 237, 0.15)
Color:          #8B5CF6
Font:           12px / Medium (500)
Padding:        4px 10px
Border-radius:  9999px
Letter-spacing: 0.02em
Text-transform: uppercase

-- Variants --
Cyan:           bg: rgba(34, 211, 238, 0.15), color: #22D3EE
Success:        bg: rgba(16, 185, 129, 0.15), color: #10B981
Neutral:        bg: rgba(255, 255, 255, 0.05), color: #9CA3AF
```

### 5.6 Dividers

```
Default:        1px solid rgba(255, 255, 255, 0.06)
Strong:         1px solid #1F2937
Gradient:       1px solid, background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)
```

### 5.7 Tooltip

```
Background:     #1F2937
Color:          #F9FAFB
Font:           13px / Regular
Padding:        6px 12px
Border-radius:  6px
Border:         1px solid rgba(255, 255, 255, 0.1)
Shadow:         0 4px 12px rgba(0, 0, 0, 0.4)
Arrow:          6px, same bg color
Max-width:      240px
```

---

## 6. Section-by-Section Design Direction

### 6.1 Navigation Bar

See component spec 5.3. Transparent-to-blur transition on scroll. Logo mark paired with "DEXO" wordmark in bold white. Center-aligned nav links: Home, Services, How It Works, Talent, About, Contact. Right side: language toggle (EN/PT flag icons) and "Get Started" primary CTA button sized `sm`.

### 6.2 Hero Section

```
Height:         100vh (min 700px)
Background:     --color-bg with --gradient-hero-mesh overlay
Visual layer:   Animated network/node pattern (canvas or CSS)
                - Dots: 2px, color: rgba(124, 58, 237, 0.15)
                - Lines: 1px, color: rgba(34, 211, 238, 0.08)
                - Animation: gentle floating drift, 30-60s loop
Content:
  Eyebrow:      Badge "Global Tech Recruitment"
  Headline:     Display size, gradient-text
                "Elite Brazilian Tech Talent for U.S. Companies"
  Subheadline:  18px / Regular, color: --color-text-secondary, max-width: 600px
                "Vetted senior engineers, seamless integration, zero hiring friction."
  CTAs:         Side by side (gap: 16px)
                Left:  Primary lg "Hire Top Talent"
                Right: Secondary lg "View Talent Pool"
  Trust bar:    Below CTAs, margin-top: 48px
                Row of 4-6 client logos, grayscale, opacity: 0.4
                Label: "Trusted by" in --text-xs, --color-text-tertiary

Layout:         Centered content, max-width: 800px
Scroll indicator: Animated chevron-down at bottom, subtle pulse
```

### 6.3 Social Proof / Metrics Strip

```
Background:     --color-surface with subtle top/bottom --gradient-brand-subtle
Padding:        64px 0
Layout:         4 stat cards in a row (responsive: 2x2 on tablet, stacked on mobile)
Stats:
  "500+"        Senior developers placed
  "98%"         Client retention rate
  "< 2 weeks"   Average time-to-hire
  "40%"         Cost savings vs. U.S. hires
Animation:      Numbers count up on scroll-into-view
```

### 6.4 Services / Value Proposition

```
Background:     --color-bg
Padding:        96px 0
Eyebrow:        Badge "What We Offer"
Title:          H2, gradient-text, "Why Companies Choose DEXO"
Subtitle:       Body text, --color-text-secondary, max-width: 640px, centered
Cards:          3-column grid (responsive: stacked on mobile)
                Each card: Feature Card spec
                Icons from Lucide: Shield, Zap, Globe (or similar)
  Card 1:       "Vetted Talent" -- rigorous technical screening
  Card 2:       "Fast Placement" -- 2-week average placement
  Card 3:       "Full Compliance" -- legal, tax, payroll handled
```

### 6.5 How It Works (Process Steps)

```
Background:     --color-surface
Padding:        96px 0
Eyebrow:        Badge "How It Works"
Title:          H2, "From Brief to Hire in 4 Steps"

Layout (desktop):
  Horizontal timeline, 4 steps equally spaced
  Steps connected by a gradient line (purple left to cyan right)
  Line: 2px height, behind step circles
  Step circles: 48px, numbered (1-4)
    Active fill: gradient (purple at step 1, blending to cyan at step 4)
    Border: 2px solid matching gradient stop
    Number: 20px / Bold, white

  Below each circle:
    Icon:        32px Lucide icon, color matches gradient position
    Title:       18px / SemiBold, white, margin-top: 16px
    Description: 14px / Regular, --color-text-secondary, max-width: 220px, centered

Steps:
  1. "Define Your Needs"     -- FileText icon, purple
  2. "We Source & Vet"       -- Search icon, purple-cyan blend
  3. "Interview & Select"    -- Users icon, cyan-purple blend
  4. "Onboard & Scale"       -- Rocket icon, cyan

Layout (mobile):
  Vertical timeline, line on left side
  Each step: circle left, content right
  Gap between steps: 48px

Animation:
  Line draws itself on scroll (stroke-dasharray animation)
  Steps fade in sequentially with 150ms stagger
```

### 6.6 Talent Showcase

```
Background:     --color-bg
Padding:        96px 0
Eyebrow:        Badge "Our Talent"
Title:          H2, "Meet Our Engineers"

Layout:         Horizontal scroll / carousel on mobile, 3-column grid on desktop
Cards:          Glass card with:
  Avatar:       64px, rounded-full, top-left
  Name:         18px / SemiBold, white
  Role:         14px / Regular, --color-text-secondary
  Skills:       Row of badges (React, Node.js, AWS, etc.) using tag component
  Experience:   14px, "8+ years" with cyan accent
  Availability: Green dot + "Available" or gray dot + "Engaged"

CTA below:      Secondary button "View Full Talent Pool"
```

### 6.7 Testimonials

```
Background:     --color-surface with --gradient-hero-mesh (subtle)
Padding:        96px 0
Eyebrow:        Badge "Client Stories"
Title:          H2, gradient-text, "What Our Clients Say"

Layout:         3-column masonry grid on desktop, carousel on mobile
Cards:          Testimonial Card spec
                Include 5-star rating row above quote (stars in --color-purple)
                Quote marks: Large decorative " in --color-purple-muted, 48px

Navigation:     Dot indicators below on mobile, no nav on desktop
```

### 6.8 FAQ Section

```
Background:     --color-bg
Padding:        96px 0
Title:          H2, centered, "Frequently Asked Questions"

Layout:         Single column, max-width: 768px, centered
Component:      Accordion items
  Closed:
    Background: transparent
    Border-bottom: 1px solid rgba(255, 255, 255, 0.06)
    Padding:    20px 0
    Question:   18px / Medium, --color-text-primary
    Icon:       ChevronDown, 20px, --color-text-secondary, right-aligned
  Open:
    Question:   color: --color-purple-light
    Icon:       Rotated 180deg, color: --color-purple
    Answer:     16px / Regular, --color-text-secondary, padding-top: 12px, line-height: 1.7
    Animation:  max-height expand, 300ms ease
```

### 6.9 CTA / Contact Section

```
Background:     Gradient mesh (more intense than hero)
                radial-gradient(ellipse at 30% 50%, rgba(124, 58, 237, 0.2), transparent 60%),
                radial-gradient(ellipse at 70% 50%, rgba(34, 211, 238, 0.15), transparent 60%),
                --color-bg
Padding:        128px 0
Layout:         Two columns (desktop), stacked (mobile)

Left column:
  Eyebrow:      Badge "Get Started"
  Title:        H2, gradient-text, "Ready to Build Your Dream Team?"
  Description:  18px, --color-text-secondary, max-width: 480px
  Trust items:  3 rows with check icons (--color-success)
                "No placement fees until you hire"
                "14-day trial period"
                "Dedicated account manager"

Right column:
  Form card:    Glass card (elevated variant)
  Fields:       Name, Email, Company, Role needed (select), Message (textarea)
  Submit:       Primary button lg, full-width, "Start Hiring"
  Privacy note: --text-xs, --color-text-tertiary, below button
```

### 6.10 Footer

```
Background:     #080B10 (darker than --color-bg)
Border-top:     1px solid rgba(255, 255, 255, 0.06)
Padding:        64px 0 32px

Layout:         4-column grid (desktop), stacked (mobile)

Column 1:       Logo + tagline (14px, --color-text-secondary) + social icons row
Column 2:       "Company" -- About, Careers, Blog, Press
Column 3:       "Services" -- Staff Augmentation, Dedicated Teams, Direct Hire
Column 4:       "Resources" -- FAQ, Case Studies, Tech Salaries Brazil, Contact

Link style:     14px / Regular, --color-text-secondary
                :hover color: #F9FAFB, transition: 200ms

Bottom bar:     Divider (gradient type), padding-top: 24px
                Left: (c) 2026 DEXO. All rights reserved.
                Right: Privacy Policy | Terms of Service
                Font: 13px, --color-text-tertiary
```

---

## 7. Animation Principles

### 7.1 Timing Functions

```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);   /* General transitions */
--ease-in:      cubic-bezier(0.4, 0, 1, 1);       /* Elements entering (fast start) */
--ease-out:     cubic-bezier(0, 0, 0.2, 1);       /* Elements leaving (fast end) */
--ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy interactions */
```

### 7.2 Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 150ms | Hover color changes, opacity |
| `--duration-normal` | 300ms | Button transitions, border changes |
| `--duration-slow` | 500ms | Card transforms, section reveals |
| `--duration-slower` | 700ms | Complex animations, page transitions |

### 7.3 Scroll-Triggered Animations

| Element | Animation | Trigger |
|---------|-----------|---------|
| Section headings | Fade up (0 -> 1 opacity, 20px -> 0 translateY) | In-view (threshold: 0.2) |
| Cards | Fade up with stagger (150ms between siblings) | In-view (threshold: 0.1) |
| Stat numbers | Count up from 0 | In-view (threshold: 0.5) |
| Process line | Stroke draw (left to right) | In-view (threshold: 0.3) |
| Process steps | Scale in (0.8 -> 1) with stagger | In-view, after line starts |

### 7.4 Micro-Interactions

| Element | Interaction | Animation |
|---------|-------------|-----------|
| Primary button | Hover | Glow shadow expands, slight lift (-1px) |
| Card | Hover | Border brightens, slight lift (-2px), shadow deepens |
| Nav link | Hover | Color shift to white, 200ms |
| Form input | Focus | Cyan border + glow ring, 200ms |
| Accordion | Toggle | Smooth height expansion, chevron rotates, 300ms |
| Logo | Hover | Subtle purple glow pulse |

### 7.5 Background Animations

```
Network nodes:
  Type:         Canvas-based or pure CSS
  Dot count:    ~50 (desktop), ~20 (mobile)
  Dot size:     2px
  Dot color:    rgba(124, 58, 237, 0.12)
  Line color:   rgba(34, 211, 238, 0.06)
  Line distance: 150px max connection distance
  Movement:     Brownian drift, 0.2px/frame
  FPS target:   30fps (requestAnimationFrame with throttle)
  Disable:      prefers-reduced-motion: reduce
```

### 7.6 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  /* Background canvas animation disabled entirely */
}
```

---

## 8. Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F14',
        surface: {
          DEFAULT: '#111827',
          hover: '#1a2332',
        },
        border: {
          DEFAULT: '#1F2937',
          hover: '#374151',
        },
        purple: {
          DEFAULT: '#7C3AED',
          light: '#8B5CF6',
          dark: '#6D28D9',
          muted: 'rgba(124, 58, 237, 0.15)',
        },
        cyan: {
          DEFAULT: '#22D3EE',
          light: '#67E8F9',
          dark: '#06B6D4',
          muted: 'rgba(34, 211, 238, 0.15)',
        },
        text: {
          primary: '#F9FAFB',
          secondary: '#9CA3AF',
          tertiary: '#6B7280',
          inverse: '#0B0F14',
        },
        success: {
          DEFAULT: '#10B981',
          muted: 'rgba(16, 185, 129, 0.15)',
        },
        warning: {
          DEFAULT: '#F59E0B',
          muted: 'rgba(245, 158, 11, 0.15)',
        },
        error: {
          DEFAULT: '#EF4444',
          muted: 'rgba(239, 68, 68, 0.15)',
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.15)',
        },
      },

      fontFamily: {
        heading: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        body: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'monospace',
        ],
      },

      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h3': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h4': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h5': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.005em', fontWeight: '600' }],
        'h6': ['1.25rem', { lineHeight: '1.35', letterSpacing: '0', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.005em', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '500' }],
      },

      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },

      borderRadius: {
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },

      boxShadow: {
        'glow-purple': '0 0 20px rgba(124, 58, 237, 0.4), 0 0 40px rgba(124, 58, 237, 0.2)',
        'glow-purple-sm': '0 0 10px rgba(124, 58, 237, 0.3)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.4), 0 0 40px rgba(34, 211, 238, 0.2)',
        'glow-cyan-sm': '0 0 10px rgba(34, 211, 238, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'elevated': '0 16px 48px rgba(0, 0, 0, 0.4)',
      },

      backdropBlur: {
        'glass': '12px',
        'glass-elevated': '16px',
        'nav': '20px',
      },

      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%)',
        'gradient-brand-reverse': 'linear-gradient(135deg, #22D3EE 0%, #7C3AED 100%)',
        'gradient-brand-subtle': 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(34, 211, 238, 0.1) 100%)',
        'gradient-surface': 'linear-gradient(180deg, #111827 0%, #0B0F14 100%)',
        'gradient-hero-mesh': 'radial-gradient(ellipse at 20% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(34, 211, 238, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(124, 58, 237, 0.08) 0%, transparent 50%)',
      },

      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(124, 58, 237, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },

      animation: {
        'fade-up': 'fade-up 0.5s var(--ease-default) forwards',
        'fade-in': 'fade-in 0.3s var(--ease-default) forwards',
        'scale-in': 'scale-in 0.5s var(--ease-default) forwards',
        'slide-down': 'slide-down 0.3s var(--ease-default) forwards',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'draw-line': 'draw-line 1.5s var(--ease-default) forwards',
      },

      transitionTimingFunction: {
        'default': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },

  plugins: [],
};

export default config;
```

---

## 9. Global CSS Variables

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* ── Colors ── */
    --color-bg: #0B0F14;
    --color-surface: #111827;
    --color-surface-hover: #1a2332;
    --color-border: #1F2937;
    --color-border-hover: #374151;

    --color-purple: #7C3AED;
    --color-purple-light: #8B5CF6;
    --color-purple-dark: #6D28D9;
    --color-purple-muted: rgba(124, 58, 237, 0.15);

    --color-cyan: #22D3EE;
    --color-cyan-light: #67E8F9;
    --color-cyan-dark: #06B6D4;
    --color-cyan-muted: rgba(34, 211, 238, 0.15);

    --color-text-primary: #F9FAFB;
    --color-text-secondary: #9CA3AF;
    --color-text-tertiary: #6B7280;
    --color-text-inverse: #0B0F14;

    --color-success: #10B981;
    --color-success-muted: rgba(16, 185, 129, 0.15);
    --color-warning: #F59E0B;
    --color-warning-muted: rgba(245, 158, 11, 0.15);
    --color-error: #EF4444;
    --color-error-muted: rgba(239, 68, 68, 0.15);

    /* ── Gradients ── */
    --gradient-brand: linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%);
    --gradient-brand-reverse: linear-gradient(135deg, #22D3EE 0%, #7C3AED 100%);
    --gradient-brand-subtle: linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(34, 211, 238, 0.1) 100%);
    --gradient-surface: linear-gradient(180deg, #111827 0%, #0B0F14 100%);
    --gradient-hero-mesh: radial-gradient(ellipse at 20% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
                          radial-gradient(ellipse at 80% 20%, rgba(34, 211, 238, 0.1) 0%, transparent 50%),
                          radial-gradient(ellipse at 50% 80%, rgba(124, 58, 237, 0.08) 0%, transparent 50%);

    /* ── Glass ── */
    --glass-bg: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(255, 255, 255, 0.08);
    --glass-border-hover: rgba(255, 255, 255, 0.15);
    --glass-blur: 12px;
    --glass-elevated-bg: rgba(255, 255, 255, 0.05);
    --glass-elevated-border: rgba(255, 255, 255, 0.1);
    --glass-elevated-blur: 16px;
    --glass-nav-bg: rgba(11, 15, 20, 0.85);
    --glass-nav-blur: 20px;

    /* ── Typography ── */
    --font-heading: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;

    /* ── Spacing ── */
    --container-max: 1280px;
    --container-padding: 24px;

    /* ── Radius ── */
    --radius-sm: 6px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-2xl: 24px;
    --radius-full: 9999px;

    /* ── Shadows ── */
    --shadow-glow-purple: 0 0 20px rgba(124, 58, 237, 0.4), 0 0 40px rgba(124, 58, 237, 0.2);
    --shadow-glow-purple-sm: 0 0 10px rgba(124, 58, 237, 0.3);
    --shadow-glow-cyan: 0 0 20px rgba(34, 211, 238, 0.4), 0 0 40px rgba(34, 211, 238, 0.2);
    --shadow-glow-cyan-sm: 0 0 10px rgba(34, 211, 238, 0.3);
    --shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.3);
    --shadow-elevated: 0 16px 48px rgba(0, 0, 0, 0.4);

    /* ── Timing ── */
    --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
    --duration-fast: 150ms;
    --duration-normal: 300ms;
    --duration-slow: 500ms;
    --duration-slower: 700ms;
  }

  /* ── Base resets ── */
  html {
    background-color: var(--color-bg);
    color: var(--color-text-primary);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    background-color: var(--color-bg);
  }

  ::selection {
    background-color: rgba(124, 58, 237, 0.3);
    color: #F9FAFB;
  }

  /* ── Scrollbar ── */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--color-bg);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: var(--radius-full);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-border-hover);
  }
}

@layer components {
  /* ── Gradient text utility ── */
  .gradient-text {
    background: var(--gradient-brand);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ── Glass card utility ── */
  .glass-card {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    transition: all var(--duration-slow) var(--ease-default);
  }

  .glass-card:hover {
    border-color: var(--glass-border-hover);
    background: var(--glass-elevated-bg);
    transform: translateY(-2px);
    box-shadow: var(--shadow-glass);
  }

  /* ── Glass card elevated ── */
  .glass-card-elevated {
    background: var(--glass-elevated-bg);
    border: 1px solid var(--glass-elevated-border);
    border-radius: var(--radius-lg);
    backdrop-filter: blur(var(--glass-elevated-blur));
    -webkit-backdrop-filter: blur(var(--glass-elevated-blur));
    box-shadow: var(--shadow-elevated);
  }

  /* ── Button glow ── */
  .btn-glow:hover {
    box-shadow: var(--shadow-glow-purple);
  }

  /* ── Section container ── */
  .section-container {
    max-width: var(--container-max);
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--container-padding);
    padding-right: var(--container-padding);
  }

  /* ── Gradient divider ── */
  .divider-gradient {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    border: none;
  }
}

@layer utilities {
  /* ── Animation delay utilities for staggered effects ── */
  .animate-delay-100 { animation-delay: 100ms; }
  .animate-delay-200 { animation-delay: 200ms; }
  .animate-delay-300 { animation-delay: 300ms; }
  .animate-delay-400 { animation-delay: 400ms; }
  .animate-delay-500 { animation-delay: 500ms; }
  .animate-delay-600 { animation-delay: 600ms; }
  .animate-delay-700 { animation-delay: 700ms; }
  .animate-delay-800 { animation-delay: 800ms; }
}

/* ── Responsive container padding ── */
@media (min-width: 768px) {
  :root {
    --container-padding: 32px;
  }
}

@media (min-width: 1024px) {
  :root {
    --container-padding: 40px;
  }
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 10. Icon System

**Library:** Lucide React (`lucide-react`)

**Default properties:**
- Size: 24px (adjustable per context)
- Stroke width: 1.5
- Color: `currentColor` (inherits from parent text color)

**Recommended icons by section:**

| Section | Icons |
|---------|-------|
| Navigation | `Menu`, `X`, `Globe` (lang) |
| Hero | `ChevronDown` (scroll) |
| Services | `Shield`, `Zap`, `Globe`, `Code`, `Users`, `Clock` |
| Process | `FileText`, `Search`, `Users`, `Rocket` |
| Talent | `MapPin`, `Briefcase`, `Star` |
| Contact | `Mail`, `Phone`, `MessageSquare`, `Send` |
| Footer | `Github`, `Linkedin`, `Twitter`, `Instagram` |
| General | `Check`, `ChevronRight`, `ArrowRight`, `ExternalLink` |

---

## 11. Accessibility

### Color Contrast

| Combination | Ratio | WCAG |
|-------------|-------|------|
| `#F9FAFB` on `#0B0F14` | 17.4:1 | AAA |
| `#F9FAFB` on `#111827` | 14.8:1 | AAA |
| `#9CA3AF` on `#0B0F14` | 6.3:1 | AA (large), AAA (normal) |
| `#9CA3AF` on `#111827` | 5.4:1 | AA |
| `#7C3AED` on `#0B0F14` | 4.1:1 | AA (large text only) |
| `#22D3EE` on `#0B0F14` | 10.2:1 | AAA |

### Guidelines

- Never use purple text below 18px on dark backgrounds (contrast too low for body text)
- Use cyan for interactive text elements (links) -- meets AAA
- Gradient text is decorative; ensure adjacent content conveys the same information
- All interactive elements must have `:focus-visible` outlines (2px, offset 2px)
- Minimum touch target: 44px x 44px on mobile
- Form inputs must have associated labels (not placeholder-only)
- Images require descriptive alt text
- Decorative background animations must respect `prefers-reduced-motion`

---

## 12. Implementation Notes

### Recommended Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS 3.4+ |
| Components | React Server Components + Client Components as needed |
| Animation | Framer Motion (scroll-triggered) or CSS only |
| Icons | lucide-react |
| Fonts | Google Fonts (Plus Jakarta Sans, Inter) via `next/font` |
| i18n | next-intl (EN/PT-BR) |

### Font Loading (Next.js)

```typescript
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});
```

### Component File Structure (Atomic Design)

```
src/
  components/
    atoms/
      Button.tsx
      Badge.tsx
      Input.tsx
      Label.tsx
      Tooltip.tsx
      Divider.tsx
    molecules/
      FormField.tsx          (Label + Input + HelperText)
      NavLink.tsx            (Link + active indicator)
      StatCard.tsx           (Number + Label)
      TestimonialCard.tsx    (Quote + Author)
      FeatureCard.tsx        (Icon + Title + Description)
      TalentCard.tsx         (Avatar + Info + Skills)
    organisms/
      Navbar.tsx             (Logo + NavLinks + CTA)
      HeroSection.tsx
      MetricsStrip.tsx
      ServicesGrid.tsx
      ProcessTimeline.tsx
      TalentShowcase.tsx
      TestimonialsGrid.tsx
      FAQAccordion.tsx
      ContactForm.tsx
      Footer.tsx
    templates/
      LandingPageLayout.tsx  (composes all organisms)
```

### Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Lighthouse Performance | > 90 |
| Bundle size (JS) | < 150KB gzipped |
| Font loading | < 500ms (preload critical) |

### Background Animation Performance

- Use `will-change: transform` on animated elements
- Canvas-based node animation should run at 30fps max
- Throttle `requestAnimationFrame` on mobile
- Disable entirely on devices with < 4GB RAM or when `prefers-reduced-motion` is set
- Use `IntersectionObserver` to pause off-screen animations

---

*Design system authored by @brad-frost via Design Chief routing.*
*DEXO -- Connecting U.S. companies with elite Brazilian tech professionals.*
