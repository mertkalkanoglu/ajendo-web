import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destek — Ajendo",
};

export default function SupportPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Destek</h1>
        <p className="text-slate-500 mb-10">
          Ajendo ile ilgili her konuda yardımcı olmaktan memnuniyet duyarız.
        </p>

        {/* İletişim */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-1">E-posta Desteği</h2>
          <p className="text-slate-500 text-sm mb-3">
            Sorularınızı e-posta yoluyla iletebilirsiniz. En geç 1 iş günü içinde
            geri döneriz.
          </p>
          <a
            href="mailto:destek@ajendo.app"
            className="inline-flex items-center gap-2 bg-[#2563EB] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            destek@ajendo.app
          </a>
        </div>

        {/* SSS */}
        <h2 className="text-xl font-semibold text-[#0F172A] mb-4">Sık Sorulan Sorular</h2>
        <div className="space-y-4">
          {[
            {
              q: "Şifremi unuttum, ne yapmalıyım?",
              a: 'Giriş ekranındaki "Şifremi Unuttum" bağlantısına tıklayın. Kayıtlı e-posta adresinize sıfırlama linki gönderilir.',
            },
            {
              q: "Randevu nasıl eklenir?",
              a: 'Ana ekrandaki "+" butonuna ya da takvimde bir saate uzun basarak yeni randevu ekleyebilirsiniz.',
            },
            {
              q: "Personel hesabı nasıl oluşturulur?",
              a: "Ayarlar → Personel Hesapları ekranından yeni personel davet edebilirsiniz.",
            },
            {
              q: "Verilerimi nasıl silebilirim?",
              a: "Hesabınızı ve tüm verilerinizi kalıcı olarak silmek için hesap silme sayfamızı ziyaret edin.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="bg-white border border-slate-200 rounded-xl p-5"
            >
              <h3 className="font-medium text-[#0F172A] mb-1">{item.q}</h3>
              <p className="text-sm text-slate-500">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-sm text-slate-500">
          Hesap silme talebi için{" "}
          <a href="/delete-account" className="text-[#2563EB] hover:underline">
            buraya tıklayın
          </a>
          .
        </div>
      </div>
    </main>
  );
}
