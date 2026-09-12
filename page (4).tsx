"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function TeacherDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar role="teacher" />
      <div className="flex-1 flex flex-col">
        <Header title="Teacher Dashboard" subtitle="Your classes & attendance overview" />
        <main className="flex-1 p-6 space-y-6">
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">My Classes</p>
              <p className="text-3xl font-bold text-[#0A1F44] mt-1">4</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Present Today</p>
              <p className="text-3xl font-bold text-green-600 mt-1">86%</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Pending Leaves</p>
              <p className="text-3xl font-bold text-amber-600 mt-1">5</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#0A1F44] mb-4">Today&apos;s Classes</h3>
            <div className="space-y-3">
              {["9-A Mathematics", "10-B Science", "8-C English"].map((c) => (
                <div key={c} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <span className="font-medium">{c}</span>
                  <a href="/attendance" className="text-sm bg-[#0A1F44] text-white px-4 py-1.5 rounded-lg">Mark Attendance</a>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
