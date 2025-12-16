# resume Development Guidelines

Auto-generated from all feature plans. Last updated: 2025-12-16

## Active Technologies

- Next.js 16 + TailwindCSS 4.1.18 + TypeScript 5.9.3 (001-resume-modernization)

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx           # Root Layout (Pretendard/Inter)
│   ├── page.tsx             # Resume Preview
│   ├── globals.css          # TailwindCSS
│   └── api/pdf/route.ts     # PDF Generation API
├── components/
│   ├── resume/              # Resume Section Components
│   └── ui/                  # Reusable UI Components
├── data/
│   └── resume.ts            # Resume Data
├── types/
│   └── resume.ts            # Type Definitions
└── lib/
    └── pdf.ts               # PDF Utilities
```

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Generate PDF
npm run pdf

# Lint
npm run lint
```

## Code Style

- TypeScript 5.9.3: Strict mode enabled
- TailwindCSS 4.1.18: Custom color palette (Navy, Slate, Teal, Emerald)
- Components: Function components with TypeScript interfaces
- Naming: PascalCase for components, camelCase for functions

## Design System

### Colors
- Navy (#1A365D ~ #3182CE): Primary, headings, links
- Slate (#1A202C ~ #F7FAFC): Text, backgrounds
- Teal (#319795): AI/ML badge accent
- Emerald (#059669): Achievement metrics

### Typography
- Font: Pretendard (Korean), Inter (English)
- Name: 28px Bold
- Section: 14px Bold
- Body: 11px Regular

## Recent Changes

- 001-resume-modernization: Next.js 16 + TailwindCSS 4.1.18 + TypeScript 5.9.3

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->
