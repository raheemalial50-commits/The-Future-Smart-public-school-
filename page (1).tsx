"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar role="admin" />
      <div className="flex-1 flex flex-col">
        <Header title="Contact" subtitle="Get in touch with the school" />
        <main className="flex-1 p-6 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100 text-center max-w-md w-full">
            <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-[#0A1F44] mb-2">WhatsApp Support</h3>
            <p className="text-slate-600 mb-6">For any queries regarding the school management system</p>
            <a
              href="https://wa.me/923304886710"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition shadow-lg"
            >
              Chat on WhatsApp
              <span className="font-mono">0330-4886710</span>
            </a>
            <p className="text-xs text-slate-400 mt-6">THE FUTURE SMART PUBLIC SCHOOL<br/>Learn Today • Lead Tomorrow</p>
          </div>
        </main>
      </div>
    </div>
  );
}
