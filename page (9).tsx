"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const students = [
  { id: 1, name: "Ahmed Raza", class: "9-A", roll: "09", attendance: "92%", status: "Present" },
  { id: 2, name: "Fatima Khan", class: "7-B", roll: "14", attendance: "88%", status: "Leave" },
  { id: 3, name: "Hassan Ali", class: "10-A", roll: "03", attendance: "95%", status: "Present" },
  { id: 4, name: "Ayesha Malik", class: "8-C", roll: "21", attendance: "79%", status: "Absent" },
  { id: 5, name: "Bilal Ahmed", class: "9-A", roll: "07", attendance: "91%", status: "Present" },
];

export default function StudentsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar role="admin" />
      <div className="flex-1 flex flex-col">
        <Header title="Students" subtitle="Manage all students" />
        <main className="flex-1 p-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center">
              <input placeholder="Search students..." className="px-4 py-2 rounded-xl border border-slate-200 text-sm w-64 outline-none focus:ring-2 focus:ring-[#D4A017]" />
              <button className="px-4 py-2 bg-[#0A1F44] text-white rounded-xl text-sm font-medium">+ Add Student</button>
            </div>
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="text-left p-4 font-medium">Name</th>
                  <th className="text-left p-4 font-medium">Class</th>
                  <th className="text-left p-4 font-medium">Roll</th>
                  <th className="text-left p-4 font-medium">Attendance</th>
                  <th className="text-left p-4 font-medium">Today</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id} className="border-t border-slate-100 hover:bg-slate-50">
                    <td className="p-4 font-medium">{s.name}</td>
                    <td className="p-4">{s.class}</td>
                    <td className="p-4">{s.roll}</td>
                    <td className="p-4">{s.attendance}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        s.status === "Present" ? "badge-present" :
                        s.status === "Leave" ? "badge-leave" : "badge-absent"
                      }`}>{s.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
