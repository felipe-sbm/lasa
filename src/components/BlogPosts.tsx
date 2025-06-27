import Image from "next/image";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  url: string;
  published?: string;
  content?: string;
  images?: { url: string }[];
  description?: string;
};

interface BlogPostsProps {
  posts: Post[];
}

export default function BlogPosts({ posts }: BlogPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold mb-1 title-lasa">
        Confira nossas últimas publicações do blog
      </h2>
      <p className="mb-4">
        Todas elas e muitas outras estão disponíveis no nosso blog, acesse a
        página pelo cabeçálho.
      </p>
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-6">
          {posts.map((post, idx) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className={
                idx === 0
                  ? "min-w-[10rem] max-w-xl bg-white card transition flex-shrink-0"
                  : "min-w-[8rem] max-w-md bg-white card transition flex-shrink-0"
              }
            >
              <div
                className={
                  idx === 0
                    ? "h-56 w-full bg-gray-100 overflow-hidden flex items-center justify-center"
                    : "h-56 w-full bg-gray-100 overflow-hidden flex items-center justify-center"
                }
              >
                {post.images?.[0]?.url ? (
                  <Image
                    src={post.images[0].url}
                    alt={post.title}
                    width={idx === 0 ? 340 : 260}
                    height={idx === 0 ? 200 : 260}
                    className="object-cover w-full h-full m-2"
                  />
                ) : (
                  <span className="text-gray-400">Publicação sem imagem</span>
                )}
              </div>
              <div className={idx === 0 ? "p-6" : "p-4"}>
                <h3
                  className={
                    idx === 0
                      ? "text-xl font-semibold mb-2"
                      : "font-semibold text-md mb-1 dm-serif-display"
                  }
                >
                  {post.title}
                </h3>
                {post.published && (
                  <p
                    className={
                      idx === 0
                        ? "text-sm text-gray-500 mb-2"
                        : "text-xs text-gray-500"
                    }
                  >
                    {post.published.slice(0, 10).split("-").reverse().join("/")}
                  </p>
                )}
                <p
                  className={
                    idx === 0
                      ? "text-gray-700 mb-4"
                      : "text-gray-600 text-sm"
                  }
                >
                  {post.description || "Descrição não disponível."}
                </p>
                <p className="text underline">Acesse →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
