import { client } from "@/sanity/lib/client";

async function getDichVu() {
  return client.fetch(`*[_type == "dichVu"]{ten, gia, moTa}`);
}

function formatGia(gia: any) {
  if (typeof gia === "number") return gia.toLocaleString("vi-VN") + "đ";
  return gia;
}

export default async function Home() {
  const dichVuList = await getDichVu();

  return (
    <main className="bg-neutral-950 text-neutral-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1605164599901-db7f68c4b1a5?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/80 to-neutral-950" />
        {/* Lằn sáng phản quang chéo — signature */}
        <div className="absolute -inset-x-1/4 top-1/3 h-40 rotate-[-8deg] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent blur-2xl" />

        <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
          <p className="text-amber-400 font-semibold tracking-[0.3em] text-sm mb-5">
            CHĂM SÓC XE CHUYÊN NGHIỆP
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Trả lại vẻ đẹp
            <br />
            <span className="text-amber-400">như mới</span> cho xe của bạn
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Phủ ceramic, dán PPF, đánh bóng, vệ sinh nội thất — bằng kỹ thuật và
            vật liệu cao cấp.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/lien-he"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-neutral-950 px-8 py-4 rounded-lg font-bold transition shadow-lg shadow-amber-500/20"
            >
              Đặt lịch ngay
            </a>
            <a
              href="/bang-gia"
              className="inline-block border border-neutral-600 hover:border-amber-400 px-8 py-4 rounded-lg font-semibold transition"
            >
              Xem bảng giá
            </a>
          </div>
        </div>
      </section>

      {/* SỐ LIỆU TIN TƯỞNG */}
      <section className="border-y border-neutral-800 bg-neutral-900/50">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["500+", "Xe đã chăm sóc"],
            ["5 năm", "Kinh nghiệm"],
            ["100%", "Vật liệu chính hãng"],
            ["4.9★", "Khách hài lòng"],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">
                {num}
              </p>
              <p className="text-neutral-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DỊCH VỤ */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-amber-400 font-semibold tracking-widest text-sm mb-3">
            DỊCH VỤ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Giải pháp chăm sóc toàn diện
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dichVuList.map((dv: any) => (
            <div
              key={dv.ten}
              className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="h-44 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1200&auto=format&fit=crop')",
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition">
                  {dv.ten}
                </h3>
                <p className="text-amber-400 font-semibold mb-3">
                  {formatGia(dv.gia)}
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {dv.moTa}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VÌ SAO CHỌN */}
      <section className="border-t border-neutral-800 bg-neutral-900/50">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-amber-400 font-semibold tracking-widest text-sm mb-3">
              CAM KẾT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Vì sao khách chọn chúng tôi
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              [
                "Kỹ thuật viên tay nghề cao",
                "Đội ngũ được đào tạo bài bản, tỉ mỉ trong từng chi tiết.",
              ],
              [
                "Vật liệu cao cấp chính hãng",
                "Chỉ dùng sản phẩm ceramic, PPF từ thương hiệu uy tín.",
              ],
              [
                "Bảo hành minh bạch",
                "Chính sách rõ ràng, cam kết chất lượng sau thi công.",
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4">
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CUỐI */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Sẵn sàng làm mới chiếc xe của bạn?
        </h2>
        <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
          Đặt lịch ngay hôm nay để nhận tư vấn miễn phí từ đội ngũ chuyên gia.
        </p>
        <a
          href="/lien-he"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-neutral-950 px-10 py-4 rounded-lg font-bold transition shadow-lg shadow-amber-500/20"
        >
          Đặt lịch ngay
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6 py-10 text-center text-neutral-500 text-sm">
          <p className="font-bold text-neutral-300 mb-2">Detailing Center</p>
          <p>Chăm sóc xe chuyên nghiệp · Phủ ceramic · PPF · Đánh bóng</p>
        </div>
      </footer>
    </main>
  );
}
