# Color Contrast Guidelines - Audit Firms Dubai

## Overview

This document outlines the WCAG 2.1 Level AA compliant color usage guidelines for the Audit Firms Dubai website. All text must meet a minimum contrast ratio of **4.5:1** against its background.

## Approved Text Colors on White Background

| Color Class | Hex Code | Contrast Ratio | WCAG Level | Use Case |
|------------|----------|----------------|------------|----------|
| `text-neutral-900` | #111827 | **19.30:1** | AAA | Main headings, body text, important content |
| `text-neutral-800` | #1F2937 | **16.94:1** | AAA | Headings, emphasis text |
| `text-neutral-700` | #374151 | **12.63:1** | AAA | Subheadings, strong secondary text |
| `text-neutral-600` | #4B5563 | **7.05:1** | AA | Descriptions, metadata, secondary content |
| `text-neutral-500` | #6B7280 | **4.93:1** | AA | Captions only (minimum acceptable) |

### Custom Utility Classes

Use these semantic classes for consistent, accessible text:

```tsx
// Main text
<p className="text-brand-primary">Primary content</p>

// Secondary text
<p className="text-brand-secondary">Secondary information</p>

// Important secondary
<p className="text-brand-subtle">Emphasized secondary content</p>

// Captions/metadata (use sparingly)
<p className="text-brand-muted">Caption text</p>
```

## ❌ FORBIDDEN Text Colors (Fail WCAG AA)

These colors **DO NOT** meet WCAG 2.1 Level AA standards and must not be used for text:

| Color Class | Hex Code | Contrast Ratio | Issue |
|------------|----------|----------------|-------|
| `text-neutral-400` | #9CA3AF | **2.85:1** | FAILS - Too light |
| `text-neutral-300` | #D1D5DB | **1.61:1** | FAILS - Way too light |
| `text-gray-400` | Similar | **~2.8:1** | FAILS - Too light |
| `text-gray-300` | Similar | **~1.6:1** | FAILS - Way too light |

## Opacity Guidelines

### ❌ AVOID: Direct opacity on text

```tsx
// BAD - Reduces contrast unpredictably
<p className="text-neutral-900 opacity-60">Text</p>
<p className="opacity-50">Text</p>
```

### ✅ CORRECT: Use appropriate color values

```tsx
// GOOD - Predictable, WCAG compliant
<p className="text-neutral-600">Text</p>
<p className="text-white/90">Text on dark background</p>
```

## Special Cases

### Text on Dark Backgrounds

When using white text on dark backgrounds (e.g., `bg-primary-600`, `bg-primary-900`):

```tsx
// Main text - full white
<p className="text-white">Heading</p>

// Secondary text - use white with opacity
<p className="text-white/90 font-medium">Subtitle</p>
<p className="text-white/85">Body text</p>
```

**Note:** White on primary-600 (#0052D9) has a contrast ratio of ~12:1, which allows for some opacity adjustment while maintaining WCAG AA compliance.

### Brand References

"Farahat & Co" and "Est. 1985" must **ALWAYS** use:

```tsx
// Minimum acceptable
<p className="text-neutral-600 font-medium">
  A Farahat & Co Company | Est. 1985
</p>

// Preferred - higher contrast
<p className="text-neutral-700 font-semibold">
  A Farahat & Co Company | Est. 1985
</p>
```

❌ **NEVER** use opacity on brand text:
```tsx
// WRONG
<p className="opacity-75">Est. 1985</p>
<p className="text-neutral-400">Farahat & Co</p>
```

## Testing Your Colors

### Manual Testing

1. Use browser DevTools to inspect text color
2. Check contrast ratio in the Accessibility tab
3. Verify ratio is ≥ 4.5:1 for normal text
4. Verify ratio is ≥ 3:1 for large text (18pt+)

### Automated Testing

```bash
# Run Lighthouse accessibility audit
npm run lighthouse

# Run ESLint to catch forbidden patterns
npx eslint . --ext .tsx,.ts
```

### Online Tools

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)

## ESLint Protection

The project includes ESLint rules to prevent contrast violations:

```javascript
// Will trigger warnings:
<p className="text-neutral-400">Text</p>  // ⚠️ Fails WCAG
<p className="opacity-50">Text</p>        // ⚠️ Avoid opacity on text
```

## Common Patterns

### Hero Sections

```tsx
// White text on dark blue background
<section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
  <h1 className="text-4xl font-bold">Main Headline</h1>
  <p className="text-xl text-white/90 font-medium">Subheadline</p>
  <p className="text-lg text-white/90">Description</p>
</section>
```

### Footer Text

```tsx
<footer className="bg-neutral-50">
  {/* Links - good contrast on light gray */}
  <a className="text-neutral-600 hover:text-primary-600">Link</a>

  {/* Legal text */}
  <p className="text-neutral-600">© 2024 Company</p>

  {/* Trust badges */}
  <span className="text-neutral-700 font-medium">Ministry Approved</span>
</footer>
```

### Navigation

```tsx
<nav>
  {/* Active link */}
  <a className="text-primary-600 font-medium">Services</a>

  {/* Inactive link */}
  <a className="text-neutral-700 hover:text-primary-600">About</a>
</nav>
```

## Quick Reference Card

### ✅ SAFE Text Colors
- `text-neutral-900` through `text-neutral-500`
- `text-neutral-700` (recommended for secondary)
- `text-neutral-600` (minimum for regular text)
- `text-white` on dark backgrounds
- `text-white/90` on dark backgrounds

### ❌ FORBIDDEN
- `text-neutral-400`, `text-neutral-300`
- `text-gray-400`, `text-gray-300`
- `opacity-60` or lower on text
- Any color with < 4.5:1 contrast ratio

### 🔧 CSS Variables
```css
var(--text-primary)    /* #111827 - 19.30:1 */
var(--text-secondary)  /* #4B5563 - 7.05:1 */
var(--text-subtle)     /* #374151 - 12.63:1 */
var(--text-muted)      /* #6B7280 - 4.93:1 */
```

## Before & After Examples

### Logo Component

```tsx
// ❌ BEFORE (Fails WCAG)
<p className="text-xs opacity-75">Est. 1985</p>

// ✅ AFTER (Passes WCAG)
<p className="text-xs font-medium text-neutral-700">Est. 1985</p>
```

### Footer CTA

```tsx
// ❌ BEFORE
<div className="text-xs opacity-90">Free consultation</div>

// ✅ AFTER
<div className="text-xs font-medium text-white/95">Free consultation</div>
```

### Hero Subtext

```tsx
// ❌ BEFORE
<p className="text-lg opacity-80">Description</p>

// ✅ AFTER
<p className="text-lg text-white/90">Description</p>
```

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Understanding SC 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [WebAIM: Contrast and Color Accessibility](https://webaim.org/articles/contrast/)

## Updates & Maintenance

This document was created: 2024-01-23

**Last Updated:** 2024-01-23

**Review Frequency:** Quarterly or when brand colors change

**Contact:** Development team for questions or updates
