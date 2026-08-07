export default function BangGia() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Bảng Giá Dịch Vụ
        </h1>
        <div className="space-y-4">
          <div className="flex justify-between bg-slate-800 rounded-xl p-5">
            <span>Phủ Ceramic thân xe</span>
            <span className="text-blue-400 font-semibold">6.000.000đ</span>
          </div>
          <div className="flex justify-between bg-slate-800 rounded-xl p-5">
            <span>Dán PPF toàn xe</span>
            <span className="text-blue-400 font-semibold">45.000.000đ</span>
          </div>
          <div className="flex justify-between bg-slate-800 rounded-xl p-5">
            <span>Đánh bóng phục hồi sơn</span>
            <span className="text-blue-400 font-semibold">2.500.000đ</span>
          </div>
        </div>
      </section>
    </main>
  );
}
