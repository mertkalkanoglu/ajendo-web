import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-auto">
      <div className="mx-auto max-w-4xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Ajendo. Tüm hakları saklıdır.
        </p>
        <nav className="flex gap-6 text-sm text-slate-500">
          <Link href="/privacy" className="hover:text-slate-800 transition-colors">
            Gizlilik
          </Link>
          <Link href="/terms" className="hover:text-slate-800 transition-colors">
            Kullanım Koşulları
          </Link>
          <Link href="/support" className="hover:text-slate-800 transition-colors">
            Destek
          </Link>
          <Link href="/delete-account" className="hover:text-slate-800 transition-colors">
            Hesap Silme
          </Link>
        </nav>
      </div>
    </footer>
  );
}
