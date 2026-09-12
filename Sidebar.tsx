"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const adminLinks = [
  { href: "/dashboard/admin", label: "Dashboard", icon: "📊" },
  { href: "/attendance", label: "Attendance", icon: "📷" },
  { href: "/leave", label: "Leave Requests", icon: "📝" },
  { href: "/students", label: "Students", icon: "👨‍🎓" },
  { href: "/teachers", label: "Teachers", icon: "👩‍🏫" },
  { href: "/reports", label: "Reports", icon: "📈" },
  { href: "/settings", label: "Settings", icon: "⚙️" },
  { href: "/contact", label: "Contact", icon: "📞" },
];

const teacherLinks = [
  { href: "/dashboard/teacher", label: "Dashboard", icon: "📊" },
  { href: "/attendance", label: "Mark Attendance", icon: "📷" },
  { href: "/leave", label: "Leave Requests", icon: "📝" },
  { href: "/students", label: "My Students", icon: "👨‍🎓" },
  { href: "/reports", label: "Reports", icon: "📈" },
  { href: "/settings", label: "Settings", icon: "⚙️" },
];

const studentLinks = [
  { href: "/dashboard/student", label: "Dashboard", icon: "📊" },
  { href: "/attendance", label: "Mark Attendance", icon: "📷" },
  { href: "/leave", label: "Apply Leave", icon: "📝" },
  { href: "/reports", label: "My Attendance", icon: "📈" },
  { href: "/settings", label: "Profile", icon: "⚙️" },
];

export default function Sidebar({ role = "admin" }: { role?: "admin" | "teacher" | "student" }) {
  const pathname = usePathname();
  const links = role === "admin" ? adminLinks : role === "teacher" ? teacherLinks : studentLinks;

  return (
    <aside className="w-64 bg-[#0A1F44] text-white min-h-screen flex flex-col shadow-xl">
      {/* Logo */}
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#F0C14B] flex items-center justify-center text-[#0A1F44] font-bold text-lg shadow">
            FS
          </div>
          <div>
            <div className="font-bold text-sm leading-tight">FUTURE SMART</div>
            <div className="text-[10px] text-[#D4A017]">PUBLIC SCHOOL</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                active
                  ? "bg-[#D4A017] text-[#0A1F44] shadow"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* WhatsApp + Logout */}
      <div className="p-4 border-t border-white/10 space-y-3">
        <a
          href="https://wa.me/923304886710"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-green-600 hover:bg-green-700 rounded-xl text-sm font-medium transition"
        >
          <span>💬</span> 0330-4886710
        </a>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-sm transition"
        >
          Logout
        </Link>
      </div>
    </aside>
  );
}
