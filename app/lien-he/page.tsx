import { client } from "@/sanity/lib/client";
import LeadForm from "@/app/components/LeadForm";

type ThongTin = {
  hotline: string;
  diaChi: string;
  gioMoCua: string;
  email: string;
};

async function getThongTin(): Promise<ThongTin> {
  return client.fetch(
    `*[_type == "thongTinChung"][0]{hotline, diaChi, gioMoCua, email}`,
  );
}

export default async function LienHePage() {
  const tt = await getThongTin();

  // Bỏ Hotline khỏi card (đã có nút gọi riêng bên dưới) → tránh trùng, cân bố cục
  const items = [
    { label: "Địa chỉ", value: tt?.diaChi, icon: "📍" },
    { label: "Giờ mở cửa", value: tt?.gioMoCua, icon: "🕐" },
    { label: "Email", value: tt?.email, icon: "✉" },
  ];

  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-20">
        {/* Tiêu đề */}
        <div className="text-center mb-14">
          <p className="text-amber-400 font-semibold tracking-widest text-sm mb-3">
            LIÊN HỆ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Đặt lịch &amp; tư vấn
          </h1>
          <p className="text-neutral-400 text-sm">
            Để lại thông tin hoặc liên hệ trực tiếp — chúng tôi sẽ phản hồi sớm
            nhất
          </p>
        </div>

        {/* 2 cột: form + thông tin */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Cột trái: Form */}
          <div>
            <LeadForm />
          </div>

          {/* Cột phải: Thông tin trung tâm — giãn đều cao bằng cột trái */}
          <div className="flex flex-col gap-4 h-full">
            {items.map((it) => (
              <div
                key={it.label}
                className="flex-1 bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-center hover:border-amber-400/50 transition"
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    {it.icon}
                  </div>
                  <span className="text-neutral-400 text-sm">{it.label}</span>
                </div>
                <p className="text-neutral-100 font-semibold break-words pl-12">
                  {it.value}
                </p>
              </div>
            ))}

            {/* Gọi nhanh — dùng hotline từ Sanity */}
            {tt?.hotline && (
              <a
                href={`tel:${tt.hotline.replace(/\s/g, "")}`}
                className="text-center bg-amber-500 hover:bg-amber-400 text-neutral-950 px-6 py-4 rounded-lg font-bold transition shadow-lg shadow-amber-500/20"
              >
                Gọi ngay {tt.hotline}
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
