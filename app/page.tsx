export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-blue-400 font-semibold tracking-widest mb-4">
          CHĂM SÓC XE CHUYÊN NGHIỆP
        </p>
        <h1 className="text-5xl font-bold mb-6">Detailing Center</h1>
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
          Phủ ceramic, dán PPF, đánh bóng, vệ sinh nội thất. Trả lại vẻ đẹp như
          mới cho chiếc xe của bạn.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full font-semibold transition"
        >
          Đặt lịch ngay
        </a>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Phủ Ceramic</h3>
          <p className="text-slate-400">
            Bảo vệ sơn, chống xước, bóng bền lâu.
          </p>
        </div>
        <div className="bg-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Dán PPF</h3>
          <p className="text-slate-400">
            Lớp phim bảo vệ trong suốt, chống va quẹt.
          </p>
        </div>
        <div className="bg-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Đánh Bóng</h3>
          <p className="text-slate-400">
            Xóa xước dăm, phục hồi độ bóng gương.
          </p>
        </div>
      </section>
    </main>
  );
}
