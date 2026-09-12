// ==================== STORAGE HELPERS ====================
const Storage = {
  get(key, defaultValue = []) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      console.error('Storage get error:', e);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('Storage set error:', e);
      return false;
    }
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  generateId(prefix = 'ID') {
    return prefix + '-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 5).toUpperCase();
  }
};

// ==================== INITIAL DATA ====================
function initSampleData() {
  if (Storage.get('initialized')) return;

  // Users
  Storage.set('users', [
    { id: 'U1', username: 'admin', password: 'admin123', name: 'System Admin', role: 'admin', email: 'admin@futuresmart.edu.pk' },
    { id: 'U2', username: 'principal', password: 'principal123', name: 'Principal Office', role: 'principal', email: 'principal@futuresmart.edu.pk' },
    { id: 'U3', username: 'teacher', password: 'teacher123', name: 'Mr. Imran Khan', role: 'teacher', email: 'imran@futuresmart.edu.pk' },
    { id: 'U4', username: 'accountant', password: 'account123', name: 'Accounts Office', role: 'accountant', email: 'accounts@futuresmart.edu.pk' }
  ]);

  // Students
  Storage.set('students', [
    { id: 'STU-001', admissionNo: 'FS-2024-001', name: 'Ahmed Raza', fatherName: 'Muhammad Raza', class: '9', section: 'A', rollNo: '09', gender: 'Male', phone: '03001234567', status: 'Active', photo: null },
    { id: 'STU-002', admissionNo: 'FS-2024-002', name: 'Fatima Khan', fatherName: 'Ali Khan', class: '7', section: 'B', rollNo: '14', gender: 'Female', phone: '03009876543', status: 'Active', photo: null },
    { id: 'STU-003', admissionNo: 'FS-2024-003', name: 'Hassan Ali', fatherName: 'Imran Ali', class: '10', section: 'A', rollNo: '03', gender: 'Male', phone: '03005556677', status: 'Active', photo: null },
    { id: 'STU-004', admissionNo: 'FS-2024-004', name: 'Ayesha Malik', fatherName: 'Tariq Malik', class: '8', section: 'C', rollNo: '21', gender: 'Female', phone: '03001112233', status: 'Active', photo: null },
    { id: 'STU-005', admissionNo: 'FS-2024-005', name: 'Bilal Ahmed', fatherName: 'Saeed Ahmed', class: '9', section: 'A', rollNo: '07', gender: 'Male', phone: '03004445566', status: 'Active', photo: null },
    { id: 'STU-006', admissionNo: 'FS-2024-006', name: 'Zainab Fatima', fatherName: 'Asif Hussain', class: '6', section: 'A', rollNo: '11', gender: 'Female', phone: '03007778899', status: 'Active', photo: null },
    { id: 'STU-007', admissionNo: 'FS-2024-007', name: 'Usman Ghani', fatherName: 'Ghulam Nabi', class: '10', section: 'B', rollNo: '05', gender: 'Male', phone: '03002223344', status: 'Active', photo: null },
    { id: 'STU-008', admissionNo: 'FS-2024-008', name: 'Sanaullah', fatherName: 'Abdullah', class: '8', section: 'A', rollNo: '18', gender: 'Male', phone: '03006667788', status: 'Active', photo: null }
  ]);

  // Teachers
  Storage.set('teachers', [
    { id: 'TCH-001', name: 'Mr. Imran Khan', subject: 'Mathematics', classes: '9-A, 10-B', phone: '03001112233', status: 'Active' },
    { id: 'TCH-002', name: 'Ms. Sara Ahmed', subject: 'Science', classes: '8-A, 8-B', phone: '03002223344', status: 'Active' },
    { id: 'TCH-003', name: 'Mr. Usman Ali', subject: 'English', classes: '7-C, 9-B', phone: '03003334455', status: 'Active' },
    { id: 'TCH-004', name: 'Ms. Nadia Bibi', subject: 'Urdu', classes: '6-A, 7-A', phone: '03004445566', status: 'Active' }
  ]);

  // Classes
  Storage.set('classes', [
    { id: 'CLS-1', name: '6', sections: ['A', 'B'] },
    { id: 'CLS-2', name: '7', sections: ['A', 'B', 'C'] },
    { id: 'CLS-3', name: '8', sections: ['A', 'B', 'C'] },
    { id: 'CLS-4', name: '9', sections: ['A', 'B'] },
    { id: 'CLS-5', name: '10', sections: ['A', 'B'] }
  ]);

  // Attendance (today sample)
  const today = new Date().toISOString().split('T')[0];
  Storage.set('attendance', [
    { id: 'ATT-1', studentId: 'STU-001', date: today, status: 'Present', method: 'Face', markedBy: 'teacher' },
    { id: 'ATT-2', studentId: 'STU-002', date: today, status: 'Leave', method: null, markedBy: 'system' },
    { id: 'ATT-3', studentId: 'STU-003', date: today, status: 'Present', method: 'Fingerprint', markedBy: 'teacher' },
    { id: 'ATT-4', studentId: 'STU-004', date: today, status: 'Absent', method: null, markedBy: 'system' },
    { id: 'ATT-5', studentId: 'STU-005', date: today, status: 'Present', method: 'Face', markedBy: 'teacher' }
  ]);

  // Leaves
  Storage.set('leaves', [
    { id: 'LV-1', applicant: 'Fatima Khan', type: 'Student', class: '7-B', from: '2026-09-11', to: '2026-09-12', reason: 'Medical', status: 'Approved', photo: true, appliedOn: '2026-09-10' },
    { id: 'LV-2', applicant: 'Hassan Ali', type: 'Student', class: '10-A', from: '2026-09-13', to: '2026-09-13', reason: 'Family Function', status: 'Pending', photo: true, appliedOn: '2026-09-12' }
  ]);

  // Notices
  Storage.set('notices', [
    { id: 'NT-1', title: 'Parent-Teacher Meeting', date: '2026-09-20', audience: 'Everyone', priority: 'High' },
    { id: 'NT-2', title: 'Mid-Term Exam Schedule', date: '2026-09-25', audience: 'Students', priority: 'High' },
    { id: 'NT-3', title: 'Fee Submission Deadline', date: '2026-09-15', audience: 'Parents', priority: 'Medium' }
  ]);

  // Settings
  Storage.set('settings', {
    schoolName: 'THE FUTURE SMART PUBLIC SCHOOL',
    slogan: 'Learn Today • Lead Tomorrow',
    whatsapp: '03304886710',
    phone: '03304886710',
    address: 'Qamber, Pakistan',
    session: '2026-2027',
    currency: 'PKR'
  });

  Storage.set('initialized', true);
}

// Auto init
initSampleData();
