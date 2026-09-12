"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar role="admin" />
      <div className="flex-1 flex flex-col">
        <Header title="Reports" subtitle="Attendance reports & analytics" />
        <main className="flex-1 p-6 space-y-6">
          <div className="grid sm:grid-cols-3 gap-4">
            <button className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-left hover:border-[#D4A017] transition">
              <p className="font-bold text-[#0A1F44]">Daily Report</p>
              <p className="text-sm text-slate-500 mt-1">Today&apos;s attendance summary</p>
            </button>
            <button className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-left hover:border-[#D4A017] transition">
              <p className="font-bold text-[#0A1F44]">Monthly Report</p>
              <p className="text-sm text-slate-500 mt-1">Full month statistics</p>
            </button>
            <button className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-left hover:border-[#D4A017] transition">
              <p className="font-bold text-[#0A1F44]">Export Excel / PDF</p>
              <p className="text-sm text-slate-500 mt-1">Download any report</p>
            </button>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#0A1F44] mb-4">Attendance Trend (Last 7 Days)</h3>
            <div className="flex items-end gap-3 h-40">
              {[85, 88, 82, 90, 87, 91, 87].map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-[#0A1F44] rounded-t-lg transition-all" style={{ height: `${v}%` }}></div>
                  <span className="text-xs text-slate-500">D{i+1}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
