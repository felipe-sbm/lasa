import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '4fvlsrij',
  dataset: 'production',
  useCdn: true
})