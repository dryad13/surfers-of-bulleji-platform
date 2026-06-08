# Data Model

This document defines the initial data model for the Surfers of Bulleji platform.

The MVP should keep most public content static. Supabase should only store user-submitted inquiries until the project is officially approved.

---

## Public static content

These can live in Astro content collections, MDX, JSON, or TypeScript files during the prototype stage.

### surfers

Use only approved profiles for public launch.

```ts
export type SurferProfile = {
  id: string;
  name: string;
  role: string;
  age?: number;
  bio: string;
  quote?: string;
  imageUrl?: string;
  isPublic: boolean;
  approvalStatus: 'placeholder' | 'public-source' | 'approved';
};
```

### boards

```ts
export type Board = {
  id: string;
  name: string;
  type: 'longboard' | 'shortboard' | 'foamboard' | 'bodyboard' | 'unknown';
  status: 'in-use' | 'needs-repair' | 'needed' | 'sponsored' | 'retired';
  condition: string;
  needs: string[];
  sponsorStatus: 'open' | 'in-progress' | 'sponsored' | 'not-available';
  estimatedCost?: number;
  imageUrl?: string;
  notes?: string;
};
```

### support_needs

```ts
export type SupportNeed = {
  id: string;
  title: string;
  category: 'boards' | 'repair' | 'safety' | 'gear' | 'training' | 'media' | 'partnership';
  description: string;
  priority: 'high' | 'medium' | 'low';
  status: 'needed' | 'partially-covered' | 'covered';
};
```

### press_links

```ts
export type PressLink = {
  id: string;
  title: string;
  publication: string;
  url: string;
  publishedDate?: string;
  summary: string;
};
```

### impact_updates

```ts
export type ImpactUpdate = {
  id: string;
  title: string;
  date: string;
  summary: string;
  images?: string[];
  relatedNeedIds?: string[];
};
```

---

## Supabase tables

Use Supabase for submissions and workflow data.

### booking_requests

Purpose: collect surf session requests.

```sql
create table booking_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  preferred_date date,
  group_size integer,
  swimming_ability text,
  experience_level text,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);
```

Suggested status values:

```txt
new
reviewed
contacted
confirmed
declined
completed
```

### support_inquiries

Purpose: collect support, sponsor, and partnership interest.

```sql
create table support_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  email text,
  support_type text not null,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);
```

Suggested support types:

```txt
sponsor-board
repair-board
safety-gear
surf-gear
sponsor-surfer
partnership
other
```

### equipment_donations

Purpose: collect offers for physical equipment.

```sql
create table equipment_donations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  item_type text not null,
  item_condition text,
  pickup_location text,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);
```

Suggested item types:

```txt
surfboard
fins
leash
wax
rash-guard
repair-kit
first-aid
camera
other
```

### volunteer_inquiries

Purpose: collect offers of time or skill.

```sql
create table volunteer_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  email text,
  skill_area text,
  availability text,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);
```

### press_inquiries

Purpose: collect journalist/documentary/media inquiries.

```sql
create table press_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  organization text,
  email text,
  phone text,
  inquiry_type text,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);
```

---

## Row Level Security guidance

Before public launch:

- Enable RLS on all submission tables.
- Allow anonymous inserts only.
- Do not allow anonymous reads.
- Use server-side routes or carefully scoped policies.

Example posture:

```txt
Anonymous user: can insert inquiry
Anonymous user: cannot read inquiries
Admin user: can read/update inquiries
```

---

## Data minimization

Do not collect:

```txt
CNIC numbers
Exact home addresses unless required for equipment pickup
Private information about minors
Medical details beyond basic safety screening
Payment details
```

---

## Form validation

Use Zod or equivalent validation.

Example booking validation:

```ts
const bookingSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  preferredDate: z.string().optional(),
  groupSize: z.coerce.number().min(1).max(50).optional(),
  swimmingAbility: z.enum(['yes', 'no', 'not-sure']).optional(),
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  message: z.string().max(1000).optional(),
});
```

---

## Future data model

After approval and usage, add:

```txt
sessions
session_participants
board_inventory
board_repairs
sponsors
donations
impact_reports
admin_users
notifications
```

Do not add these until the workflow is real.
