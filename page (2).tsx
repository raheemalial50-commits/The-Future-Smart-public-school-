"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const stats = [
  { label: "Total Students", value: "1,248", change: "+12 this month", color: "bg-blue-500" },
  { label: "Present Today", value: "1,089", change: "87.3%", color: "bg-green-500" },
  { label: "Absent Today", value: "97", change: "7.8%", color: "bg-red-500" },
  { label: "On Leave", value: "62", change: "5.0%", color: "bg-amber-500" },
];

const recentLeaves = [
  { name: "Ahmed Raza", class: "9-A", reason: "Medical", status: "Pending", date: "12 Sep 2026" },
  { name: "Fatima Khan", class: "7-B", reason: "Family Function", status: "Approved", date: "11 Sep 2026" },
  { name: "Hassan Ali", class: "10-A", reason: "Fever", status: "Pending", date: "12 Sep 2026" },
  { name: "Ayesha Malik", class: "8-C", reason: "Travel", status: "Rejected", date: "10 Sep 2026" },
];

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar role="admin" />
      <div className="flex-1 flex flex-col">
        <Header title="Admin Dashboard" subtitle="Welcome back • Overview of school today" />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 card-hover">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-[#0A1F44] mt-1">{stat.value}</p>
                    <p className="text-xs text-slate-400 mt-1">{stat.change}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${stat.color}`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts + Recent */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Attendance Overview */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="font-bold text-[#0A1F44] mb-4">Today&apos;s Attendance Overview</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Present</span>
                    <span className="font-medium text-green-600">87.3%</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "87.3%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Absent</span>
                    <span className="font-medium text-red-600">7.8%</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: "7.8%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>On Leave</span>
                    <span className="font-medium text-amber-600">5.0%</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: "5%" }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-700">1,089</div>
                  <div className="text-xs text-green-600 mt-1">Present</div>
                </div>
                <div className="p-4 bg-red-50 rounded-xl">
                  <div className="text-2xl font-bold text-red-700">97</div>
                  <div className="text-xs text-red-600 mt-1">Absent</div>
                </div>
                <div className="p-4 bg-amber-50 rounded-xl">
                  <div className="text-2xl font-bold text-amber-700">62</div>
                  <div className="text-xs text-amber-600 mt-1">Leave</div>
                </div>
              </div>
            </div>

            {/* Recent Leave Requests */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-[#0A1F44]">Recent Leave Requests</h3>
                <a href="/leave" className="text-xs text-[#D4A017] font-medium hover:underline">View all</a>
              </div>
              <div className="space-y-3">
                {recentLeaves.map((leave, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                    <div>
                      <p className="font-medium text-sm text-slate-800">{leave.name}</p>
                      <p className="text-xs text-slate-500">{leave.class} • {leave.reason}</p>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      leave.status === "Approved" ? "badge-present" :
                      leave.status === "Rejected" ? "badge-absent" : "badge-pending"
                    }`}>
                      {leave.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#0A1F44] mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <a href="/attendance" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 hover:bg-[#0A1F44] hover:text-white transition group">
                <span className="text-2xl">📷</span>
                <span className="text-sm font-medium">Mark Attendance</span>
              </a>
              <a href="/leave" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 hover:bg-[#0A1F44] hover:text-white transition group">
                <span className="text-2xl">📝</span>
                <span className="text-sm font-medium">Leave Requests</span>
              </a>
              <a href="/students" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 hover:bg-[#0A1F44] hover:text-white transition group">
                <span className="text-2xl">👨‍🎓</span>
                <span className="text-sm font-medium">Manage Students</span>
              </a>
              <a href="/reports" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 hover:bg-[#0A1F44] hover:text-white transition group">
                <span className="text-2xl">📈</span>
                <span className="text-sm font-medium">View Reports</span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
