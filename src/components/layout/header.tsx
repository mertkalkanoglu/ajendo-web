import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-4xl px-6 py-3">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/logo-horizontal.png"
            alt="Ajendo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ height: "32px", width: "auto" }}
            priority
          />
        </Link>
      </div>
    </header>
  );
}
