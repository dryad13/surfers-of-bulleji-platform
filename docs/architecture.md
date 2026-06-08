# Architecture Plan

## Recommended architecture

```txt
Astro public website
  ├─ Static pages
  ├─ Content collections
  ├─ React islands for forms and light interactivity
  └─ Tailwind CSS styling

Supabase backend
  ├─ booking_requests
  ├─ support_inquiries
  ├─ equipment_donations
  ├─ volunteer_inquiries
  └─ press_inquiries

Deployment
  ├─ Vercel or Netlify
  ├─ Environment variables for Supabase
  └─ Analytics later
```

## Why Astro

The first version is primarily a storytelling and trust-building website. Astro is a strong fit because most pages can ship as static HTML, while interactive parts can be added as isolated client-side islands.

This avoids turning the MVP into a heavy app before the community has approved the project.

## When to use React islands

Use React islands only for components that need state or client-side behavior:

```txt
BookingForm.tsx
SupportForm.tsx
EquipmentDonationForm.tsx
VolunteerForm.tsx
GalleryLightbox.tsx
BoardFilter.tsx
```

Everything else should be Astro components.

## Proposed source structure

```txt
src/
  pages/
    index.astro
    story.astro
    surfers.astro
    support.astro
    boards.astro
    book.astro
    media.astro
    contact.astro

  layouts/
    BaseLayout.astro
    PageLayout.astro

  components/
    Hero.astro
    SectionHeader.astro
    StatCard.astro
    SupportNeedCard.astro
    BoardCard.astro
    PressCard.astro
    Footer.astro
    PrototypeBanner.astro

  components/islands/
    BookingForm.tsx
    SupportForm.tsx
    EquipmentDonationForm.tsx
    VolunteerForm.tsx
    GalleryLightbox.tsx

  content/
    boards/
    surfers/
    press/
    support-needs/
    impact-updates/

  data/
    navigation.ts
    site.ts

  lib/
    supabase.ts
    validators.ts
```

## Content strategy in architecture

Use Astro content collections or structured Markdown/MDX for editable content:

```txt
content/boards/board-01.md
content/press/reuters.md
content/support-needs/beginner-boards.md
content/impact-updates/first-demo.md
```

This keeps the pitch version simple and prevents early CMS overengineering.

## Backend responsibility

Supabase should only handle data submitted by users in the MVP:

- Session requests
- Support inquiries
- Equipment donation offers
- Volunteer inquiries
- Press inquiries

Do not store sensitive personal data beyond what is necessary.

## No-auth MVP

The first MVP should not include login or user accounts.

Admin operations can happen through:

```txt
GitHub content edits
Supabase dashboard
Manual review
```

Build a custom admin dashboard only after approval and real operational usage.

## Future admin architecture

Once the community approves and starts using the system, add:

```txt
/admin
  /login
  /boards
  /bookings
  /support
  /equipment
  /impact
  /media
```

At that point, options are:

1. Astro admin pages with server endpoints
2. Separate Next.js admin app
3. Supabase dashboard / NocoDB / Retool as temporary admin

Recommended path: use Supabase dashboard first, then build custom admin only after repeated usage patterns are clear.

## External services

### Required for MVP

```txt
Supabase database
Vercel or Netlify hosting
```

### Optional later

```txt
Resend for email notifications
Cloudinary or Supabase Storage for media
Plausible or Vercel Analytics
WhatsApp deep links
Calendar integration
AI assistant
```

## Environment variables

```txt
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=only_for_server_side_later
```

Do not expose service role keys to the browser.

## Security posture

- Validate all form input with Zod.
- Use Supabase Row Level Security before public launch.
- Do not enable public reads for submissions.
- Add spam protection before forms go public.
- Avoid collecting CNIC, exact addresses, or private details.
- Do not publish minors' details without guardian consent.

## Performance posture

- Compress all images.
- Avoid heavy social embeds on the homepage.
- Use local optimized images for demo.
- Lazy-load gallery images.
- Keep JavaScript islands minimal.

## Upgrade path

```txt
Phase 1: Static Astro concept MVP
Phase 2: Approved public site + Supabase forms
Phase 3: Admin workflow + impact tracking
Phase 4: Booking operations + WhatsApp notifications
Phase 5: AI assistant + partner/sponsor tooling
```
