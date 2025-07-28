const BLOG_ID = process.env.BLOGGER_BLOG_ID;
const API_KEY = process.env.BLOGGER_API_KEY;

export async function getPosts() {
  if (!BLOG_ID || !API_KEY) {
    throw new Error("BLOGGER_BLOG_ID ou BLOGGER_API_KEY não definidos nas variáveis de ambiente.");
  }

  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar posts do Blogger");
  }

  const data = await res.json();

  interface Post {
    id: string;
    title: string;
    url: string;
    published?: string;
    content?: string;
    images?: { url: string }[];
    description?: string;
    author?: {
      displayName: string;
      image?: { url: string };
    };
  }

  return (data.items || []).map((item: Post) => {
    const imgMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
    const imageUrl = imgMatch ? imgMatch[1] : null;

    const description = item.content
      ? item.content.replace(/<[^>]+>/g, "").slice(0, 120)
      : "";

    return {
      id: item.id,
      title: item.title,
      url: item.url,
      published: item.published,
      content: item.content,
      images: imageUrl ? [{ url: imageUrl }] : [],
      description,
      author: {
        name: item.author?.displayName || "Autor desconhecido",
        image: item.author?.image?.url || "https://via.placeholder.com/150",
      },
    };
  });
}