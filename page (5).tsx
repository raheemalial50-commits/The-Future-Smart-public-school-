"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function LeavePage() {
  const [form, setForm] = useState({
    studentName: "",
    className: "",
    fromDate: "",
    toDate: "",
    reason: "",
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!photo) {
      alert("Please upload a supporting picture / document");
      return;
    }
    setSubmitted(true);
  };

  const leaveHistory = [
    { id: 1, name: "Ahmed Raza", class: "9-A", from: "10 Sep", to: "12 Sep", reason: "Medical", status: "Approved", hasPhoto: true },
    { id: 2, name: "Fatima Khan", class: "7-B", from: "11 Sep", to: "11 Sep", reason: "Family", status: "Pending", hasPhoto: true },
    { id: 3, name: "Hassan Ali", class: "10-A", from: "08 Sep", to: "09 Sep", reason: "Fever", status: "Rejected", hasPhoto: true },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar role="admin" />
      <div className="flex-1 flex flex-col">
        <Header title="Leave Management" subtitle="Apply for leave with supporting photo • Approval workflow" />

        <main className="flex-1 p-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-bold text-[#0A1F44] mb-5">Submit Leave Application</h3>

              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-fade-in">
                  <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-4xl">✓</div>
                  <h4 className="text-xl font-bold text-green-700">Leave Application Submitted</h4>
                  <p className="text-slate-600">Your request with photo has been sent for approval (Teacher → Admin).</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#0A1F44] text-white rounded-xl font-medium"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Student Name</label>
                      <input
                        required
                        value={form.studentName}
                        onChange={(e) => setForm({ ...form, studentName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#D4A017] outline-none"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Class / Section</label>
                      <input
                        required
                        value={form.className}
                        onChange={(e) => setForm({ ...form, className: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#D4A017] outline-none"
                        placeholder="e.g. 9-A"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">From Date</label>
                      <input
                        type="date"
                        required
                        value={form.fromDate}
                        onChange={(e) => setForm({ ...form, fromDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#D4A017] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">To Date</label>
                      <input
                        type="date"
                        required
                        value={form.toDate}
                        onChange={(e) => setForm({ ...form, toDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#D4A017] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Reason</label>
                    <textarea
                      required
                      rows={3}
                      value={form.reason}
                      onChange={(e) => setForm({ ...form, reason: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#D4A017] outline-none resize-none"
                      placeholder="Explain the reason for leave..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Supporting Picture / Document <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-[#D4A017] transition">
                      {preview ? (
                        <div className="space-y-3">
                          <img src={preview} alt="Preview" className="max-h-40 mx-auto rounded-lg object-contain" />
                          <p className="text-sm text-slate-600">{photo?.name}</p>
                          <button
                            type="button"
                            onClick={() => { setPhoto(null); setPreview(null); }}
                            className="text-sm text-red-600 hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer block">
                          <div className="text-4xl mb-2">📷</div>
                          <p className="text-sm font-medium text-slate-700">Click to upload photo or document</p>
                          <p className="text-xs text-slate-400 mt-1">Medical certificate, letter, etc. (JPG, PNG, PDF)</p>
                          <input type="file" accept="image/*,.pdf" onChange={handlePhoto} className="hidden" required />
                        </label>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0A1F44] hover:bg-[#0d2a5c] text-white font-semibold rounded-xl transition shadow"
                  >
                    Submit Leave Application
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-bold text-[#0A1F44] mb-4">Recent Applications</h3>
              <div className="space-y-3">
                {leaveHistory.map((item) => (
                  <div key={item.id} className="p-4 bg-slate-50 rounded-xl">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        item.status === "Approved" ? "badge-present" :
                        item.status === "Rejected" ? "badge-absent" : "badge-pending"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{item.class} • {item.from} → {item.to}</p>
                    <p className="text-xs text-slate-600 mt-1">{item.reason}</p>
                    {item.hasPhoto && (
                      <p className="text-xs text-blue-600 mt-1">📎 Photo attached</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
