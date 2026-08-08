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
      <main className="bg-neutral-950 text-neutral-100 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="text-neutral-400">Không tìm thấy bài viết.</p>
          <a
            href="/blog"
            className="inline-block mt-4 text-amber-400 hover:text-amber-300 transition"
          >
            ← Về trang Blog
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <a
          href="/blog"
          className="inline-block mb-8 text-sm text-neutral-400 hover:text-amber-400 transition"
        >
          ← Về trang Blog
        </a>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
          {bv.tieuDe}
        </h1>

        {bv.anh && (
          <img
            src={urlFor(bv.anh).width(900).url()}
            alt={bv.tieuDe}
            className="w-full rounded-2xl mb-10 border border-neutral-800"
          />
        )}

        <div className="text-neutral-300 whitespace-pre-line leading-relaxed text-lg">
          {bv.noiDung}
        </div>

        {/* CTA cuối bài */}
        <div className="mt-14 pt-10 border-t border-neutral-800 text-center">
          <p className="text-neutral-300 mb-5">
            Muốn chăm sóc xe của bạn đúng cách?
          </p>
          <a
            href="/lien-he"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-neutral-950 px-8 py-3.5 rounded-lg font-bold transition shadow-lg shadow-amber-500/20"
          >
            Đặt lịch tư vấn
          </a>
        </div>
      </article>
    </main>
  );
}
