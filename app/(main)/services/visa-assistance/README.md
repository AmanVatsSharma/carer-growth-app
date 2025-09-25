## Visa Assistance Page (Module Docs)

This module contains the `/services/visa-assistance` page.

### Overview
- High-contrast luxury design using shadcn/ui components.
- Interactive sections: Cards, Accordions, Tabs, Carousel.
- Images loaded from `/public/illustrations/*` (placeholders used).

### Components Used
- `Button`, `Card`, `Separator`, `Accordion`, `Tabs`, `Carousel` (all in `@/components/ui/*`).
- `JourneyModal` used for CTAs to open the lead form.

### Flowchart

User visits page
  -> Hero CTA (JourneyModal) | Advisor button
  -> Overview (2-col)
  -> Services Grid (Cards)
  -> Process (Accordion)
  -> Country Guidance (Tabs)
  -> Why Choose IPD (Accordion + Image)
  -> Testimonials (Carousel)
  -> FAQ (Accordion)
  -> CTA Banner (JourneyModal + Download PDF)

### Assets
Place these files (or equivalents) under `/public/illustrations/`:
- `hero-visa.svg`, `overview.svg`, `service-1.svg`..`service-5.svg`
- `step-1.svg`..`step-5.svg`
- `flag-usa.svg`, `flag-uk.svg`, `flag-canada.svg`, `flag-australia.svg`, `flag-europe.svg`
- `choose-us.svg`, `faq.svg`, `cta.svg`

### Notes
- Keep dark theme default (see `(main)/layout.tsx`).
- The Carousel relies on Embla; already present in `components/ui/carousel.tsx`.
- Add `/public/guides/visa-guide.pdf` to enable the download button.


