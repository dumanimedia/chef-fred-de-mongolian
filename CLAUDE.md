# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static single-page website for **Chef Fred De Mongolian Ltd**, a Ugandan culinary consultation and training business. The site is currently a pure HTML/CSS/JavaScript implementation with no build process.

## Project Status

The repository shows signs of previous complexity (TanStack Router, Vite, etc.) but has been simplified to a single `index.html` file. All previous React/TypeScript components and build tooling have been removed (see git history).

## Architecture

- **Single-page application**: Entire site is in `index.html`
- **Styling**: Tailwind CSS v4 via CDN (configured inline)
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **JavaScript**: Vanilla JS inline (navbar scroll effects, form submission)
- **No build process**: Direct HTML deployment

### Custom Theme Colors

```
forest-green: #0D5C3A
terracotta: #D1623A
gold: #D5AF34
cream: #F7F1E9
light-cream: #EFE8D4
slate-gray: #384152
```

## Development

### Running Locally

Since this is static HTML, you can:

1. **Open directly in browser**: `open index.html` (or double-click the file)
2. **Use a simple HTTP server**:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

### Deployment

The site can be deployed to any static hosting service (GitHub Pages, Netlify, Vercel, etc.) by serving the `index.html` file at the root.

Current deployment appears to be on a platform that expects the logo at `/mnt/user-data/uploads/logo-mark.png` (see line 163 in index.html).

## Site Sections

1. **Navigation**: Fixed navbar with scroll effects
2. **Hero**: Main landing section with stats
3. **About**: Chef Fred's background and credentials
4. **Services**: 10 service offerings (consultation, training, catering, etc.)
5. **Why Choose Us**: Unique value propositions
6. **Signature Specialties**: Mongolian cuisine focus
7. **Process**: 4-step client engagement workflow
8. **Portfolio**: Project showcase gallery
9. **Testimonials**: Client success stories
10. **Training Programs**: 3 course offerings
11. **Certifications**: Credentials display
12. **Contact**: Contact form and information
13. **Footer**: Company information and links

## Key Features

- **Smooth scroll navigation**: Anchor links to section IDs
- **Custom animations**: fadeInUp, fadeInRight, float
- **Hover effects**: Service cards, nav links, portfolio items
- **Responsive design**: Mobile-first with Tailwind breakpoints
- **Form submission**: JavaScript handler (currently shows alert, no backend)

## Contact Information

- **Phone/WhatsApp**: +256 773 945 719
- **Email**: info@cheffreddemonglian.com
- **Location**: Kampala, Uganda
- **Social Media**:
  - Instagram: @Chef_Fred_Ug
  - YouTube: @Chef_Fred_Ug
  - Twitter: @Chef_Fred_Ug
  - Facebook: ChefFredUg

## SEO Optimizations

The site has been fully optimized for search engines:

### Meta Tags & Social Sharing
- **Primary meta tags**: Title, description, keywords, author
- **Open Graph tags**: Optimized for Facebook/LinkedIn sharing with proper image, title, and description
- **Twitter Cards**: Large image cards configured for Twitter sharing
- **Robots meta**: Configured for indexing with 7-day revisit frequency

### Structured Data (JSON-LD)
- **ProfessionalService schema**: Complete business information
- **Review schema**: All three testimonials include structured review data with ratings
- **Service offerings**: Detailed service catalog in structured format
- **Business hours**: OpeningHoursSpecification for local SEO
- **Social profiles**: All social media links included in sameAs array
- **Founder information**: Person schema for Chef Fred

### Technical SEO
- **Canonical URL**: Set to prevent duplicate content issues
- **Sitemap**: XML sitemap at `/public/sitemap.xml` with all major sections
- **Robots.txt**: Configured to allow all crawling and references sitemap
- **Image optimization**: All images have descriptive alt text and lazy loading (except hero image)
- **External links**: Proper `rel="noopener noreferrer"` attributes for security
- **Accessibility**: ARIA labels on social media icons
- **Favicon & icons**: Complete set including Apple touch icon and PWA icons
- **Manifest**: PWA manifest configured with theme colors

### Performance
- **Lazy loading**: Images below the fold use `loading="lazy"` attribute
- **CDN fonts**: Google Fonts loaded via CDN with preconnect
- **Inline critical CSS**: Tailwind config and custom animations inline

## Known Issues

1. **Logo path**: Hardcoded to `/mnt/user-data/uploads/logo-mark.png` which may not work in all deployment environments
2. **Form submission**: Currently client-side only with alert dialog, no backend integration
3. **External images**: Using Unsplash placeholder images that should be replaced with actual project photos
4. **Domain URLs**: All meta tags and structured data reference `cheffreddemonglian.com` - update if using different domain

## Git Workflow

- **Main branch**: `mucho` (not `main` or `master`)
- **Remote**: https://github.com/dumanimedia/chef-fred-de-mongolian.git

## Making Changes

When editing:

1. All changes are made directly to `index.html`
2. Test locally with a web server (not just file:// protocol) to ensure relative paths work
3. Verify responsive behavior across breakpoints (mobile, tablet, desktop)
4. Check that animations and transitions still work smoothly
5. Ensure accessibility (alt texts, semantic HTML, keyboard navigation)

## Future Considerations

The `.gitignore` suggests this project may return to a more complex setup with:
- Node.js dependencies
- Build tooling (Vite, Vinxi)
- Framework integration (TanStack, Nitro)

If reverting to a framework-based approach, refer to earlier commits (baedc48 and before) for the previous TanStack Router implementation.
