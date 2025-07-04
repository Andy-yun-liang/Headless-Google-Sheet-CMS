export default function SmallScreenMessage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <svg className="w-16 h-16 mx-auto text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
        <h1 className="font-playfair text-2xl font-semibold text-slate-800 mb-3">Please Use a Larger Screen</h1>
        <p className="text-slate-600 mb-4 font-inter">
          This application is designed for desktop and tablet screens. Please switch to a larger device for the best experience.
        </p>
        <div className="text-sm text-slate-500 font-inter">
          <p>Minimum screen width: 640px</p>
        </div>
      </div>
    </div>
  );
} 