import { client } from "@/sanity/lib/client";

// Kiểu dữ liệu 1 dịch vụ
type DichVu = {
  _id: string;
  ten: string;
  gia: number;
  moTa: string;
};

// Lấy dữ liệu từ Sanity (GROQ)
async function getDichVu(): Promise<DichVu[]> {
  return client.fetch(`*[_type == "dichVu"]{_id, ten, gia, moTa}`);
}

export default async function BangGiaPage() {
  const dichVus = await getDichVu();

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Bảng Giá Dịch Vụ</h1>
      <div className="grid gap-4">
        {dichVus.map((dv) => (
          <div
            key={dv._id}
            className="border rounded-lg p-6 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{dv.ten}</h2>
              <p className="text-gray-600">{dv.moTa}</p>
            </div>
            <span className="text-lg font-bold text-blue-600">
              {dv.gia.toLocaleString("vi-VN")}đ
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
