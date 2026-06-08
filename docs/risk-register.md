# Risk Register

This project has unusual emotional and social power, which means the risk profile is not only technical. The largest risks are consent, trust, safety, and ownership.

---

## Risk summary

| Risk | Severity | Likelihood | Status |
|---|---:|---:|---|
| Community feels their identity was used without consent | High | Medium | Must mitigate before pitch |
| Donation flow creates trust/legal issues | High | High | Avoid payments in MVP |
| Minor profiles/images used without guardian consent | Very High | Medium | Avoid until approved |
| Booking flow implies guaranteed safety/availability | High | Medium | Use request-only flow |
| Scraped images violate platform or creator expectations | Medium | High | Use only for private demo; replace before launch |
| Site becomes outdated after launch | Medium | Medium | Add simple update workflow |
| Support inquiries go unanswered | Medium | Medium | Confirm single owner for routing |
| Overbuilding delays pitch | Medium | High | Static-first MVP |
| Poverty-marketing tone damages dignity | High | Medium | Use dignity-first content guide |
| Ambiguous ownership of domain/repo/data | High | Medium | Agree before public launch |

---

## Consent risks

### Risk

The community may feel surprised in a negative way if the website looks official before they have approved it.

### Mitigation

Use prototype banner on every page:

```txt
Concept MVP prepared for review by Surfers of Bulleji. Final launch, donation links, profiles, images, and booking flows require community approval.
```

In the pitch, explicitly say:

```txt
Nothing here is public or official until you approve it.
```

---

## Minor safety and privacy

### Risk

Public reporting mentions young surfers. Publishing names, faces, or profiles of minors without guardian consent creates ethical and legal risk.

### Mitigation

- Do not create individual minor profiles in MVP.
- Use group/community language.
- Use placeholder cards.
- Require approval and guardian consent before publishing any minor profile.

---

## Donation risks

### Risk

Collecting money before official approval can look suspicious and create legal/accountability issues.

### Mitigation

- Do not connect Stripe, bank details, JazzCash, EasyPaisa, or GoFundMe links unless officially confirmed.
- Use “Support Inquiry” instead of “Donate Now.”
- Add a clear statement that the prototype does not collect payments.

---

## Booking and physical safety risks

### Risk

Surfing involves sea conditions, swimming ability, weather, instructors, gear, and emergency safety. A booking page could create false confidence.

### Mitigation

Use “Request a Surf Session.”

Add safety copy:

```txt
All surf sessions depend on sea conditions, weather, instructor availability, and participant swimming ability. Submission of this form does not confirm a session. The team will review and confirm manually on WhatsApp.
```

Do not collect payments for sessions in MVP.

---

## Content authenticity risks

### Risk

The website may sound like an outsider speaking for the community.

### Mitigation

- Treat all copy as draft copy.
- Replace with their words after interview.
- Add content approval workflow.
- Avoid “savior” framing.

---

## Image/media risks

### Risk

Images scraped from social media may not be approved for reuse on a separate website.

### Mitigation

- Use public images only for private demo.
- Store demo images locally only if necessary.
- Replace all images with approved assets before launch.
- Keep attribution/press links for external articles.

---

## Operational risks

### Risk

Forms create leads, but nobody from the community responds.

### Mitigation

Before launch, define:

```txt
Who receives support inquiries?
Who receives booking requests?
Who receives equipment donation offers?
Who responds on WhatsApp?
What is the expected response time?
```

---

## Technical risks

### Risk

The project becomes too big too early.

### Mitigation

MVP scope limit:

```txt
Static Astro pages
Static Boardroom data
Supabase forms
No auth
No admin
No payments
No AI bot
```

---

## Ownership risks

### Risk

The project becomes unclear: who owns the domain, repo, site, data, and brand?

### Mitigation

Before public launch, agree on:

```txt
Domain ownership
GitHub/repo access
Deployment ownership
Supabase ownership
Donation channel ownership
Admin/editor permissions
Maintenance responsibility
```

---

## Trust risks

### Risk

Visitors do not know whether the site is legitimate.

### Mitigation

After approval:

- Add official statement.
- Link from official Instagram/Facebook bio.
- Add real contact details.
- Add impact updates.
- Add transparent support categories.

---

## Red lines

Do not launch publicly if any of these are unresolved:

- No community approval
- No approved contact person
- No approved imagery
- No consent path for minors
- No support/donation accountability
- No safety disclaimer for sessions
- No clarity on who receives inquiries
