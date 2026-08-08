import { client } from "@/sanity/lib/client";

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

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Liên Hệ</h1>
      <div className="space-y-4 text-lg">
        <p>
          <strong>Hotline:</strong> {tt?.hotline}
        </p>
        <p>
          <strong>Địa chỉ:</strong> {tt?.diaChi}
        </p>
        <p>
          <strong>Giờ mở cửa:</strong> {tt?.gioMoCua}
        </p>
        <p>
          <strong>Email:</strong> {tt?.email}
        </p>
      </div>
    </main>
  );
}
