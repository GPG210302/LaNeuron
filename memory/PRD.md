# PRD — La Neuron – STEAM Academy (Landing Page)

## Original Problem Statement
Build a highly-animated, professional yet kids-attractive landing page for a STEAM education academy named **"La Neuron – STEAM Academy"** (motto "Real Science for Real Kids"), focused broadly on STEAM education for children aged 6–13 in Kraków, Poland, led by Dr. Priyadarshini Gouthaman (PhD Cognitive Scientist & certified Neuroscience Coach). The Summer Camp 2026 is featured as an upcoming event. Interactive graphics, process-flow diagrams, calendar, and a map are required.

## User Choices (confirmed)
- Site name: **La Neuron – STEAM Academy**
- Educator photo: AI-edited into professional business attire (Gemini Nano Banana), face preserved.
- Register form: **Save to database** (email via Resend deferred — no key yet).
- Theme: designer's choice (bright & playful + modern & sophisticated).
- Footer: placeholder Facebook & Instagram links (to be added later).

## Architecture
- **Frontend**: React (CRA + craco), Tailwind, framer-motion, lucide-react, shadcn/ui (Select, sonner). Single-page, sectional components under `src/components/sections/`. Content centralized in `src/data.js`. Neo-brutalist "tactile card" aesthetic (Outfit + DM Sans fonts).
- **Backend**: FastAPI + MongoDB (motor). `POST /api/enquiries` (saves + optional Resend email), `GET /api/enquiries` (owner review). Age validated 6–13, EmailStr.
- **Assets**: AI-generated educator portrait at `src/assets/educator.png`.

## Implemented (2026-06-03)
- 11 sections: Navbar, Hero, About Educator, Interactive "What is STEAM" selector, Why STEAM (6 cards), 6-step Scientific Method zigzag flow, Programmes, Summer Camp 2026 (weekly calendar + Kraków Google map embed + camp facts), Register/Enquiry form, FAQ accordion, Footer.
- Enquiry API persists to Mongo; success/empty-validation flows working.
- Email-sending code present but gated behind `RESEND_API_KEY` (disabled until configured).
- Tested: backend 100% (8 pytest cases), frontend 100% (all flows).

## User Personas
- Parents (6–13) in Kraków / international & bilingual families seeking enrichment or SEN-friendly STEAM learning.

## Backlog / Next
- **P1**: Enable Resend email notifications (add `RESEND_API_KEY`, `SENDER_EMAIL`, `OWNER_EMAIL`; verify domain). Add Facebook/Instagram URLs.
- **P2**: Simple admin view to browse enquiries; auto-reply confirmation email to parent; analytics.
- **P3**: Sibling-discount field, per-week spot availability counter, blog/gallery.
