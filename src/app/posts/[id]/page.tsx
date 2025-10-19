import { getPostById } from "@/lib/blogger";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<unknown>;
};

export default async function PostPage(props: PageProps) {
  const params = await props.params;
  // Validação runtime: garantir que params seja um objeto com id string
  if (!params || typeof params !== "object") {
    notFound();
  }

  const maybeId = (params as Record<string, unknown>)['id'];
  if (!maybeId || typeof maybeId !== "string") {
    notFound();
  }

  const id = maybeId as string;
  const post = await getPostById(id);

  if (!post) return <div className="text-lasa">Post não encontrado</div>;

  return (
    <article className="max-w-7xl mx-auto px-4 py-10 bg-white border border-gray-200 rounded-none shadow-sm">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">{post.title}</h1>
      <div
        className="prose prose-lg max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: post.content || "" }}
      />
      <div className="mt-10 border-t border-gray-200 pt-8">
        <h2 className="text-lg font-semibold mb-3 text-gray-800">Sobre o Autor</h2>
        <div className="flex items-center space-x-4">
          <Image
            src={
              post.author?.image?.startsWith("//")
                ? `https:${post.author.image}`
                : post.author?.image || "https://via.placeholder.com/150"
            }
            alt={post.author?.name}
            width={48}
            height={48}
            className="rounded-none border border-gray-200"
          />
          <div>
            <p className="font-semibold text-gray-900">{post.author?.name}</p>
            <p className="text-xs text-gray-500">{post.published}</p>
          </div>
        </div>
        {/* comentários removidos para página minimalista */}
      </div>
    </article>
  );
}
