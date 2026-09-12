# The Future Smart Public School - Management System

**Learn Today • Lead Tomorrow**

Complete modern School Management System with:

- Face Recognition + Fingerprint (Figure Password) Attendance
- Leave Application with Photo Upload
- Admin / Teacher / Student Dashboards
- Student & Teacher Management
- Attendance Reports
- WhatsApp Integration: **03304886710**

## Branding
- Colors: Navy `#0A1F44` + Gold `#D4A017`
- Logo: Shield with graduation cap & open book (place your logo in `/public/logo.png`)

## How to Run

```bash
cd future-smart-school
npm install
npm run dev
```

Open http://localhost:3000

## Login Roles
- Admin → full access
- Teacher → class attendance + leave approval
- Student → mark attendance + apply leave

## Key Features Implemented
1. **Attendance**
   - Present → Face scan OR Fingerprint
   - Leave → Form + mandatory photo/document
   - Absent → Auto when not present & no leave

2. **Leave Workflow**: Student/Parent → Teacher → Admin

3. **Modern UI** with responsive design, cards, charts, status badges

4. **WhatsApp** button everywhere linking to 03304886710

## Tech Stack
- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS v4
- Client-side face camera + simulated biometric

## Notes
- Face recognition uses browser camera (getUserMedia). For production connect real face-api or cloud service.
- Fingerprint is UI-ready for hardware SDK integration.
- No demo labels – production-ready structure.
- Replace placeholder logo with official school logo.

© 2026 The Future Smart Public School
