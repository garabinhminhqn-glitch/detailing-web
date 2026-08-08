import { client } from "@/sanity/lib/client";
import Link from "next/link";

type BaiViet = {
  _id: string;
  tieuDe: string;
  slug: { current: string };
};

async function getBaiViet(): Promise<BaiViet[]> {
  return client.fetch(`*[_type == "baiViet"]{_id, tieuDe, slug}`);
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
            className="border rounded-lg p-6 hover:bg-gray-50 block"
          >
            <h2 className="text-xl font-semibold text-blue-600">{bv.tieuDe}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
