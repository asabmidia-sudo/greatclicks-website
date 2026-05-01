import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<PlaceholderHome />} />
        </Routes>
      </main>
    </div>
  );
}

function PlaceholderHome() {
  return (
    <section className="section-y">
      <div className="container-content">
        <p className="eyebrow">Practice Growth System</p>
        <h1 className="mt-6 text-5xl md:text-7xl">
          Phase 1 shell ready.
        </h1>
        <p className="mt-6 max-w-2xl text-lg">
          Design tokens loaded. Layout shell mounted. Ready for Phase 2.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <TokenSwatch label="primary" className="bg-primary text-white" />
          <TokenSwatch label="primary-deep" className="bg-primary-deep text-white" />
          <TokenSwatch label="primary-mid" className="bg-primary-mid text-white" />
          <TokenSwatch label="primary-light" className="bg-primary-light text-white" />
          <TokenSwatch label="primary-bg" className="bg-primary-bg text-dark" />
          <TokenSwatch label="dark" className="bg-dark text-white" />
        </div>
      </div>
    </section>
  );
}

function TokenSwatch({ label, className }: { label: string; className: string }) {
  return (
    <div className={`rounded-2xl px-5 py-6 text-sm font-medium ${className}`}>
      {label}
    </div>
  );
}
