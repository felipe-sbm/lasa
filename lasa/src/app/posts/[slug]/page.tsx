import { createClient } from "@sanity/client";
import { PortableText } from "@portabletext/react";

const client = createClient({
  projectId: "4fvlsrij",
  dataset: "production",
  apiVersion: "2023-06-05",
  useCdn: true,
});

async function getPostBySlug(slug: string) {
  return client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug });
}

type PageProps = {
  params: { slug: string }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = params;

  const post = await getPostBySlug(slug);

  if (!post) return <div>Post não encontrado</div>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <PortableText value={post.body} />
    </article>
  );
}