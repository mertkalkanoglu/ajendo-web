import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hesap Silme — Ajendo",
};

export default function DeleteAccountPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Hesap Silme</h1>
        <p className="text-slate-500 mb-10">
          Ajendo hesabınızı ve tüm verilerinizi kalıcı olarak silmek için
          aşağıdaki adımları izleyin.
        </p>

        {/* Yöntem 1: Uygulama içi */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
            Yöntem 1: Uygulama üzerinden
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 text-sm">
            <li>Ajendo uygulamasını açın ve hesabınıza giriş yapın.</li>
            <li>Alt menüden <strong>Ayarlar</strong> sekmesine gidin.</li>
            <li><strong>Hesap</strong> bölümünde <strong>Çıkış Yap</strong> seçeneğini bulun.</li>
            <li>
              Hesabınızı ve verilerinizi silmek için{" "}
              <strong>destek@ajendo.app</strong> adresine e-posta gönderin.
            </li>
          </ol>
        </div>

        {/* Yöntem 2: E-posta */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
            Yöntem 2: E-posta ile talep
          </h2>
          <p className="text-sm text-slate-500 mb-4">
            Aşağıdaki adrese e-posta göndererek hesap silme talebinde bulunabilirsiniz.
            E-postanıza kayıtlı olduğunuz e-posta adresini ve "Hesabımı Sil" ifadesini
            eklemeniz yeterlidir.
          </p>
          <a
            href="mailto:destek@ajendo.app?subject=Hesabımı Sil&body=Merhaba, hesabımı ve tüm verilerimi kalıcı olarak silmek istiyorum. Kayıtlı e-posta adresim: "
            className="inline-flex items-center gap-2 bg-[#2563EB] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            E-posta Gönder
          </a>
        </div>

        {/* Uyarı */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-red-700 mb-1">
            ⚠️ Önemli Uyarı
          </h3>
          <p className="text-sm text-red-600">
            Hesap silme işlemi geri alınamaz. Hesabınız silindiğinde tüm
            randevular, müşteri kayıtları, personel bilgileri ve işletme
            ayarlarınız kalıcı olarak silinir. Bu işlem en fazla{" "}
            <strong>30 gün</strong> içinde tamamlanır.
          </p>
        </div>
      </div>
    </main>
  );
}
