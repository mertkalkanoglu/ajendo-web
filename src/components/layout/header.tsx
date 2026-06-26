import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-4xl px-6 py-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Ajendo
        </Link>
      </div>
    </header>
  );
}
