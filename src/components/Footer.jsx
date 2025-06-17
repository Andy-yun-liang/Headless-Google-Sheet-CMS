export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-slate-200 py-6">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-center justify-center gap-2 text-slate-600 font-inter">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
          <span className="text-sm font-medium">AndyL</span>
        </div>
      </div>
    </footer>
  );
} 