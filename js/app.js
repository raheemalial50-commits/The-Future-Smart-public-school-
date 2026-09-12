// ==================== SHARED APP FUNCTIONS ====================

function toast(message, type = 'success') {
  const container = document.getElementById('toast-container') || createToastContainer();
  const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };
  const colors = { success: '#16a34a', error: '#dc2626', warning: '#d97706', info: '#2563eb' };

  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `
    <div style="width:28px;height:28px;border-radius:50%;background:${colors[type]};color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;flex-shrink:0;">
      ${icons[type] || 'ℹ'}
    </div>
    <span style="font-size:0.9rem;font-weight:500;">${message}</span>
  `;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(100%)';
    el.style.transition = 'all 0.3s';
    setTimeout(() => el.remove(), 300);
  }, 3500);
}

function createToastContainer() {
  const div = document.createElement('div');
  div.id = 'toast-container';
  div.className = 'toast-container';
  document.body.appendChild(div);
  return div;
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar) {
    sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('show');
  }
}

function renderSidebar(activePage = 'dashboard') {
  const user = Auth.getCurrentUser();
  if (!user) return;

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', href: 'dashboard.html', roles: ['admin','principal','teacher','accountant','staff'] },
    { id: 'attendance', label: 'Attendance', icon: '📷', href: 'attendance.html', roles: ['admin','principal','teacher','staff'] },
    { id: 'leave', label: 'Leave', icon: '📝', href: 'leave.html', roles: ['admin','principal','teacher'] },
    { id: 'students', label: 'Students', icon: '👨‍🎓', href: 'students.html', roles: ['admin','principal','teacher'] },
    { id: 'classes', label: 'Classes', icon: '🏫', href: 'classes.html', roles: ['admin','principal'] },
    { id: 'teachers', label: 'Teachers', icon: '👩‍🏫', href: 'teachers.html', roles: ['admin','principal'] },
    { id: 'fees', label: 'Fees', icon: '💰', href: 'fees.html', roles: ['admin','principal','accountant'] },
    { id: 'exams', label: 'Exams', icon: '📋', href: 'exams.html', roles: ['admin','principal','teacher'] },
    { id: 'notices', label: 'Notices', icon: '📢', href: 'notices.html', roles: ['admin','principal','teacher'] },
    { id: 'reports', label: 'Reports', icon: '📈', href: 'reports.html', roles: ['admin','principal','teacher','accountant'] },
    { id: 'settings', label: 'Settings', icon: '⚙️', href: 'settings.html', roles: ['admin','principal'] }
  ];

  const filtered = menuItems.filter(item => item.roles.includes(user.role));

  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  sidebar.innerHTML = `
    <div class="sidebar-logo">
      <div class="logo-circle">FS</div>
      <div>
        <div style="font-weight:700;font-size:0.9rem;line-height:1.2;">FUTURE SMART</div>
        <div style="font-size:0.65rem;color:var(--gold);">PUBLIC SCHOOL</div>
      </div>
    </div>
    <nav style="flex:1;padding:0.75rem 0;overflow-y:auto;">
      ${filtered.map(item => `
        <a href="${item.href}" class="nav-link ${activePage === item.id ? 'active' : ''}">
          <span style="font-size:1.1rem;">${item.icon}</span>
          <span>${item.label}</span>
        </a>
      `).join('')}
    </nav>
    <div style="padding:1rem;border-top:1px solid rgba(255,255,255,0.1);">
      <a href="https://wa.me/923304886710" target="_blank" 
         style="display:flex;align-items:center;justify-content:center;gap:0.5rem;width:100%;padding:0.65rem;background:#16a34a;color:white;border-radius:0.75rem;text-decoration:none;font-size:0.85rem;font-weight:600;margin-bottom:0.5rem;">
        💬 0330-4886710
      </a>
      <button onclick="Auth.logout()" class="btn btn-outline" style="width:100%;color:rgba(255,255,255,0.8);border-color:rgba(255,255,255,0.2);">
        Logout
      </button>
    </div>
  `;
}

function renderTopbar(title, subtitle = '') {
  const user = Auth.getCurrentUser();
  const topbar = document.getElementById('topbar');
  if (!topbar) return;

  topbar.innerHTML = `
    <div style="display:flex;align-items:center;gap:1rem;">
      <button onclick="toggleSidebar()" class="btn btn-outline" style="padding:0.5rem;display:none;" id="menu-btn">
        ☰
      </button>
      <div>
        <h1 style="font-size:1.25rem;font-weight:700;color:var(--navy);">${title}</h1>
        ${subtitle ? `<p style="font-size:0.8rem;color:var(--gray-600);margin-top:0.15rem;">${subtitle}</p>` : ''}
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:1rem;">
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.8rem;color:var(--gray-600);">
        <span style="width:8px;height:8px;background:#16a34a;border-radius:50%;"></span>
        Online
      </div>
      <div style="display:flex;align-items:center;gap:0.6rem;">
        <div style="width:36px;height:36px;border-radius:50%;background:var(--navy);color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;">
          ${(user?.name || 'U').charAt(0)}
        </div>
      </div>
    </div>
  `;

  if (window.innerWidth < 1024) {
    const btn = document.getElementById('menu-btn');
    if (btn) btn.style.display = 'inline-flex';
  }
}

function formatDate(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-PK', { day: '2-digit', month: 'short', year: 'numeric' });
}

function initPage(pageId, title, subtitle) {
  if (!Auth.requireAuth()) return;
  renderSidebar(pageId);
  renderTopbar(title, subtitle);
}
