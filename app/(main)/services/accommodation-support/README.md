## Accommodation Support Page (Module Docs)

Path: `/services/accommodation-support`

### Overview
- Long, premium landing page using shadcn/ui components.
- Sections: Hero, Overview, Options Grid, Process, Why Choose, Comparison Tabs, Testimonials, FAQ, CTA.
- Uses illustrations from `/public/illustrations/`.

### Flowchart

Visit page
  -> Hero (JourneyModal CTA)
  -> Overview (2-col)
  -> Options (4 Cards)
  -> Process (Accordion)
  -> Why Choose (Accordion + Image)
  -> Comparison (Tabs per option)
  -> Testimonials (Carousel)
  -> FAQ (Accordion)
  -> CTA Banner (JourneyModal + Browse)

### Assets to Add
- `hero-accommodation.svg`, `overview-accommodation.svg`
- `on-campus.svg`, `off-campus.svg`, `homestay.svg`, `temporary-stay.svg`
- `comparison-campus.svg`, `comparison-off.svg`, `comparison-homestay.svg`, `comparison-temp.svg`
- `why-accommodation.svg`, `faq-accommodation.svg`, `cta-accommodation.svg`

Place all under `/public/illustrations/`.

### Notes
- Dark theme default (see `(main)/layout.tsx`).
- Carousel provided by `components/ui/carousel` (Embla based).
- JourneyModal opens lead form used across site.


