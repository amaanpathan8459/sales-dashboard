import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <section className="max-w-xl rounded-2xl bg-white p-8 shadow-sm border border-slate-200 text-center">
        <h1 className="text-3xl font-bold mb-3">Sales Dashboard App</h1>
        <p className="text-slate-600 mb-6">
          A basic Next.js 15 dashboard built with TypeScript, Tailwind CSS, atomic structure, and Recharts.
        </p>
        <Link href="/dashboard" className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-white font-medium hover:bg-slate-700">
          Open Dashboard
        </Link>
      </section>
    </main>
  );
}
