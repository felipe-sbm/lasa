import { getPosts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const posts = await getPosts();

  type Post = {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt?: string;
    mainImage?: { asset: { url: string } };
    description?: string;
  };

  const [latestPost, ...otherPosts] = posts;

  return (
    <main className="relative p-6 min-h-screen">
       <section>
          <div className="mx-auto pb-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="bg-lime-700 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="flex items-center justify-center h-full min-h-[300px]">
                  <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    </h2>

                    <p className="hidden text-white/90 sm:mt-4 sm:block">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                      egestas tempus tellus etiam sed. Quam a scelerisque amet
                      ullamcorper eu enim et fermentum, augue. Aliquet amet
                      volutpat quisque ut interdum tincidunt duis.
                    </p>

                    <div className="mt-4 md:mt-8">
                      <Link
                        href="/posts"
                        className="inline-block border border-white bg-white px-12 py-3 text-sm font-medium text-lime-700 transition hover:bg-transparent hover:text-white focus:ring-3 focus:ring-lime-500 focus:outline-hidden focus:bg-transparent focus:text-white"
                      >
                        Ver publicações
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                <Image
                  alt="Folhas de árvores"
                  src="https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="h-40 w-full object-cover sm:h-56 md:h-full"
                  height={600}
                  width={400}
                />

                <Image
                  alt="Uma floresta densa"
                  src="https://images.pexels.com/photos/19289108/pexels-photo-19289108/free-photo-of-close-up-of-capybaras-lying-on-the-grass.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="h-40 w-full object-cover sm:h-56 md:h-full"
                  height={600}
                  width={400}
                />
              </div>
            </div>
          </div>
        </section>
      <div className="max-w-5xl mx-auto">

        {latestPost && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">
              Última publicação do blog
            </h2>
            <Link
              href={`/posts/${latestPost.slug.current}`}
              className="block bg-white border border-gray-200 shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              <div className="md:flex">
                {latestPost.mainImage?.asset?.url && (
                  <div className="md:w-1/3 h-56 relative">
                    <Image
                      src={latestPost.mainImage.asset.url}
                      alt={latestPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {latestPost.title}
                  </h3>
                  {latestPost.publishedAt && (
                    <p className="text-sm text-gray-500 mb-2">
                      {latestPost.publishedAt
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("/")}
                    </p>
                  )}
                  <p className="text-gray-700">
                    {latestPost.description || "Acesse para ler mais..."}
                  </p>
                </div>
              </div>
            </Link>
          </section>
        )}

        {otherPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">
              Outras publicações
            </h2>
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-6">
                {otherPosts.map((post: Post) => (
                  <Link
                    key={post._id}
                    href={`/posts/${post.slug.current}`}
                    className="min-w-[260px] max-w-xs bg-white rounded-lg shadow hover:shadow-lg transition flex-shrink-0"
                  >
                    <div className="h-40 w-full bg-gray-100 rounded-t-lg overflow-hidden flex items-center justify-center">
                      {post.mainImage?.asset?.url ? (
                        <Image
                          src={post.mainImage.asset.url}
                          alt={post.title}
                          width={260}
                          height={160}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <span className="text-gray-400">Sem imagem</span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-md mb-1">
                        {post.title}
                      </h3>
                      {post.publishedAt && (
                        <p className="text-xs text-gray-500">
                          {post.publishedAt
                            .slice(0, 10)
                            .split("-")
                            .reverse()
                            .join("/")}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
