import { getPosts } from "@/lib/blogger";
import Link from "next/link";
import Image from "next/image";

type Post = {
  id: string;
  title: string;
  mainImage?: {
    asset?: {
      url?: string;
    };
  };
  publishedAt?: string;
  slug: {
    current: string;
  };
  description?: string;
};

export default async function BlogPage() {
  const posts: Post[] = await getPosts();

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 title-lasa">Blog LASA</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Post) => (
          <article
            key={post.id}
            className="relative overflow-hidden shadow-sm transition hover:shadow-lg bg-white"
          >
            <Image
              alt={post.title}
              src={post.mainImage?.asset?.url || "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?_gl=1*1efvakc*_ga*MTQxMzUzNTM0NC4xNzUwMTkyMTcy*_ga_8JE65Q40S6*czE3NTAxOTIxNzEkbzEkZzEkdDE3NTAxOTIyNDkkajQ0JGwwJGgw"}
              className="absolute inset-0 h-full w-full object-cover"
              width={400}
              height={250}
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

                <Link href={`/posts/${post.id}`}>
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