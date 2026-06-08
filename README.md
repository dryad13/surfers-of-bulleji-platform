# Surfers of Bulleji Platform

A consent-safe concept MVP for a public website and support platform for **Surfers of Bulleji**, a grassroots surf community from Bulleji / Hawksbay, Karachi.

This repository starts as a planning-first MVP foundation. The goal is to build a fast, respectful, functional demo that can be shown to the community before anything is published as official.

> **Important:** This project must remain an unofficial prototype until Surfers of Bulleji approve the name usage, copy, images, forms, donation language, booking flow, and ownership model.

---

## Product thesis

Surfers of Bulleji already have the rarest thing: a real story.

The platform should not frame them as helpless. It should frame them as:

> Self-taught surfers from Karachi's coastal community building Pakistan's surf future with limited equipment, raw courage, and deep love for the sea.

The website is not just a portfolio site or a charity page. It is a movement platform designed to convert attention into support, bookings, equipment, partnerships, and long-term legitimacy.

---

## MVP objective

Build a private demo that proves this loop:

```txt
Story -> Trust -> Support inquiry -> Booking inquiry -> Impact tracking -> Repeat
```

The MVP should be impressive enough to pitch, but safe enough that it does not impersonate the community or collect money without consent.

---

## Core principles

1. **Consent before launch**
   - Do not publish as the official website until the community approves it.
   - Do not publish personal profiles, especially of minors, without explicit approval.

2. **Dignity-first storytelling**
   - Avoid poverty marketing.
   - Lead with talent, courage, athletic ambition, and community.

3. **No direct donations in v1**
   - Use support inquiries first.
   - Real payment channels must be approved by the community.

4. **Bookings are requests, not guarantees**
   - Use “Request a Surf Session,” not “Book Now,” until operations are confirmed.

5. **Static first, dynamic only where needed**
   - Keep content simple and fast.
   - Use forms only for actual user input.

---

## Recommended stack

```txt
Astro
Tailwind CSS
React islands for forms
Supabase for form submissions
Static content collections for pages/profiles/boards/press
Vercel or Netlify deployment
Cloudinary or Supabase Storage later
```

Astro is recommended because this is a content-first site with selective interactivity, not a full SaaS application yet.

---

## MVP pages

```txt
/
/story
/surfers
/support
/boards
/book
/media
/contact
```

### Home

Cinematic hero, story hook, impact stats, support CTA, booking CTA, press credibility, and gallery preview.

### Story

The origin story, written in their voice after approval, grounded in public reporting for the concept demo.

### Meet the Surfers

Approved profiles only. For the prototype, use limited public information and placeholder cards.

### Support

Support categories: boards, repair kits, leashes, fins, wax, rash guards, safety gear, media equipment, partnerships.

### Boardroom / Board Tracker

A public board inventory and sponsorship tracker. This is the signature feature.

### Request a Surf Session

Manual inquiry flow for lessons, group sessions, university trips, beach experiences, or media visits.

### Media

Press links, documentary references, downloadable press kit placeholder, media inquiry form.

### Contact

WhatsApp CTA, social links, volunteer inquiry, equipment donation inquiry.

---

## Repository map

```txt
/docs
  architecture.md
  mvp-scope.md
  data-model.md
  content-strategy.md
  pitch-script.md
  risk-register.md

/src
  Future Astro app source lives here.
```

---

## First build milestone

The first functional version should include:

- Static Astro pages
- Responsive Tailwind styling
- Prototype banner
- Support inquiry form
- Session request form
- Equipment donation form
- Board tracker from static data
- Press/media page
- Clear consent and approval notes

---

## Prototype banner copy

Use this on every page before approval:

> Concept MVP prepared for review by Surfers of Bulleji. Final launch, donation links, profiles, images, and booking flows require community approval.

---

## Launch checklist

Before public launch:

- [ ] Community approves website name usage
- [ ] Community approves all copy
- [ ] Community approves all images/videos
- [ ] Guardian consent handled for minors
- [ ] Official WhatsApp/contact confirmed
- [ ] Donation/support channels confirmed
- [ ] Booking responsibility confirmed
- [ ] Safety disclaimer approved
- [ ] Domain ownership agreed
- [ ] Admin/editor access agreed
- [ ] Impact reporting process agreed

---

## Project status

Current status: **concept MVP planning / pre-build**

Next step: scaffold Astro app and implement the public pages with static content and safe demo forms.
