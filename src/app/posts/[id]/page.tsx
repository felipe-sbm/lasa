import { getPostById } from "@/lib/blogger";
import Image from "next/image";
import FacebookComments from "@/components/FacebookComments";

type PageProps = {
  params: { id: string };
};

export default async function PostPage(props: PageProps) {
  const params = await props.params;
  const { id } = params;
  const post = await getPostById(id);

  if (!post) return <div className="text-lasa">Post não encontrado</div>;

  return (
    <article className="max-w-7xl mx-auto px-4 py-8 bg-yellow-50">
      <h1 className="text-3xl font-bold mb-4 title-lasa">{post.title}</h1>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.content || "" }}
      />
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Sobre o Autor</h2>
        <div className="flex items-center space-x-4">
          <Image
            src={
              post.author?.image?.startsWith("//")
                ? `https:${post.author.image}`
                : post.author?.image || "https://via.placeholder.com/150"
            }
            alt={post.author?.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">{post.author?.name}</p>
            <p className="text-sm text-gray-500">{post.published}</p>
          </div>
        </div>
        <div className="mt-8">
          <FacebookComments postId={post.id} />
        </div>
      </div>
    </article>
  );
}
