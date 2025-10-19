const BLOG_ID = process.env.BLOGGER_BLOG_ID;
const API_KEY = process.env.BLOGGER_API_KEY;

export async function getPostById(id: string) {
  if (!BLOG_ID || !API_KEY) {
    throw new Error(
      "BLOGGER_BLOG_ID ou BLOGGER_API_KEY não definidos nas variáveis de ambiente."
    );
  }

  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${id}?key=${API_KEY}`
  );

  if (!res.ok) {
    return null;
  }

  const item = await res.json();

  const imgMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
  const imageUrl = imgMatch ? imgMatch[1] : null;

  // Gerar descrição a partir do conteúdo do post (plaintext)
  let description = "";
  const raw = item.content || item.title || "";
  if (raw) {
    const plainText = raw.replace(/<[^>]+>/g, "").trim().slice(0, 160);
    if (plainText.length === 0) {
      description = "";
    } else if (/[.!?]$/.test(plainText) || plainText.length < 160) {
      description = plainText;
    } else {
      description = `${plainText.replace(/\s+$/,'')}...`;
    }
  }

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
}
