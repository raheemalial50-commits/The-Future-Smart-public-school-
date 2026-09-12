"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar role="admin" />
      <div className="flex-1 flex flex-col">
        <Header title="Settings" subtitle="Profile & system preferences" />
        <main className="flex-1 p-6 max-w-2xl">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-5">
            <h3 className="font-bold text-[#0A1F44]">School Profile</h3>
            <div>
              <label className="block text-sm font-medium mb-1">School Name</label>
              <input defaultValue="THE FUTURE SMART PUBLIC SCHOOL" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-[#D4A017]" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Slogan</label>
              <input defaultValue="Learn Today • Lead Tomorrow" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-[#D4A017]" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">WhatsApp Number</label>
              <input defaultValue="03304886710" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-[#D4A017]" />
            </div>
            <button className="px-6 py-2.5 bg-[#0A1F44] text-white rounded-xl font-medium">Save Changes</button>
          </div>
        </main>
      </div>
    </div>
  );
}
