import { createClient } from '@sanity/client'
import { PortableText } from '@portabletext/react'

const client = createClient({
  projectId: '4fvlsrij',
  dataset: 'production',
  apiVersion: '2023-06-05',
  useCdn: true,
})

async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  )
}

interface Props {
  params: { slug: string }
}

export default async function Page(props: Props) {
  const { params } = props
  const post = await getPostBySlug(params.slug)

  if (!post) return <div>Post não encontrado</div>

  return (
    <article>
      <h1>{post.title}</h1>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <p>Publicado em: {new Date(post.publishedAt).toLocaleDateString()}</p>
        <p>Autor: {post.author?.name}</p>
      </div>
      <PortableText value={post.body} />
    </article>
  )
}