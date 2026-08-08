import { client } from "@/sanity/lib/client";

type BaiViet = {
  tieuDe: string;
  noiDung: string;
};

async function getBaiViet(slug: string): Promise<BaiViet> {
  return client.fetch(
    `*[_type == "baiViet" && slug.current == $slug][0]{tieuDe, noiDung}`,
    { slug },
  );
}

export default async function ChiTietPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const bv = await getBaiViet(slug);

  if (!bv) {
    return (
      <main className="max-w-4xl mx-auto p-8">Không tìm thấy bài viết.</main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">{bv.tieuDe}</h1>
      <div className="text-gray-700 whitespace-pre-line leading-relaxed">
        {bv.noiDung}
      </div>
    </main>
  );
}
