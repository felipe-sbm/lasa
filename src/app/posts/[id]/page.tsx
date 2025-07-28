import { getPostById } from "@/lib/blogger";
import Image from "next/image";
import FacebookCommentsSimple from "@/components/FacebookCommentsSimple";

type PageProps = {
  params: { id: string };
};

export default async function PostPage(props: PageProps) {
  const params = await props.params;
  const { id } = params;
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
        <div className="mt-8">
          <FacebookCommentsSimple postId={post.id} />
        </div>
      </div>
    </article>
  );
}
