"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar role="student" />
      <div className="flex-1 flex flex-col">
        <Header title="Student Dashboard" subtitle="Ahmed Raza • Class 9-A" />
        <main className="flex-1 p-6 space-y-6">
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Attendance %</p>
              <p className="text-3xl font-bold text-green-600 mt-1">92%</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Present Days</p>
              <p className="text-3xl font-bold text-[#0A1F44] mt-1">138</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Leave Days</p>
              <p className="text-3xl font-bold text-amber-600 mt-1">4</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#0A1F44] mb-4">Quick Actions</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/attendance" className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-[#0A1F44] to-[#0d2a5c] text-white hover:shadow-lg transition">
                <span className="text-3xl">📷</span>
                <div>
                  <p className="font-bold">Mark Attendance</p>
                  <p className="text-sm opacity-80">Face or Fingerprint</p>
                </div>
              </a>
              <a href="/leave" className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-[#D4A017] to-[#F0C14B] text-[#0A1F44] hover:shadow-lg transition">
                <span className="text-3xl">📝</span>
                <div>
                  <p className="font-bold">Apply for Leave</p>
                  <p className="text-sm opacity-80">With supporting photo</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#0A1F44] mb-4">This Month Calendar</h3>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 22 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium ${
                    i === 5 || i === 12 ? "bg-amber-100 text-amber-700" :
                    i === 18 ? "bg-red-100 text-red-700" :
                    "bg-green-100 text-green-700"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-4 text-xs">
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-100 rounded"></span> Present</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-amber-100 rounded"></span> Leave</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-100 rounded"></span> Absent</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
