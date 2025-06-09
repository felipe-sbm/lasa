import { getPosts } from "@/lib/api";
import Image from "next/image";

export default async function HomePage() {
  const posts = await getPosts();

  type Post = {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt?: string;
    mainImage?: { asset: { url: string } };
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Blog do Laboratório</h1>
      <div className="overflow-x-auto">
        <div className="flex gap-6 pb-4">
          {posts.map((post: Post) => (
            <a
              key={post._id}
              href={`/posts/${post.slug.current}`}
              className="min-w-[300px] max-w-xs bg-white rounded-lg shadow hover:shadow-lg transition flex-shrink-0"
            >
              <div className="h-48 w-full bg-gray-100 rounded-t-lg overflow-hidden flex items-center justify-center">
                {post.mainImage?.asset?.url ? (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-gray-400">Sem imagem</span>
                )}
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
                {post.publishedAt && (
                  <p className="text-sm text-gray-500">
                    {post.publishedAt.slice(0, 10).split("-").reverse().join("/")}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}