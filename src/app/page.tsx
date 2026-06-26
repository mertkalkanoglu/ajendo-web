export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 inline-block" />
            Yakında App Store'da
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] leading-tight mb-4">
            İşletmenizi telefonunuzdan<br />
            <span className="text-[#2563EB]">tam kontrole alın.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl">
            Ajendo, randevu tabanlı küçük işletmeler için geliştirilmiş mobil
            yönetim uygulamasıdır. Randevular, müşteriler, personel ve çalışma
            saatleri — hepsi tek ekranda.
          </p>
        </div>
      </section>

      {/* Kimler için */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-xl font-semibold text-[#0F172A] mb-8">
          Kimler için?
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: "✂️", title: "Kuaförler & Güzellik", desc: "Personel takibi, müşteri randevuları, günlük program." },
            { icon: "🏥", title: "Klinikler & Terapistler", desc: "Seans yönetimi, müşteri geçmişi, çalışma saatleri." },
            { icon: "🔧", title: "Servis & Atölyeler", desc: "Kaynak ve ekipman bazlı randevu planlaması." },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-[#0F172A] mb-1">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* İletişim */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-xl font-semibold text-[#0F172A] mb-2">İletişim</h2>
          <p className="text-slate-500 mb-1">
            Sorularınız için:{" "}
            <a
              href="mailto:support@ajendo.app"
              className="text-[#2563EB] hover:underline"
            >
              support@ajendo.app
            </a>
          </p>
          <p className="text-slate-500 text-sm">
            Uygulama yakında iOS'ta kullanıma sunulacaktır.
          </p>
        </div>
      </section>
    </main>
  );
}
