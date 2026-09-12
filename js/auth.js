// ==================== AUTHENTICATION ====================
const Auth = {
  login(username, password) {
    const users = Storage.get('users', []);
    const user = users.find(u => 
      (u.username === username || u.email === username) && u.password === password
    );
    if (user) {
      const session = {
        id: user.id,
        name: user.name,
        role: user.role,
        username: user.username,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem('currentUser', JSON.stringify(session));
      return { success: true, user: session };
    }
    return { success: false, message: 'Invalid username or password' };
  },

  logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
  },

  getCurrentUser() {
    try {
      const data = localStorage.getItem('currentUser');
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  isLoggedIn() {
    return !!this.getCurrentUser();
  },

  requireAuth() {
    if (!this.isLoggedIn()) {
      window.location.href = 'index.html';
      return false;
    }
    return true;
  },

  hasRole(...roles) {
    const user = this.getCurrentUser();
    return user && roles.includes(user.role);
  },

  canAccess(module) {
    const user = this.getCurrentUser();
    if (!user) return false;
    if (user.role === 'admin' || user.role === 'principal') return true;

    const permissions = {
      teacher: ['dashboard', 'attendance', 'leave', 'students', 'homework', 'exams', 'reports'],
      accountant: ['dashboard', 'fees', 'reports'],
      staff: ['dashboard', 'attendance']
    };
    return (permissions[user.role] || []).includes(module);
  }
};
