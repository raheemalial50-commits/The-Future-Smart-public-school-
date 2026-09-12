"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (role === "admin") router.push("/dashboard/admin");
      else if (role === "teacher") router.push("/dashboard/teacher");
      else router.push("/dashboard/student");
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-[#0A1F44] text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4A017] to-[#F0C14B] rounded-full flex items-center justify-center text-[#0A1F44] font-bold text-xl shadow">
              FS
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-wide">THE FUTURE SMART</h1>
              <p className="text-xs text-gold-light opacity-90">PUBLIC SCHOOL</p>
            </div>
          </div>
          <a
            href="https://wa.me/923304886710"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full text-sm font-medium transition"
          >
            <span>WhatsApp</span>
            <span className="font-mono">0330-4886710</span>
          </a>
        </div>
      </header>

      {/* Hero + Login */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Branding */}
          <div className="text-center md:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center justify-center w-28 h-28 mx-auto md:mx-0 rounded-2xl bg-[#0A1F44] shadow-xl border-4 border-[#D4A017]">
              <div className="text-center">
                <div className="text-4xl">🎓</div>
                <div className="text-[10px] text-[#D4A017] font-bold mt-1">FUTURE SMART</div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] leading-tight">
              School Management<br />
              <span className="text-[#D4A017]">System</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Learn Today • Lead Tomorrow
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start text-sm">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">✓ Face Attendance</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">✓ Fingerprint</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full font-medium">✓ Leave with Photo</span>
            </div>
          </div>

          {/* Right - Login Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 animate-fade-in">
            <h3 className="text-xl font-bold text-[#0A1F44] mb-1">Sign In</h3>
            <p className="text-sm text-slate-500 mb-6">Access your school portal</p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Login as</label>
                <div className="grid grid-cols-3 gap-2">
                  {["admin", "teacher", "student"].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`py-2.5 rounded-lg text-sm font-medium capitalize transition ${
                        role === r
                          ? "bg-[#0A1F44] text-white shadow"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email or Phone</label>
                <input
                  type="text"
                  required
                  placeholder="Enter email or phone"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#D4A017] focus:border-[#D4A017] outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#D4A017] focus:border-[#D4A017] outline-none transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-[#0A1F44] hover:bg-[#0d2a5c] text-white font-semibold rounded-xl transition shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In to Portal"
                )}
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500">
                For support contact{" "}
                <a href="https://wa.me/923304886710" className="text-green-600 font-medium hover:underline">
                  0330-4886710
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0A1F44] text-white/80 py-4 text-center text-sm">
        <p>© 2026 The Future Smart Public School • Learn Today • Lead Tomorrow</p>
      </footer>
    </div>
  );
}
