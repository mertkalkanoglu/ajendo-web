import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Koşulları — Ajendo",
};

export default function TermsPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Kullanım Koşulları</h1>
        <p className="text-sm text-slate-500 mb-10">Son güncelleme: Haziran 2026</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">1. Kapsam</h2>
            <p>
              Bu koşullar, Ajendo mobil uygulamasını kullanan gerçek veya tüzel
              kişiler için geçerlidir. Uygulamayı kullanmaya başlamanız, bu
              koşulları kabul ettiğiniz anlamına gelir.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">2. Hizmet Tanımı</h2>
            <p>
              Ajendo, randevu tabanlı küçük işletmelerin randevu, müşteri, personel
              ve kaynak yönetimini yapabilmesi için tasarlanmış bir mobil
              uygulamadır. Uygulama yalnızca işletme sahibi ve yetkilendirilmiş
              personel tarafından kullanılmak üzere tasarlanmıştır.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">3. Hesap Güvenliği</h2>
            <p>
              Hesabınızın güvenliğinden siz sorumlusunuz. Şifrenizi kimseyle
              paylaşmayın. Hesabınızda yetkisiz bir erişim fark ederseniz derhal
              bizimle iletişime geçin.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">4. Kabul Edilemez Kullanım</h2>
            <p>Aşağıdaki kullanımlar yasaktır:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Yasadışı amaçlarla uygulamanın kullanımı</li>
              <li>Başkalarının verilerine izinsiz erişim girişimi</li>
              <li>Uygulamanın altyapısına zarar vermeye yönelik eylemler</li>
              <li>Gerçek dışı işletme bilgisi girilmesi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">5. Hizmet Kesintileri</h2>
            <p>
              Bakım, teknik sorunlar veya mücbir sebepler nedeniyle hizmet geçici
              olarak kesilebilir. Bu durumlar için herhangi bir tazminat yükümlülüğümüz
              bulunmamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibited text-[#0F172A] mb-3">6. Fikri Mülkiyet</h2>
            <p>
              Uygulama ve içeriği Ajendo'ya aittir. Kullanıcılar uygulamayı yalnızca
              kendi işletmeleri için kullanabilir; kopyalayamaz, dağıtamaz veya
              ticari amaçla başkalarına sunamazlar.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">7. Değişiklikler</h2>
            <p>
              Bu koşullar zaman zaman güncellenebilir. Önemli değişiklikler
              uygulama içi bildirim veya e-posta yoluyla duyurulur.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">8. İletişim</h2>
            <p>
              Sorularınız için:{" "}
              <a
                href="mailto:support@ajendo.app"
                className="text-[#2563EB] hover:underline"
              >
                support@ajendo.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
