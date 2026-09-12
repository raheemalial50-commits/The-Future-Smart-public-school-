"use client";

export default function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#0A1F44]">{title}</h1>
          {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm text-slate-600">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            System Online
          </div>
          <div className="w-10 h-10 rounded-full bg-[#0A1F44] text-white flex items-center justify-center font-bold text-sm">
            AD
          </div>
        </div>
      </div>
    </header>
  );
}
