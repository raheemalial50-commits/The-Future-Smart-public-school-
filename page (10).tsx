"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const teachers = [
  { name: "Mr. Imran Khan", subject: "Mathematics", classes: "9-A, 10-B", phone: "0300-1112233" },
  { name: "Ms. Sara Ahmed", subject: "Science", classes: "8-A, 8-B", phone: "0300-2223344" },
  { name: "Mr. Usman Ali", subject: "English", classes: "7-C, 9-B", phone: "0300-3334455" },
];

export default function TeachersPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar role="admin" />
      <div className="flex-1 flex flex-col">
        <Header title="Teachers" subtitle="Manage teaching staff" />
        <main className="flex-1 p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {teachers.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 card-hover">
                <div className="w-12 h-12 rounded-full bg-[#0A1F44] text-white flex items-center justify-center font-bold mb-3">
                  {t.name.split(" ").map(n => n[0]).join("").slice(0,2)}
                </div>
                <h3 className="font-bold text-[#0A1F44]">{t.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{t.subject}</p>
                <p className="text-xs text-slate-400 mt-2">Classes: {t.classes}</p>
                <p className="text-xs text-slate-400">{t.phone}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
