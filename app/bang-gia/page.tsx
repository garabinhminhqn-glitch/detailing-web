import { client } from "@/sanity/lib/client";

type DichVu = {
  _id: string;
  ten: string;
  gia: number;
  moTa: string;
};

async function getDichVu(): Promise<DichVu[]> {
  return client.fetch(`*[_type == "dichVu"]{_id, ten, gia, moTa}`);
}

export default async function BangGiaPage() {
  const dichVus = await getDichVu();

  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-20">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <p className="text-amber-400 font-semibold tracking-widest text-sm mb-3">
            BẢNG GIÁ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Dịch vụ chăm sóc xe
          </h1>
          <p className="text-neutral-400 text-sm">
            Giá tham khảo — liên hệ để báo giá chính xác theo dòng xe
          </p>
        </div>

        {/* Danh sách dịch vụ */}
        <div className="flex flex-col gap-4">
          {dichVus.map((dv) => (
            <div
              key={dv._id}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex justify-between items-center gap-4 hover:border-amber-400/50 transition"
            >
              <div className="flex-1">
                <h2 className="text-lg font-bold mb-1">{dv.ten}</h2>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {dv.moTa}
                </p>
              </div>
              <span className="text-amber-400 text-lg font-bold whitespace-nowrap">
                {dv.gia.toLocaleString("vi-VN")}đ
              </span>
            </div>
          ))}
        </div>

        {/* CTA cuối */}
        <div className="mt-10 text-center bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <p className="text-neutral-200 mb-5">
            Cần báo giá chính xác cho xe của bạn?
          </p>
          <a
            href="/lien-he"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-neutral-950 px-8 py-3.5 rounded-lg font-bold transition shadow-lg shadow-amber-500/20"
          >
            Đặt lịch tư vấn
          </a>
        </div>
      </section>
    </main>
  );
}
