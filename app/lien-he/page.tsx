export default function LienHe() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Liên Hệ & Đặt Lịch</h1>
        <p className="text-slate-300 mb-8">
          Gọi ngay để được tư vấn và đặt lịch chăm sóc xe.
        </p>
        <div className="space-y-3 text-lg">
          <p>
            📞 Hotline:{" "}
            <span className="text-blue-400 font-semibold">0900 000 000</span>
          </p>
          <p>📍 Địa chỉ: 123 Đường ABC, Quận XYZ</p>
          <p>🕐 Giờ mở cửa: 8h00 - 18h00 hằng ngày</p>
        </div>
      </section>
    </main>
  );
}
