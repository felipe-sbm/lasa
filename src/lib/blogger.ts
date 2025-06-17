const BLOG_ID = process.env.BLOGGER_BLOG_ID;
const API_KEY = process.env.BLOGGER_API_KEY;

export async function getPosts() {
  if (!BLOG_ID || !API_KEY) {
    throw new Error('BLOGGER_BLOG_ID ou BLOGGER_API_KEY não definidos nas variáveis de ambiente.');
  }
  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error('Erro ao buscar posts do Blogger');
  }
  const data = await res.json();
  return data.items || [];
}