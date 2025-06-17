import { getPosts } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-blue-900">Blog do LASA</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <article
            key={post._id}
            className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white"
          >
            <Image
              alt={post.title}
              src={post.mainImage?.asset?.url || "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <time
                  dateTime={post.publishedAt?.slice(0, 10) || ""}
                  className="block text-xs text-white/90"
                >
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString("pt-BR")
                    : "Sem data"}
                </time>

                <Link href={`/posts/${post.slug.current}`}>
                  <h3 className="mt-0.5 text-lg text-white hover:underline">{post.title}</h3>
                </Link>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  {post.description ||
                    "Sem descrição disponível para esta publicação."}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}