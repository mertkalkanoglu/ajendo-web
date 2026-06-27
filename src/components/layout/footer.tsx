import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#080E14] border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <Image
          src="/logo-horizontal.png"
          alt="Ajendo"
          width={0}
          height={0}
          sizes="120px"
          style={{ height: "22px", width: "auto", opacity: 0.45, filter: "brightness(0) invert(1)" }}
        />

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
          <Link href="/privacy" className="hover:text-slate-400 transition-colors">Gizlilik</Link>
          <Link href="/terms" className="hover:text-slate-400 transition-colors">Kullanım Koşulları</Link>
          <Link href="/support" className="hover:text-slate-400 transition-colors">Destek</Link>
          <Link href="/delete-account" className="hover:text-slate-400 transition-colors">Hesap Silme</Link>
        </nav>

        <p className="text-slate-700 text-sm whitespace-nowrap">
          © {new Date().getFullYear()} Ajendo
        </p>
      </div>
    </footer>
  );
}
