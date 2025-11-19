# Developer Handoff Document

**Project**: Audit Firms Dubai Website  
**Date**: November 2024  
**Status**: Production Ready  
**Framework**: Next.js 16.0.3 with TypeScript

---

## 🎯 Project Overview

This is a bilingual (English/Arabic) SEO-optimized website for an audit firm in Dubai. The site is built with Next.js 16 using the App Router, TypeScript, and Tailwind CSS v4.

### Key Business Goals

- **Traffic**: 10,000+ organic visitors/month by month 6
- **Revenue**: $8,000/month rental income by month 18
- **Ranking**: Top 3 for 50+ high-commercial-value keywords

---

## 🚨 Critical Information

### Recent Major Changes (November 2024)

#### 1. Logo Integration ✅

**What Changed**:
- Replaced text-based logo with PNG image logo
- Logo file: `/public/images/hero/audit-firms-dubai-faraht-co.png`
- Size: 96px height (h-24) in navigation, responsive

**Files Modified**:
- `src/components/brand/Logo.tsx` - Complete rewrite to use Next.js Image component
- `src/components/layout/Navigation.tsx` - Logo wrapper updated
- `src/components/layout/Footer.tsx` - Uses same Logo component

**Important Notes**:
- Logo uses Next.js Image component for optimization
- Maintains aspect ratio automatically
- Size is controlled via `size` prop (sm, md, lg, xl)
- Current navigation uses `size="md"` which is 96px height

**If Logo Needs Adjustment**:
- Edit size classes in `Logo.tsx` → `sizeClasses` object
- Update Image component `width` and `height` props to match
- Test on both desktop and mobile

#### 2. Chatbot Integration ✅

**What Changed**:
- Removed custom LiveChatWidget component
- Integrated NewOaks.ai ChatPilot chatbot
- Chatbot appears in bottom-right corner

**Files Modified**:
- `src/app/[locale]/layout.tsx` - Added chatbot scripts in `<head>`
- `src/components/conversion/ConversionOptimization.tsx` - Removed LiveChatWidget import and usage
- **Deleted**: `src/components/conversion/LiveChatWidget.tsx`

**Configuration**:
```typescript
window.chatpilotConfig = {
  chatbotId: "950504931c274fe18d462ac867415204",
  domain: "https://www.newoaks.ai",
  chatModeOnly: true
}
```

**Script Location**: 
- Scripts are in `<head>` section of `src/app/[locale]/layout.tsx`
- Uses Next.js `<Script>` component with proper loading strategies

**If Chatbot Needs Changes**:
- Update configuration in `layout.tsx`
- Contact NewOaks.ai support for chatbot configuration changes
- Do NOT modify the embed script URL or structure

---

## 🏗️ Architecture Overview

### File Structure

```
src/
├── app/[locale]/          # All pages (locale-based routing)
│   ├── layout.tsx        # Main layout with chatbot scripts
│   └── [pages]/          # Individual pages
├── components/           # React components
│   ├── brand/           # Logo component
│   ├── layout/          # Navigation, Footer
│   ├── conversion/      # Conversion optimization (NO chatbot)
│   └── [others]/        # Other component categories
├── lib/
│   ├── constants/       # Site config, navigation
│   ├── content/        # Content data
│   ├── i18n/           # Translations (en.json, ar.json)
│   └── utils.ts        # Utility functions
└── middleware.ts        # i18n routing middleware
```

### Key Architectural Decisions

1. **Internationalization**: Custom i18n solution (not next-intl)
   - Dictionaries in `src/lib/i18n/dictionaries/`
   - Middleware handles locale routing
   - All pages under `[locale]` directory

2. **Styling**: Tailwind CSS v4 with inline theme config
   - Theme defined in `src/app/globals.css`
   - No separate `tailwind.config.ts` file
   - Custom utilities available globally

3. **Components**: shadcn/ui + Radix UI
   - UI components in `src/components/ui/`
   - Accessible by default
   - Customizable via Tailwind

4. **Type Safety**: Strict TypeScript
   - All components typed
   - Dictionary interface for i18n
   - Type-safe API routes

---

## 🔧 Common Development Tasks

### Adding a New Page

1. **Create page file**:
   ```typescript
   // src/app/[locale]/new-page/page.tsx
   import { getDictionary } from '@/lib/i18n/dictionaries'
   import type { Locale } from '@/lib/i18n/config'
   
   export default async function NewPage({
     params,
   }: {
     params: Promise<{ locale: string }>
   }) {
     const resolvedParams = await params
     const locale = resolvedParams.locale as Locale
     const dict = await getDictionary(locale)
     
     return <div>Page content</div>
   }
   ```

2. **Add to navigation** (if needed):
   - Edit `src/lib/constants/index.ts` → `MAIN_NAVIGATION`
   - Add translations to `en.json` and `ar.json`

3. **Add metadata**:
   ```typescript
   export async function generateMetadata({ params }) {
     return {
       title: 'Page Title',
       description: 'Page description',
     }
   }
   ```

### Updating Logo

**Current Logo**:
- File: `/public/images/hero/audit-firms-dubai-faraht-co.png`
- Component: `src/components/brand/Logo.tsx`
- Usage: `<Logo size="md" />` in Navigation and Footer

**To Change Logo**:
1. Replace PNG file (keep same name or update path)
2. Update Image `src` prop in `Logo.tsx` if name changed
3. Adjust `sizeClasses` if size needs change

**To Adjust Logo Size**:
- Edit `sizeClasses` object in `Logo.tsx`
- Update Image component `width` and `height` props
- Test responsive behavior

### Modifying Chatbot

**Current Setup**:
- Scripts in `src/app/[locale]/layout.tsx` `<head>` section
- Configuration object: `window.chatpilotConfig`
- Embed script: `https://www.newoaks.ai/embed.min.js`

**To Change Chatbot**:
1. Update `chatbotId` in `layout.tsx` if switching accounts
2. Contact NewOaks.ai for configuration changes
3. Do NOT modify embed script URL

**To Remove Chatbot**:
1. Remove Script components from `layout.tsx`
2. Remove `window.chatpilotConfig` script

### Adding Translations

1. **Add to English dictionary**:
   ```json
   // src/lib/i18n/dictionaries/en.json
   {
     "newSection": {
       "title": "Title",
       "description": "Description"
     }
   }
   ```

2. **Add to Arabic dictionary**:
   ```json
   // src/lib/i18n/dictionaries/ar.json
   {
     "newSection": {
       "title": "العنوان",
       "description": "الوصف"
     }
   }
   ```

3. **Update TypeScript types** (if needed):
   - Edit `src/lib/i18n/types.ts`
   - Add new section to Dictionary interface

4. **Use in component**:
   ```typescript
   const dict = await getDictionary(locale)
   return <h1>{dict.newSection.title}</h1>
   ```

---

## 🐛 Known Issues & Solutions

### Issue: Logo Not Displaying

**Symptoms**: Logo doesn't appear or shows broken image

**Solutions**:
1. Check file exists: `/public/images/hero/audit-firms-dubai-faraht-co.png`
2. Verify file is PNG format
3. Check Next.js Image component configuration
4. Clear `.next` cache: `rm -rf .next`
5. Restart dev server

### Issue: Chatbot Not Appearing

**Symptoms**: Chatbot bubble doesn't show in bottom-right

**Solutions**:
1. Check browser console for script errors
2. Verify scripts are in `<head>` of layout.tsx
3. Check `chatbotId` is correct
4. Verify domain is `https://www.newoaks.ai`
5. Check network tab for script loading

### Issue: Build Errors

**Common Causes**:
- TypeScript type errors
- Missing dependencies
- Environment variables not set

**Solutions**:
```bash
# Type check
npm run type-check

# Install dependencies
npm install

# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Issue: Internationalization Not Working

**Symptoms**: Wrong language or missing translations

**Solutions**:
1. Check locale is valid (`en` or `ar`)
2. Verify translations exist in both `en.json` and `ar.json`
3. Check middleware is working (see `src/middleware.ts`)
4. Verify `getDictionary` is called correctly

---

## 📦 Dependencies

### Key Packages

- `next`: 16.0.3 - Framework
- `react`: 18.x - UI library
- `typescript`: Latest - Type safety
- `tailwindcss`: v4 - Styling
- `framer-motion`: Animations
- `lucide-react`: Icons
- `react-hook-form`: Forms
- `zod`: Validation

### Important Notes

- **Tailwind v4**: Uses inline theme config in `globals.css`
- **Next.js Image**: Always use for images (not `<img>`)
- **TypeScript**: Strict mode enabled - fix all type errors
- **ESLint**: Configured - run `npm run lint` before committing

---

## 🧪 Testing Checklist

Before deploying changes:

- [ ] Logo displays correctly on all pages
- [ ] Chatbot appears and functions
- [ ] Navigation works in both languages
- [ ] All pages load without errors
- [ ] Forms submit correctly
- [ ] Mobile responsive design works
- [ ] TypeScript compiles without errors
- [ ] ESLint passes
- [ ] Build succeeds (`npm run build`)

---

## 🚀 Deployment

### Pre-Deployment Checklist

1. **Environment Variables**:
   - Set all required env vars in deployment platform
   - Verify `NEXT_PUBLIC_SITE_URL` is correct

2. **Build Test**:
   ```bash
   npm run build
   npm run start
   ```

3. **Verify**:
   - Logo displays
   - Chatbot works
   - All pages accessible
   - Forms functional
   - No console errors

### Deployment Platforms

**Vercel** (Recommended):
- Automatic deployments on push
- Preview deployments for PRs
- Environment variables in dashboard
- Analytics included

**Other Platforms**:
- Ensure Node.js 22.x support
- Set build command: `npm run build`
- Set start command: `npm run start`
- Configure environment variables

---

## 📞 Support Resources

### Documentation

- **README.md**: General project overview
- **fixes.md**: Common fixes and development rules
- **Brand Guidelines**: `../brand-guidelines.md`
- **Content Guide**: `../content/content-style-guide.md`

### External Services

- **Chatbot**: NewOaks.ai ChatPilot
  - Dashboard: https://www.newoaks.ai
  - Support: Contact through dashboard

- **Hosting**: Vercel (if deployed there)
  - Dashboard: https://vercel.com
  - Documentation: https://vercel.com/docs

---

## 🔄 Version History

### November 2024

- ✅ Logo integration (PNG image)
- ✅ Chatbot integration (NewOaks.ai)
- ✅ Navigation enhancements
- ✅ TypeScript type safety improvements
- ✅ Performance optimizations

---

## 📝 Notes for Next Developer

1. **Logo**: Currently sized at 96px height. Adjust `sizeClasses` in `Logo.tsx` if needed.

2. **Chatbot**: Configuration is in `layout.tsx`. Contact NewOaks.ai for changes.

3. **Internationalization**: Always add translations to both `en.json` and `ar.json`.

4. **TypeScript**: Fix all type errors before committing. Strict mode is enabled.

5. **Styling**: Use Tailwind utilities. Theme config is in `globals.css`.

6. **Components**: Follow existing patterns. Use shadcn/ui components when possible.

7. **Performance**: Use Next.js Image component for all images.

8. **Accessibility**: Ensure all interactive elements have proper ARIA labels.

---

## ✅ Handoff Checklist

- [x] README.md updated with latest information
- [x] HANDOFF.md created with detailed guide
- [x] Logo integration documented
- [x] Chatbot integration documented
- [x] Common tasks documented
- [x] Troubleshooting guide included
- [x] Architecture overview provided
- [x] Deployment instructions included

---

**Good luck with the project! 🚀**

If you have questions, refer to this document first, then check the README.md and fixes.md files.

