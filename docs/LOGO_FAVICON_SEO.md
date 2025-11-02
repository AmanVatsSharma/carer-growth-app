# Logo, Favicon & SEO Configuration Documentation

## Overview

This document explains the implementation of the logo as favicon and Google Search logo configuration for the IPD Education website.

## Implementation Details

### File Modified
- `app/(main)/layout.tsx` - Main layout file with comprehensive metadata configuration

### Logo Location
- **Path**: `public/logo/005_nbg.png`
- **Format**: PNG
- **Dimensions**: 545x482 pixels
- **URL**: `/logo/005_nbg.png` (relative) or `https://ipdeducation.in/logo/005_nbg.png` (absolute)

## Configuration Components

### 1. Favicon Configuration

The logo is configured as favicon using Next.js metadata API with multiple icon sizes for better browser support:

```typescript
icons: {
  icon: [
    { url: "/logo/005_nbg.png", sizes: "any" },
    { url: "/logo/005_nbg.png", sizes: "32x32", type: "image/png" },
    { url: "/logo/005_nbg.png", sizes: "96x96", type: "image/png" },
    { url: "/logo/005_nbg.png", sizes: "192x192", type: "image/png" },
  ],
  apple: [
    { url: "/logo/005_nbg.png", sizes: "180x180", type: "image/png" },
  ],
  shortcut: "/logo/005_nbg.png",
}
```

**Browser Support:**
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Apple devices (iPhone, iPad) via Apple Touch Icon
- Legacy browsers via shortcut icon

### 2. Open Graph Images (Social Media)

Configured for sharing on Facebook, LinkedIn, and other social platforms:

```typescript
openGraph: {
  images: [{
    url: logoUrl, // Absolute URL
    width: 545,
    height: 482,
    alt: "IPD Education Logo",
    type: "image/png",
  }],
}
```

**Features:**
- Absolute URLs for proper recognition by social platforms
- Optimized image metadata
- Proper alt text for accessibility

### 3. Twitter Card Images

Configured for enhanced Twitter sharing:

```typescript
twitter: {
  card: "summary_large_image",
  images: [logoUrl],
}
```

### 4. Google Search Logo (Structured Data)

JSON-LD structured data is implemented for Google Search recognition:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IPD Education",
  "url": "https://ipdeducation.in",
  "logo": "https://ipdeducation.in/logo/005_nbg.png",
  "description": "Expert guidance for study abroad...",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "admissions@ipdeducation.in"
  }
}
```

**Implementation:**
- Uses Next.js `Script` component with `beforeInteractive` strategy
- Properly injected into HTML head
- Valid JSON-LD format
- Meets Google's structured data requirements

## Google Search Requirements Compliance

### Logo Requirements (Met)
- ✅ **Format**: PNG (supports PNG/JPEG)
- ✅ **Size**: 545x482 (exceeds minimum 112x112)
- ✅ **Accessibility**: HTTPS accessible (via absolute URL)
- ✅ **Structured Data**: Properly defined in JSON-LD Organization schema
- ⚠️ **Aspect Ratio**: Not square (545x482), but Google accepts rectangular logos

### Recommendations
1. **Square Variant**: Consider creating a square version (1:1 ratio) for better Google Search display
2. **Multiple Sizes**: Create optimized versions at 112x112, 256x256, and 512x512 for better performance
3. **File Size**: Optimize PNG file size if it's large (>100KB)

## Environment Variables

The implementation uses the following environment variables:

- `SITE_URL` or `NEXT_PUBLIC_SITE_URL` - Base URL for absolute paths (defaults to `https://ipdeducation.in`)
- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact email for structured data (defaults to `admissions@ipdeducation.in`)

## Debugging

Console logs are included for debugging metadata configuration:

```javascript
// Server-side logging
console.log("[Layout] Metadata configuration:", {
  baseUrl,
  logoUrl,
  metadataLoaded: true,
});

console.log("[Layout] Structured data configuration:", {
  organizationData: organizationStructuredData,
  structuredDataLoaded: true,
});
```

Check server console (not browser console) for these logs during build/startup.

## Testing

### Favicon Testing
1. Visit the website and check browser tab for favicon
2. Test in multiple browsers (Chrome, Firefox, Safari, Edge)
3. Test on mobile devices (iOS Safari, Chrome Mobile)

### Social Media Testing
1. **Facebook**: Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. **LinkedIn**: Use [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
3. **Twitter**: Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### Google Search Testing
1. **Structured Data**: Use [Google Rich Results Test](https://search.google.com/test/rich-results)
2. **Logo Recognition**: Submit site to Google Search Console and verify logo appears in search results
3. **Validation**: Verify JSON-LD is valid using [Schema.org Validator](https://validator.schema.org/)

## Maintenance

### Regular Checks
- [ ] Verify logo appears in Google Search results (monthly)
- [ ] Test social media sharing previews (quarterly)
- [ ] Verify favicon displays correctly in all browsers (quarterly)
- [ ] Check structured data validity after major updates

### Updating Logo
If you need to update the logo:
1. Replace `public/logo/005_nbg.png` with new logo
2. Maintain same filename or update references in `app/(main)/layout.tsx`
3. Verify dimensions meet requirements
4. Test all configurations after update

## Flow Chart

```
┌─────────────────────────────────────────┐
│  Logo File: public/logo/005_nbg.png     │
└──────────────┬──────────────────────────┘
               │
               ├──────────────────────────────┐
               │                              │
               ▼                              ▼
    ┌──────────────────────┐    ┌──────────────────────────┐
    │  Favicon Config      │    │  Metadata Config         │
    │  (icons metadata)    │    │  (Open Graph, Twitter)   │
    └──────────┬───────────┘    └────────────┬─────────────┘
               │                             │
               ├─────────────────────────────┘
               │
               ▼
    ┌─────────────────────────────┐
    │  Structured Data            │
    │  (JSON-LD Organization)     │
    └──────────────┬──────────────┘
                   │
                   ▼
    ┌─────────────────────────────┐
    │  Google Search Recognition  │
    │  (Logo in Search Results)  │
    └─────────────────────────────┘
```

## Troubleshooting

### Favicon Not Showing
- Clear browser cache
- Check file exists at `/logo/005_nbg.png`
- Verify metadata icons configuration
- Check browser console for 404 errors

### Google Search Logo Not Appearing
- Verify structured data is valid JSON-LD
- Check logo URL is accessible via HTTPS
- Submit updated sitemap to Google Search Console
- Wait for Google to re-crawl (can take days/weeks)

### Social Media Preview Not Working
- Verify absolute URLs are used (not relative)
- Test with social media debuggers
- Clear social media platform cache
- Verify Open Graph/Twitter metadata in page source

## Related Files

- `app/(main)/layout.tsx` - Main configuration file
- `public/logo/005_nbg.png` - Logo image file
- `next-sitemap.config.js` - Site URL configuration
- `docs/LOGO_FAVICON_SEO.md` - This documentation file

## Additional Resources

- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Google Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data)
- [Schema.org Organization](https://schema.org/Organization)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

