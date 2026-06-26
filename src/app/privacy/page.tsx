import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — Ajendo",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Gizlilik Politikası</h1>
        <p className="text-sm text-slate-500 mb-10">Son güncelleme: Haziran 2026</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">1. Giriş</h2>
            <p>
              Ajendo ("biz", "uygulama") olarak kullanıcılarımızın gizliliğini ciddiye alırız.
              Bu politika, Ajendo mobil uygulaması aracılığıyla hangi verileri topladığımızı,
              bu verileri nasıl kullandığımızı ve koruduğumuzu açıklamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">2. Topladığımız Veriler</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Hesap bilgileri:</strong> Kayıt sırasında girdiğiniz ad, e-posta adresi
                ve işletme adı.
              </li>
              <li>
                <strong>İşletme verileri:</strong> Randevular, müşteri bilgileri, personel
                kayıtları ve hizmet tanımları — yalnızca siz girip yönetirsiniz.
              </li>
              <li>
                <strong>Kullanım verileri:</strong> Uygulamanın nasıl kullanıldığına dair
                anonim istatistikler (hata raporları dahil).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">3. Verilerin Kullanımı</h2>
            <p>Topladığımız veriler yalnızca şu amaçlarla kullanılır:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Uygulamanın çalıştırılması ve hesabınızın yönetilmesi</li>
              <li>Teknik sorunların tespiti ve giderilmesi</li>
              <li>Müşteri desteği sağlanması</li>
            </ul>
            <p className="mt-3">
              Verileriniz hiçbir şekilde üçüncü taraflara satılmaz, kiralanmaz veya
              reklam amaçlı kullanılmaz.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">4. Veri Güvenliği</h2>
            <p>
              Verileriniz Supabase altyapısında şifrelenmiş olarak saklanır. Satır
              düzeyinde güvenlik (Row Level Security) ile her işletmenin verileri
              yalnızca o işletmenin yetkili kullanıcıları tarafından erişilebilir.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">5. Üçüncü Taraf Hizmetler</h2>
            <p>
              Uygulama; kimlik doğrulama ve veri depolama için{" "}
              <strong>Supabase</strong> altyapısını kullanmaktadır. Supabase'in
              kendi gizlilik politikası{" "}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563EB] hover:underline"
              >
                supabase.com/privacy
              </a>{" "}
              adresinde mevcuttur.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">6. Haklarınız</h2>
            <p>
              Kişisel verilerinize erişme, düzeltme veya silme hakkına sahipsiniz.
              Hesabınızı ve tüm verilerinizi silmek için{" "}
              <a href="/delete-account" className="text-[#2563EB] hover:underline">
                hesap silme sayfasını
              </a>{" "}
              ziyaret edin veya{" "}
              <a
                href="mailto:support@ajendo.app"
                className="text-[#2563EB] hover:underline"
              >
                support@ajendo.app
              </a>{" "}
              adresine e-posta gönderin.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">7. İletişim</h2>
            <p>
              Gizlilik politikamızla ilgili sorularınız için:{" "}
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
