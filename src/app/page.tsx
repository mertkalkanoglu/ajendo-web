import { Scissors, Stethoscope, Wrench, ArrowRight, Check } from "lucide-react";
import { PhoneMockup } from "@/components/ui/phone-mockup";

const FEATURES = [
  {
    Icon: Scissors,
    iconBg: "bg-blue-50",
    iconColor: "text-[#2563EB]",
    title: "Kuaförler & Güzellik",
    desc: "Personel bazlı takvim, müşteri geçmişi ve günlük program tek ekranda.",
  },
  {
    Icon: Stethoscope,
    iconBg: "bg-teal-50",
    iconColor: "text-[#0D9488]",
    title: "Klinikler & Terapistler",
    desc: "Seans yönetimi, özel notlar ve çalışma saati konfigürasyonu.",
  },
  {
    Icon: Wrench,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    title: "Servis & Atölyeler",
    desc: "Ekipman ve kaynak bazlı randevu takibi, kapasite yönetimi.",
  },
];

const BULLETS = [
  "Randevu oluştur, düzenle, takip et",
  "Müşteri geçmişi ve notları",
  "Personel & kaynak yönetimi",
  "Günlük ve haftalık raporlar",
];

export default function Home() {
  return (
    <main className="flex-1">

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Fade out dot grid at edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,_rgba(255,255,255,0)_0%,_white_100%)]" />
        {/* Right-side brand glow */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.07]"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, #2563EB 0%, #34D399 50%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 lg:pt-32 lg:pb-28">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-10">

            {/* Left — copy */}
            <div className="flex-1 max-w-[560px] text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2563EB] text-xs font-semibold px-3 py-1.5 rounded-full mb-7 border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] shrink-0" />
                Yakında iOS'ta
              </div>

              {/* Headline */}
              <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.25rem] font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-5">
                Randevu yönetimini{" "}
                <span className="text-gradient">profesyonele taşıyın.</span>
              </h1>

              {/* Sub */}
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-[460px] mx-auto lg:mx-0">
                Ajendo, randevu tabanlı işletmeler için geliştirilmiş mobil yönetim
                uygulamasıdır. Randevular, müşteriler, personel ve raporlar — hepsi
                tek platformda.
              </p>

              {/* Bullet list */}
              <ul className="flex flex-col gap-2.5 mb-10 text-sm text-slate-600 items-center lg:items-start">
                {BULLETS.map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="mailto:support@ajendo.app?subject=Erken Erişim Talebi"
                  className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-xl text-base transition-colors shadow-md shadow-blue-200"
                >
                  Erken Erişim Talep Et
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:support@ajendo.app"
                  className="inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-[#0F172A] font-semibold px-6 py-3 rounded-xl text-base transition-colors border border-slate-200"
                >
                  Bize Yazın
                </a>
              </div>
            </div>

            {/* Right — phone */}
            <div className="flex-shrink-0 scale-90 sm:scale-100">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ─── KIMLER IÇIN ─────────────────────────────────── */}
      <section className="bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          {/* Section label */}
          <p className="text-xs font-bold tracking-[0.12em] text-[#2563EB] uppercase mb-3 text-center">
            Sektörler
          </p>
          <h2 className="text-3xl font-bold text-[#0F172A] tracking-tight text-center mb-3">
            Her randevu bazlı işletme için
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-lg mx-auto">
            Sektörden bağımsız tasarım. Hangi alanda çalışırsanız çalışın Ajendo sizin için çalışır.
          </p>

          <div className="grid sm:grid-cols-3 gap-5">
            {FEATURES.map(({ Icon, iconBg, iconColor, title, desc }) => (
              <div
                key={title}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/60 transition-all duration-300 cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${iconColor}`} strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2 text-base">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0F172A]">
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, #2563EB 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-72 h-72 opacity-10 blur-3xl rounded-full"
          style={{ background: "#34D399" }}
        />

        <div className="relative mx-auto max-w-3xl px-6 py-24 lg:py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-white/8 text-white/70 text-xs font-semibold px-4 py-2 rounded-full mb-8 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            Beta kullanıcıları için erken erişim açık
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5">
            İlk duyuranlar arasında{" "}
            <span className="text-gradient">yer alın.</span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Ajendo hazır olduğunda sizi haberdar edeceğiz. Beta kullanıcılarına
            özel avantajlar ve öncelikli destek sunulacak.
          </p>

          <a
            href="mailto:support@ajendo.app?subject=Erken Erişim Talebi"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors shadow-lg shadow-blue-900/40"
          >
            Erken Erişim Talep Et
            <ArrowRight className="w-4 h-4" />
          </a>

          <p className="text-slate-600 text-sm mt-5">
            support@ajendo.app · Spam yok. İstediğinizde çıkabilirsiniz.
          </p>
        </div>
      </section>

    </main>
  );
}
