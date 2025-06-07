import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '4fvlsrij',
  dataset: 'production',
  apiVersion: '2023-06-05',
  useCdn: true,
})

export async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc)`)
}
