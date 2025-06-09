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
      <div className="absolute inset-0 -z-10 bg-[url('/background.webp')] bg-cover bg-center opacity-20"></div>
      <div className="max-w-5xl mx-auto">
      <section className="bg-gradient-to-r from-blue-100 to-green-100 rounded-xl shadow mb-10 p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Laboratório de Soluções Ambientais</h1>
          <p className="text-lg text-gray-700 mb-4">
            Bem-vindo ao site oficial do LASA! Aqui você encontra informações sobre nossos projetos, pesquisas, equipe e novidades do laboratório.
          </p>
          <ul className="list-disc pl-5 text-gray-600 mb-4">
            <li>Projetos em sustentabilidade</li>
            <li>Desenvolvimento de pesquisas</li>
            <li>Eventos, publicações e muito mais</li>
          </ul>
          <Link href="/sobre" className="inline-block mt-2 px-6 py-2 bg-blue-900 text-white rounded-lg font-semibold shadow hover:bg-blue-900/75 transition">
            Saiba mais sobre o LASA
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/lasa.svg"
            alt="Laboratório"
            width={350}
            height={220}
          />
        </div>
      </section>

      {latestPost && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Última publicação do blog</h2>
          <Link href={`/posts/${latestPost.slug.current}`} className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden">
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
                <h3 className="text-xl font-semibold mb-2">{latestPost.title}</h3>
                {latestPost.publishedAt && (
                  <p className="text-sm text-gray-500 mb-2">
                    {latestPost.publishedAt.slice(0, 10).split("-").reverse().join("/")}
                  </p>
                )}
                <p className="text-gray-700">{latestPost.description || "Acesse para ler mais..."}</p>
              </div>
            </div>
          </Link>
        </section>
      )}

      {otherPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Outras publicações</h2>
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
                    <h3 className="font-semibold text-md mb-1">{post.title}</h3>
                    {post.publishedAt && (
                      <p className="text-xs text-gray-500">
                        {post.publishedAt.slice(0, 10).split("-").reverse().join("/")}
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