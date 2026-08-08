import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

type BaiViet = {
  _id: string;
  tieuDe: string;
  slug: { current: string };
  anh: any;
};

async function getBaiViet(): Promise<BaiViet[]> {
  return client.fetch(`*[_type == "baiViet"]{_id, tieuDe, slug, anh}`);
}

export default async function BlogPage() {
  const baiViets = await getBaiViet();

  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-20">
        {/* Tiêu đề */}
        <div className="text-center mb-14">
          <p className="text-amber-400 font-semibold tracking-widest text-sm mb-3">
            BLOG
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Kiến thức chăm sóc xe
          </h1>
          <p className="text-neutral-400 text-sm">
            Mẹo, hướng dẫn và kinh nghiệm từ đội ngũ chuyên gia
          </p>
        </div>

        {/* Lưới bài viết */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {baiViets.map((bv) => (
            <Link
              key={bv._id}
              href={`/blog/${bv.slug.current}`}
              className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300 block"
            >
              {bv.anh && (
                <img
                  src={urlFor(bv.anh).width(800).height(400).url()}
                  alt={bv.tieuDe}
                  className="w-full h-52 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-lg font-bold group-hover:text-amber-400 transition leading-snug">
                  {bv.tieuDe}
                </h2>
                <span className="inline-block mt-3 text-sm text-amber-400">
                  Đọc tiếp →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
