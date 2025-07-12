import { getPosts } from "@/lib/bloggerPosts";
import Link from "next/link";
import Image from "next/image";

type Post = {
  id: string;
  title: string;
  images?: { url: string }[];
  published?: string;
  description?: string;
};

export default async function BlogPage() {
  const posts: Post[] = await getPosts();

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Blog do LASA</h1>
      <p className="mb-4 text-gray-600 mb-8">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Post) => (
          <article
            key={post.id}
            className="overflow-hidden shadow-sm transition hover:shadow-lg bg-white rounded flex flex-col"
          >
            <Image
              alt={post.title}
              src={
                post.images?.[0]?.url ||
                "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg"
              }
              className="w-full h-48 object-cover"
              width={400}
              height={192}
            />
            <div className="bg-gray-100 p-4 flex-1 flex flex-col">
              <time
                dateTime={post.published?.slice(0, 10) || ""}
                className="block text-xs text-gray-500 mb-1"
              >
                {post.published
                  ? new Date(post.published).toLocaleDateString("pt-BR")
                  : "Sem data"}
              </time>

              <Link href={`/posts/${post.id}`}>
                <h3 className="text-lg font-semibold text-gray-900 hover:underline mb-2">
                  {post.title}
                </h3>
              </Link>

              <p className="text-sm text-gray-700 line-clamp-3 flex-1">
                {post.description ||
                  "Sem descrição disponível para esta publicação."}
              </p>
            </div>
          </article>
        ))}
      </div>
      <hr className="mt-8" />
    </main>
  );
}
