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
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Blog Chăm Sóc Xe</h1>
      <div className="grid gap-4">
        {baiViets.map((bv) => (
          <Link
            key={bv._id}
            href={`/blog/${bv.slug.current}`}
            className="border rounded-lg overflow-hidden hover:bg-gray-50 block"
          >
            {bv.anh && (
              <img
                src={urlFor(bv.anh).width(800).height(300).url()}
                alt={bv.tieuDe}
                className="w-full h-48 object-cover"
              />
            )}
            <h2 className="text-xl font-semibold text-blue-600 p-6">
              {bv.tieuDe}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
