# DEXO Website -- Frontend Architecture Document

**Version:** 1.0.0
**Date:** 2026-03-26
**Author:** Aria (Architect Agent)
**Status:** APPROVED FOR IMPLEMENTATION

---

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-26 | 1.0.0 | Initial architecture definition | Aria |

---

## 1. Project Overview

**DEXO** is a global tech talent recruitment consultancy connecting U.S. companies with top Brazilian technology professionals. The website serves as the primary lead-generation and conversion tool, presenting two core pages (Home and Jobs) in a premium dark-tech visual language, fully bilingual in English and Portuguese.

### Business Goals

- Generate qualified company leads (hiring managers seeking Brazilian talent)
- Attract top Brazilian tech candidates to apply through the platform
- Establish DEXO's premium brand identity in the global tech recruitment space
- Deliver a fast, accessible, SEO-optimized experience across all devices

### Constraints

- 2-page scope: Home + Jobs
- Bilingual: English (default) + Portuguese (BR)
- Premium dark-tech aesthetic (not negotiable -- brand identity)
- Production-ready from day one (no "MVP later" approach)

---

## 2. Technology Stack

| Category | Technology | Version | Purpose | Rationale |
|----------|-----------|---------|---------|-----------|
| Framework | Next.js | 14.x (App Router) | Full-stack React framework | SSG/SSR hybrid, file-based routing, image optimization, built-in API routes, Vercel-native deployment |
| Language | TypeScript | 5.x | Type safety | Catches errors at compile time, superior DX with autocompletion, self-documenting interfaces |
| Styling | Tailwind CSS | 3.x | Utility-first CSS | Rapid iteration on dark-theme design, excellent purging for minimal bundle, design-token friendly |
| i18n | next-intl | 3.x | Internationalization | First-class App Router + RSC support, type-safe message keys, ICU message format, middleware-based locale detection |
| Forms | React Hook Form | 7.x | Form state management | Uncontrolled components (minimal re-renders), Zod integration, small bundle (~9KB) |
| Validation | Zod | 3.x | Schema validation | TypeScript-first, composable schemas, shared between client and server |
| Animation | Framer Motion | 11.x | UI animations | Declarative API, layout animations, scroll-triggered animations, performant (WAAPI under the hood) |
| Icons | Lucide React | latest | Icon system | Tree-shakeable, consistent stroke-based icons, TypeScript support |
| Linting | ESLint + Prettier | 8.x / 3.x | Code quality | Next.js ESLint config + Prettier for formatting consistency |
| Testing | Vitest + Testing Library | 1.x / 14.x | Unit/component tests | Fast Vite-based runner, React Testing Library for component tests |
| E2E Testing | Playwright | 1.x | End-to-end tests | Cross-browser, reliable, built-in assertions |
| Package Manager | pnpm | 9.x | Dependency management | Fast installs, strict node_modules, disk-efficient |
| Deployment | Vercel | -- | Hosting + CDN | Native Next.js platform, edge functions, automatic preview deployments, analytics |

### Notable Exclusions (with rationale)

| Excluded | Why |
|----------|-----|
| next-i18next | Pages Router focused; next-intl has superior App Router/RSC integration |
| Styled Components / CSS Modules | Tailwind provides faster iteration for a 2-page site with a fixed design system |
| Redux / Zustand | No global state complexity warranting a store -- forms are local, language is URL-driven |
| shadcn/ui | Would accelerate development but the premium custom dark-tech design requires bespoke components; shadcn would need heavy override work |
| CMS (Contentful, Sanity) | 2 pages with static content -- translation JSON files are simpler, faster, and free |

---

## 3. Project Structure

```
dexo-website/
├── app/
│   ├── [locale]/                    # Dynamic locale segment (en | pt)
│   │   ├── layout.tsx               # Root layout with providers, fonts, metadata
│   │   ├── page.tsx                 # Home page
│   │   ├── jobs/
│   │   │   └── page.tsx             # Jobs listing page
│   │   └── not-found.tsx            # 404 page (localized)
│   ├── layout.tsx                   # Base HTML layout (lang attribute)
│   ├── globals.css                  # Tailwind directives + CSS custom properties
│   ├── robots.ts                    # robots.txt generation
│   └── sitemap.ts                   # sitemap.xml generation (with locale alternates)
│
├── components/
│   ├── layout/                      # Structural components
│   │   ├── Navbar.tsx               # Navigation with language switcher
│   │   ├── Footer.tsx               # Footer with links, social, legal
│   │   └── Section.tsx              # Reusable section wrapper (padding, max-width)
│   │
│   ├── sections/                    # Page section components
│   │   ├── home/
│   │   │   ├── HeroSection.tsx      # Hero with headline, CTA, animated background
│   │   │   ├── AboutSection.tsx     # About DEXO / mission
│   │   │   ├── ServicesSection.tsx   # What DEXO offers (for companies + candidates)
│   │   │   ├── ProcessSection.tsx   # How it works (step-by-step flow)
│   │   │   ├── ValuePropsSection.tsx # Why choose DEXO (stats, benefits)
│   │   │   ├── DifferentiatorsSection.tsx # Competitive advantages
│   │   │   ├── CompanyFormSection.tsx     # Lead capture form for companies
│   │   │   └── LinkedInSection.tsx       # LinkedIn CTA / social proof
│   │   └── jobs/
│   │       ├── JobsHeroSection.tsx   # Jobs page hero
│   │       ├── JobFilters.tsx        # Filter controls (role, seniority, tech)
│   │       ├── JobsList.tsx          # Job listings container
│   │       ├── JobCard.tsx           # Individual job card
│   │       └── CandidateFormSection.tsx  # Candidate application form
│   │
│   └── ui/                          # Design system primitives
│       ├── Button.tsx               # Primary, secondary, outline, ghost variants
│       ├── Card.tsx                 # Card container with glow effect
│       ├── Input.tsx                # Text input with floating label
│       ├── Textarea.tsx             # Multiline input
│       ├── Select.tsx               # Dropdown select
│       ├── Badge.tsx                # Tag/badge for skills, categories
│       ├── GlowEffect.tsx          # Reusable purple/cyan glow decoration
│       ├── AnimatedCounter.tsx      # Number animation for stats
│       ├── LanguageSwitcher.tsx     # EN/PT toggle component
│       └── Logo.tsx                 # DEXO logo component
│
├── lib/
│   ├── fonts.ts                     # Font configuration (Inter + JetBrains Mono)
│   ├── metadata.ts                  # SEO metadata helpers
│   ├── constants.ts                 # Brand colors, breakpoints, external URLs
│   └── utils.ts                     # cn() classname merger, formatters
│
├── hooks/
│   ├── useScrollAnimation.ts        # Intersection Observer for scroll reveals
│   └── useMediaQuery.ts             # Responsive breakpoint hook
│
├── messages/
│   ├── en.json                      # English translations
│   └── pt.json                      # Portuguese (BR) translations
│
├── public/
│   ├── images/
│   │   ├── og-image-en.png          # Open Graph image (English)
│   │   ├── og-image-pt.png          # Open Graph image (Portuguese)
│   │   └── hero-bg.webp             # Hero background (if not CSS-generated)
│   ├── fonts/                       # Self-hosted fonts (if not using next/font)
│   └── favicon.ico
│
├── styles/
│   └── animations.css               # Complex keyframe animations (if beyond Tailwind)
│
├── types/
│   ├── index.ts                     # Shared TypeScript interfaces
│   ├── job.ts                       # Job listing types
│   └── form.ts                      # Form data types
│
├── schemas/
│   ├── company-form.ts              # Zod schema for company lead form
│   └── candidate-form.ts            # Zod schema for candidate application form
│
├── i18n/
│   ├── config.ts                    # Locale configuration (supported locales, default)
│   ├── request.ts                   # next-intl request configuration
│   └── routing.ts                   # Locale routing configuration
│
├── middleware.ts                     # next-intl middleware for locale detection + redirect
├── next.config.mjs                   # Next.js configuration with next-intl plugin
├── tailwind.config.ts                # Tailwind configuration with DEXO design tokens
├── tsconfig.json                     # TypeScript configuration
├── .env.local                        # Environment variables (form endpoints, analytics)
├── .env.example                      # Documented env template
└── package.json
```

### Directory Rationale

| Directory | Purpose | Why This Structure |
|-----------|---------|-------------------|
| `app/[locale]/` | Locale-based routing | next-intl recommended pattern; generates `/en/` and `/pt/` routes automatically |
| `components/sections/home/` | Home page sections | Each section is a self-contained unit; easy to reorder, add, or remove sections |
| `components/ui/` | Design primitives | Reusable across both pages; consistent visual language; testable in isolation |
| `schemas/` | Zod validation schemas | Separate from components; shared between client validation and server action validation |
| `i18n/` | Internationalization config | Clean separation of i18n plumbing from application code |
| `messages/` | Translation files | Flat JSON structure; easy for translators; next-intl convention |

---

## 4. Component Architecture

### 4.1 Component Hierarchy

```
RootLayout (app/layout.tsx)
└── LocaleLayout (app/[locale]/layout.tsx)
    ├── Navbar
    │   ├── Logo
    │   ├── NavLinks (Home, Jobs)
    │   └── LanguageSwitcher
    │
    ├── [Page Content]
    │   │
    │   ├── HomePage (app/[locale]/page.tsx)
    │   │   ├── HeroSection
    │   │   │   ├── AnimatedCounter (stats)
    │   │   │   ├── Button (primary CTA)
    │   │   │   └── GlowEffect
    │   │   ├── AboutSection
    │   │   ├── ServicesSection
    │   │   │   └── Card (x6 service cards)
    │   │   ├── ProcessSection
    │   │   │   └── Card (x4 step cards)
    │   │   ├── ValuePropsSection
    │   │   │   ├── AnimatedCounter (stats)
    │   │   │   └── Badge
    │   │   ├── DifferentiatorsSection
    │   │   │   └── Card (x3-4 differentiator cards)
    │   │   ├── CompanyFormSection
    │   │   │   ├── Input (company name, email, etc.)
    │   │   │   ├── Select (company size, hiring needs)
    │   │   │   ├── Textarea (message)
    │   │   │   └── Button (submit)
    │   │   └── LinkedInSection
    │   │       └── Button (external link)
    │   │
    │   └── JobsPage (app/[locale]/jobs/page.tsx)
    │       ├── JobsHeroSection
    │       ├── JobFilters
    │       │   ├── Select (role filter)
    │       │   ├── Select (seniority filter)
    │       │   └── Badge (active filters)
    │       ├── JobsList
    │       │   └── JobCard (xN)
    │       │       ├── Badge (tech stack tags)
    │       │       └── Button (apply)
    │       └── CandidateFormSection
    │           ├── Input (name, email, LinkedIn)
    │           ├── Select (experience level, desired role)
    │           ├── Textarea (cover message)
    │           └── Button (submit)
    │
    └── Footer
        ├── Logo
        └── NavLinks + Social Icons
```

### 4.2 UI Primitives Specification

#### Button

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;        // renders as <Link> when provided
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}
```

- **primary**: `bg-[#7C3AED]` with hover glow effect
- **secondary**: `bg-[#22D3EE]` with dark text
- **outline**: transparent with `border-[#7C3AED]`
- **ghost**: transparent, text only, subtle hover

#### Card

```typescript
interface CardProps {
  children: React.ReactNode;
  variant: 'default' | 'glow' | 'elevated';
  className?: string;
}
```

- **default**: `bg-[#0B0F14]/80` with subtle border
- **glow**: default + purple/cyan gradient border glow on hover
- **elevated**: default + `backdrop-blur-sm` for glassmorphism

#### Input / Textarea / Select

```typescript
interface InputProps {
  label: string;        // used as floating label
  name: string;
  type?: string;
  error?: string;       // from React Hook Form
  register: UseFormRegister<any>;
}
```

- Dark background `bg-[#0B0F14]` with `border-gray-700`
- Focus state: `border-[#7C3AED]` with subtle glow
- Error state: `border-red-500` with error message below

---

## 5. Internationalization (i18n) Architecture

### 5.1 Strategy: Route-Based Locale Segments

```
dexo.com/en/          -> Home (English)
dexo.com/en/jobs      -> Jobs (English)
dexo.com/pt/          -> Home (Portuguese)
dexo.com/pt/jobs      -> Jobs (Portuguese)
dexo.com/             -> Redirects to /en/ (based on Accept-Language or default)
```

### 5.2 Configuration

```typescript
// i18n/config.ts
export const locales = ['en', 'pt'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
```

```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',      // always show /en/ or /pt/ in URL
  localeDetection: true,        // detect from Accept-Language on first visit
});

export const config = {
  matcher: ['/', '/(en|pt)/:path*'],
};
```

### 5.3 Translation File Structure

```json
// messages/en.json
{
  "metadata": {
    "title": "DEXO - Global Tech Talent",
    "description": "Connecting U.S. companies with top Brazilian tech professionals"
  },
  "nav": {
    "home": "Home",
    "jobs": "Jobs",
    "language": "Language"
  },
  "hero": {
    "headline": "Your Bridge to Elite Brazilian Tech Talent",
    "subheadline": "We connect U.S. companies with the top 1% of Brazilian developers, designers, and engineers.",
    "cta_company": "Hire Talent",
    "cta_candidate": "Find Jobs"
  },
  "about": {
    "title": "About DEXO",
    "description": "..."
  },
  "services": {
    "title": "Our Services",
    "company": {
      "title": "For Companies",
      "items": ["..."]
    },
    "candidate": {
      "title": "For Candidates",
      "items": ["..."]
    }
  },
  "process": {
    "title": "How It Works",
    "steps": [
      { "title": "Tell Us Your Needs", "description": "..." },
      { "title": "We Find the Match", "description": "..." },
      { "title": "Interview & Select", "description": "..." },
      { "title": "Start Working", "description": "..." }
    ]
  },
  "companyForm": {
    "title": "Let's Talk",
    "fields": {
      "name": "Your Name",
      "email": "Work Email",
      "company": "Company Name",
      "size": "Company Size",
      "roles": "Roles You Need",
      "message": "Tell Us More"
    },
    "submit": "Get Started",
    "success": "Thank you! We'll be in touch within 24 hours.",
    "errors": {
      "required": "This field is required",
      "email": "Please enter a valid email",
      "minLength": "Must be at least {min} characters"
    }
  },
  "jobs": {
    "title": "Open Positions",
    "filters": {
      "role": "Role",
      "seniority": "Seniority",
      "all": "All"
    },
    "card": {
      "apply": "Apply Now",
      "remote": "Remote",
      "posted": "Posted {date}"
    }
  },
  "candidateForm": {
    "title": "Apply to DEXO",
    "fields": {
      "name": "Full Name",
      "email": "Email",
      "linkedin": "LinkedIn Profile",
      "experience": "Years of Experience",
      "role": "Desired Role",
      "message": "Why DEXO?"
    },
    "submit": "Submit Application",
    "success": "Application received! Our team will review and reach out."
  },
  "footer": {
    "tagline": "Bridging talent across borders.",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "copyright": "2026 DEXO. All rights reserved."
  }
}
```

The `pt.json` file mirrors this exact structure with Portuguese translations.

### 5.4 Usage in Components

```typescript
// In any Server Component:
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');
  return (
    <section>
      <h1>{t('headline')}</h1>
      <p>{t('subheadline')}</p>
    </section>
  );
}
```

### 5.5 Language Switcher Implementation

The `LanguageSwitcher` component uses `next-intl`'s `usePathname` and `useRouter` to switch locale while preserving the current page path. It renders as a minimal toggle (EN | PT) in the navbar, styled consistently with the dark theme.

---

## 6. Design System & Styling

### 6.1 Design Tokens (Tailwind Config)

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        background: '#0B0F14',
        surface: {
          DEFAULT: '#111827',       // cards, elevated surfaces
          light: '#1F2937',         // hover states, secondary surfaces
        },
        accent: {
          purple: {
            DEFAULT: '#7C3AED',
            light: '#8B5CF6',
            dark: '#6D28D9',
          },
          cyan: {
            DEFAULT: '#22D3EE',
            light: '#67E8F9',
            dark: '#06B6D4',
          },
        },
        text: {
          primary: '#F9FAFB',       // white-ish
          secondary: '#9CA3AF',     // gray-400
          muted: '#6B7280',         // gray-500
        },
        border: {
          DEFAULT: '#374151',       // gray-700
          focus: '#7C3AED',         // purple on focus
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow-purple': 'radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)',
        'glow-cyan': 'radial-gradient(ellipse at center, rgba(34,211,238,0.10) 0%, transparent 70%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'counter': 'counter 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

### 6.2 Global CSS Custom Properties

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: #0B0F14;
    --foreground: #F9FAFB;
    --accent-purple: #7C3AED;
    --accent-cyan: #22D3EE;
    --radius: 0.75rem;
  }

  body {
    @apply bg-background text-text-primary antialiased;
  }

  /* Custom scrollbar for dark theme */
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: #0B0F14; }
  ::-webkit-scrollbar-thumb { background: #374151; border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: #4B5563; }
}
```

### 6.3 Typography Scale

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| H1 (Hero) | Inter | 4rem (64px) / responsive | 800 | `text-primary` |
| H2 (Section title) | Inter | 2.5rem (40px) | 700 | `text-primary` |
| H3 (Card title) | Inter | 1.5rem (24px) | 600 | `text-primary` |
| Body | Inter | 1rem (16px) | 400 | `text-secondary` |
| Small / Caption | Inter | 0.875rem (14px) | 400 | `text-muted` |
| Code / Tech tags | JetBrains Mono | 0.875rem | 500 | `accent-cyan` |

### 6.4 Responsive Breakpoints

| Breakpoint | Width | Columns | Behavior |
|-----------|-------|---------|----------|
| Mobile | < 640px | 1 | Stack all, full-width sections |
| Tablet | 640-1024px | 2 | Side-by-side cards, compact nav |
| Desktop | 1024-1280px | 3 | Full grid layouts |
| Wide | > 1280px | 3-4 | Max-width container (1280px), centered |

---

## 7. Form Architecture

### 7.1 Form Schema (Zod)

```typescript
// schemas/company-form.ts
import { z } from 'zod';

export const companyFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  companySize: z.enum(['1-10', '11-50', '51-200', '201-500', '500+']),
  rolesNeeded: z.string().min(1, 'Please specify roles'),
  message: z.string().optional(),
});

export type CompanyFormData = z.infer<typeof companyFormSchema>;
```

```typescript
// schemas/candidate-form.ts
import { z } from 'zod';

export const candidateFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  linkedin: z.string().url('Please provide a valid LinkedIn URL').optional().or(z.literal('')),
  experienceYears: z.enum(['0-2', '3-5', '6-10', '10+']),
  desiredRole: z.string().min(1),
  message: z.string().optional(),
});

export type CandidateFormData = z.infer<typeof candidateFormSchema>;
```

### 7.2 Form Submission Strategy

Forms submit via Next.js Server Actions (no external API dependency for MVP):

```typescript
// app/[locale]/actions.ts
'use server';

import { companyFormSchema, type CompanyFormData } from '@/schemas/company-form';

export async function submitCompanyForm(data: CompanyFormData) {
  const parsed = companyFormSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  // Phase 1: Send email notification (e.g., Resend, SendGrid)
  // Phase 2: Store in database (Supabase, PlanetScale, etc.)

  // For now, log and send email
  await sendNotificationEmail({
    to: 'leads@dexo.com',
    subject: `New lead: ${parsed.data.company}`,
    body: JSON.stringify(parsed.data, null, 2),
  });

  return { success: true };
}
```

**Trade-off analysis:** Server Actions keep form handling co-located with the page, eliminate the need for an API route, and provide built-in progressive enhancement (forms work without JavaScript). If DEXO later needs a CRM integration (HubSpot, Salesforce), the server action is the single place to add that integration.

### 7.3 Form UX Patterns

- **Client-side validation**: React Hook Form + Zod resolver provides instant feedback
- **Server-side validation**: Zod schema re-validated in the server action (defense in depth)
- **Loading state**: Button shows spinner + disabled state during submission
- **Success state**: Form replaced by success message with animation
- **Error state**: Field-level errors displayed below each input; toast for server errors
- **Honeypot field**: Hidden field to catch bot submissions (no CAPTCHA needed for launch)

---

## 8. Performance & SEO Strategy

### 8.1 Rendering Strategy

| Page | Strategy | Rationale |
|------|----------|-----------|
| Home (`/[locale]/`) | Static Generation (SSG) | Content is static; rebuild on deploy. Fastest possible TTFB. |
| Jobs (`/[locale]/jobs`) | Static Generation (SSG) | For launch, job listings are static. Switch to ISR or SSR when a jobs API/CMS is added. |
| 404 | Static Generation | Static error page per locale |

```typescript
// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default withNextIntl(nextConfig);
```

### 8.2 Core Web Vitals Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | < 2.5s | SSG, optimized hero image (WebP/AVIF), font preload |
| FID / INP | < 100ms | Minimal JavaScript, deferred animations, no heavy hydration |
| CLS | < 0.1 | Fixed dimensions on images, font-display: swap, no layout shifts |
| TTFB | < 200ms | Vercel Edge Network, static pages served from CDN |

### 8.3 Image Optimization

- Use `next/image` for all images (automatic WebP/AVIF, responsive srcSet, lazy loading)
- Hero background: CSS gradient + subtle SVG pattern (no large image needed)
- OG images: Pre-generated per locale (1200x630px)
- Favicon: Multi-format (ICO + Apple Touch Icon + SVG)

### 8.4 Font Strategy

```typescript
// lib/fonts.ts
import { Inter, JetBrains_Mono } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});
```

Using `next/font` automatically self-hosts fonts, eliminates external requests, and prevents CLS.

### 8.5 SEO Architecture

```typescript
// app/[locale]/layout.tsx
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
    metadataBase: new URL('https://dexo.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        pt: '/pt',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://dexo.com/${locale}`,
      siteName: 'DEXO',
      images: [`/images/og-image-${locale}.png`],
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`/images/og-image-${locale}.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}
```

**Structured Data** (JSON-LD): Added in the root layout for Organization schema, providing search engines with company name, logo, social profiles, and contact info.

---

## 9. Routing Architecture

### 9.1 Route Map

| Route | Page | Locale | Metadata |
|-------|------|--------|----------|
| `/` | Redirect | -- | 302 to `/en/` or `/pt/` based on detection |
| `/en` | Home | English | Full SEO metadata |
| `/en/jobs` | Jobs | English | Full SEO metadata |
| `/pt` | Home | Portuguese | Full SEO metadata |
| `/pt/jobs` | Jobs | Portuguese | Full SEO metadata |
| `/*` | 404 | Detected | Localized 404 page |

### 9.2 Navigation

- Navbar renders two links: Home and Jobs
- Active state: `border-b-2 border-[#7C3AED]` under active link
- Language switcher in navbar (rightmost position)
- Mobile: Hamburger menu with slide-in drawer (Framer Motion animated)

---

## 10. Animation Strategy

### 10.1 Animation Principles

1. **Performance first**: Animate only `transform` and `opacity` (GPU-composited properties)
2. **Purposeful motion**: Every animation communicates meaning (entrance, attention, feedback)
3. **Reduced motion**: Respect `prefers-reduced-motion` -- disable all non-essential animations
4. **Progressive**: Animations enhance but are not required -- content is visible without them

### 10.2 Animation Catalog

| Animation | Component | Trigger | Library |
|-----------|-----------|---------|---------|
| Fade-in + slide-up | All sections | Scroll into viewport | Framer Motion `whileInView` |
| Counter animation | Stats (ValuePropsSection) | Scroll into viewport | Framer Motion `useMotionValue` |
| Glow pulse | HeroSection background | Continuous | CSS `@keyframes` |
| Hover glow | Cards, Buttons | Mouse hover | Tailwind `group-hover` + CSS |
| Form success | CompanyForm, CandidateForm | Submission | Framer Motion `AnimatePresence` |
| Page transition | All pages | Navigation | Framer Motion `layout` |
| Mobile menu | Navbar drawer | Toggle | Framer Motion `animate` |

### 10.3 Scroll Animation Hook

```typescript
// hooks/useScrollAnimation.ts
'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollAnimation(options?: { once?: boolean; amount?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    amount: options?.amount ?? 0.2,
  });

  return { ref, isInView };
}
```

---

## 11. Environment Configuration

### 11.1 Environment Variables

```bash
# .env.example

# Deployment
NEXT_PUBLIC_SITE_URL=https://dexo.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # Google Analytics 4

# Email Service (for form submissions)
RESEND_API_KEY=re_xxxxxxxxxxxxx          # Resend.com API key
NOTIFICATION_EMAIL=leads@dexo.com

# Feature Flags
NEXT_PUBLIC_SHOW_JOBS=true               # Toggle Jobs page visibility
```

### 11.2 Variable Naming Convention

| Prefix | Visibility | Use |
|--------|-----------|-----|
| `NEXT_PUBLIC_` | Client + Server | Analytics IDs, site URL, feature flags |
| (no prefix) | Server only | API keys, secrets, email credentials |

---

## 12. Testing Strategy

### 12.1 Test Pyramid

| Level | Tool | Scope | Coverage Goal |
|-------|------|-------|---------------|
| Unit | Vitest | Utility functions, Zod schemas, hooks | 90% |
| Component | Vitest + Testing Library | UI primitives, form behavior | 80% |
| Integration | Vitest + Testing Library | Full section rendering with i18n | Key flows |
| E2E | Playwright | Form submission, navigation, language switch | Critical paths |
| Visual | Playwright screenshots | Dark theme rendering, responsive | Smoke test |

### 12.2 Key Test Scenarios

**Forms:**
- Valid submission renders success message
- Invalid fields show error messages
- Server-side validation catches bypassed client validation
- Honeypot field rejects bot submissions
- Form works in both locales

**i18n:**
- All pages render in both locales
- Language switcher preserves current page
- Middleware redirects correctly
- Metadata renders in correct language
- No missing translation keys (compile-time check via next-intl)

**Accessibility:**
- All interactive elements are keyboard navigable
- Color contrast meets WCAG AA (verified against dark theme)
- Form inputs have associated labels
- Focus management on mobile menu open/close
- `prefers-reduced-motion` disables animations

### 12.3 Running Tests

```bash
# Unit + Component tests
pnpm test                    # Run all tests
pnpm test:watch              # Watch mode
pnpm test:coverage           # With coverage report

# E2E tests
pnpm test:e2e                # Run Playwright tests
pnpm test:e2e --headed       # With browser visible

# Linting + Type checking
pnpm lint                    # ESLint
pnpm typecheck               # TypeScript compiler check
```

---

## 13. Deployment Plan

### 13.1 Vercel Configuration

```json
// vercel.json (optional -- most config is automatic)
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://www.google-analytics.com"
        }
      ]
    }
  ]
}
```

### 13.2 Deployment Workflow

```
Developer pushes to main
    |
    v
Vercel auto-builds
    |
    ├── Runs `pnpm install`
    ├── Runs `pnpm build` (next build)
    ├── Generates static pages for /en and /pt
    ├── Deploys to Vercel Edge Network (global CDN)
    └── Preview URL for PRs (automatic)
```

### 13.3 Domain Configuration

| Domain | Target |
|--------|--------|
| `dexo.com` | Production (Vercel) |
| `www.dexo.com` | Redirect to `dexo.com` |
| `*.vercel.app` | Preview deployments |

### 13.4 Environment Setup on Vercel

1. Connect GitHub repository to Vercel project
2. Set environment variables in Vercel dashboard:
   - `RESEND_API_KEY` (Production only)
   - `NOTIFICATION_EMAIL` (Production only)
   - `NEXT_PUBLIC_GA_ID` (Production only)
   - `NEXT_PUBLIC_SITE_URL` (per environment)
3. Enable Vercel Analytics (optional, built-in)
4. Configure custom domain

---

## 14. Security Considerations

| Concern | Mitigation |
|---------|-----------|
| XSS | React's default escaping + CSP headers + no `dangerouslySetInnerHTML` |
| CSRF | Server Actions use built-in CSRF protection (origin check) |
| Bot spam | Honeypot field on forms; rate limiting via Vercel Edge middleware if needed |
| Data exposure | No sensitive data on client; API keys are server-only env vars |
| Dependency supply chain | pnpm lockfile, Dependabot/Renovate for updates |
| Content injection | All user input validated with Zod; no raw HTML rendering |
| Security headers | X-Content-Type-Options, X-Frame-Options, CSP (see Vercel config) |

---

## 15. Developer Standards

### 15.1 Critical Coding Rules

1. **All components are Server Components by default.** Only add `'use client'` when the component uses hooks, event handlers, or browser APIs.
2. **Never hardcode text strings.** All user-facing text comes from `messages/{locale}.json` via `useTranslations()`.
3. **All form inputs must use React Hook Form `register()`.** No uncontrolled inputs with manual `onChange`.
4. **All images use `next/image`.** No raw `<img>` tags.
5. **No inline styles.** Use Tailwind classes or the design token system.
6. **Fetch error handling must check `response.ok`.** (See gotcha: `fetch()` does not throw on 4xx/5xx.)
7. **useEffect with async operations must include cleanup.** (See gotcha: race conditions on unmount.)
8. **Accessibility is not optional.** Every interactive element needs keyboard support and proper ARIA attributes.

### 15.2 Quick Reference

```bash
# Development
pnpm dev                     # Start dev server (localhost:3000)
pnpm build                   # Production build
pnpm start                   # Start production server locally

# Quality
pnpm lint                    # ESLint
pnpm typecheck               # TypeScript check
pnpm test                    # Vitest
pnpm test:e2e                # Playwright

# Key imports
import { useTranslations } from 'next-intl';           # i18n
import { useForm } from 'react-hook-form';              # forms
import { zodResolver } from '@hookform/resolvers/zod';  # validation
import { motion } from 'framer-motion';                 # animation
import Image from 'next/image';                         # images
import Link from 'next/link';                           # navigation
import { cn } from '@/lib/utils';                       # class merging
```

### 15.3 File Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `HeroSection.tsx` |
| Pages | `page.tsx` (Next.js convention) | `app/[locale]/page.tsx` |
| Hooks | camelCase with `use` prefix | `useScrollAnimation.ts` |
| Utilities | camelCase | `utils.ts`, `metadata.ts` |
| Types | PascalCase interfaces | `Job`, `CompanyFormData` |
| Schemas | camelCase with `Schema` suffix | `companyFormSchema` |
| Translations | kebab-case keys in JSON | `"hero.cta_company"` |
| CSS | kebab-case for custom properties | `--accent-purple` |

---

## 16. Future Considerations

These items are explicitly out of scope for v1.0 but the architecture accommodates them:

| Feature | How the Architecture Supports It |
|---------|----------------------------------|
| CMS integration | Translation files can be replaced by CMS API calls; page rendering stays the same |
| Dynamic job listings | Jobs page can switch from SSG to ISR/SSR by adding `revalidate` or removing `generateStaticParams` |
| CRM integration | Server Actions are the single integration point; add HubSpot/Salesforce API calls there |
| Blog / Resources | Add `app/[locale]/blog/` directory; same layout, same i18n pattern |
| Authentication | Add NextAuth.js or Clerk; protected routes via middleware |
| Analytics dashboard | Vercel Analytics built-in; or add PostHog/Mixpanel via `next/script` |
| A/B testing | Vercel Edge Config + middleware for variant routing |
| Additional languages | Add locale to `i18n/config.ts` + new `messages/{locale}.json` file |

---

## 17. Implementation Order

Recommended sequence for the development agent:

| Phase | Tasks | Estimated Effort |
|-------|-------|-----------------|
| **1. Scaffold** | `npx create-next-app`, install deps, configure Tailwind with DEXO tokens, setup i18n | 1-2 hours |
| **2. Design System** | Build all `components/ui/` primitives (Button, Card, Input, Select, Badge, etc.) | 2-3 hours |
| **3. Layout** | Navbar (with language switcher, mobile menu), Footer, Section wrapper | 1-2 hours |
| **4. Home Page** | All home sections in order (Hero through LinkedIn CTA) | 3-4 hours |
| **5. Company Form** | CompanyFormSection with RHF + Zod + Server Action | 1-2 hours |
| **6. Jobs Page** | JobsHero, JobCard, JobsList, JobFilters | 2-3 hours |
| **7. Candidate Form** | CandidateFormSection with RHF + Zod + Server Action | 1-2 hours |
| **8. Animations** | Scroll reveals, counters, hover effects, page transitions | 1-2 hours |
| **9. SEO & Meta** | Metadata per page/locale, sitemap, robots, structured data | 1 hour |
| **10. Testing** | Unit tests for schemas, component tests for forms, E2E for critical flows | 2-3 hours |
| **11. Polish** | Responsive review, accessibility audit, performance optimization, Lighthouse | 1-2 hours |
| **12. Deploy** | Vercel setup, env vars, domain, security headers | 30 min |

**Total estimated: 16-26 hours of implementation work.**

---

*Architecture document prepared by Aria (Architect Agent). This document is the single source of truth for the DEXO website technical architecture. The development agent should follow this document section by section.*

-- Aria, arquitetando o futuro
