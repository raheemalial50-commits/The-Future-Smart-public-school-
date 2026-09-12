# THE FUTURE SMART PUBLIC SCHOOL
## School Management System (ERP)

**Learn Today • Lead Tomorrow**

WhatsApp: **03304886710**

### Features Implemented
- Professional Login with Role-based access (Admin, Principal, Teacher, Accountant)
- Modern Dashboard with Charts (Chart.js)
- **Attendance System**
  - Face Recognition (Camera)
  - Fingerprint / Figure Password
  - Present / Leave / Absent logic
- **Leave Management** with mandatory photo upload + Approve/Reject
- Students list with search
- Teachers directory
- Fees, Exams, Reports placeholders (ready to expand)
- Settings with school profile & WhatsApp number
- Fully responsive (mobile + desktop)
- LocalStorage persistence
- No “Demo” labels in the UI

### How to Run
1. Extract the zip
2. Open `index.html` in any modern browser  
   (or use Live Server in VS Code)

### Sample Logins
| Role       | Username    | Password     |
|------------|-------------|--------------|
| Admin      | admin       | admin123     |
| Principal  | principal   | principal123 |
| Teacher    | teacher     | teacher123   |
| Accountant | accountant  | account123   |

### Project Structure
```
future-smart-school-erp/
├── index.html          ← Login
├── dashboard.html
├── attendance.html     ← Face + Fingerprint
├── leave.html          ← Photo upload
├── students.html
├── teachers.html
├── fees.html
├── exams.html
├── reports.html
├── settings.html
├── css/style.css
├── js/
│   ├── storage.js
│   ├── auth.js
│   └── app.js
└── README.md
```

### Deploy on GitHub Pages
1. Create a new repository
2. Upload all files
3. Settings → Pages → Deploy from main branch
4. Open the provided URL

### Connect Real Backend Later
Replace LocalStorage calls in `js/storage.js` with Firebase / Supabase / MySQL API calls. The UI is already modular.

© 2026 THE FUTURE SMART PUBLIC SCHOOL
