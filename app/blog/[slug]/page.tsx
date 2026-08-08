import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type BaiViet = {
  tieuDe: string;
  noiDung: string;
  anh: any;
};

async function getBaiViet(slug: string): Promise<BaiViet> {
  return client.fetch(
    `*[_type == "baiViet" && slug.current == $slug][0]{tieuDe, noiDung, anh}`,
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
      {bv.anh && (
        <img
          src={urlFor(bv.anh).width(900).url()}
          alt={bv.tieuDe}
          className="w-full rounded-lg mb-6"
        />
      )}
      <div className="text-gray-700 whitespace-pre-line leading-relaxed">
        {bv.noiDung}
      </div>
    </main>
  );
}
