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

  let description = "";
  if (description) {
    const plainText = description.replace(/<[^>]+>/g, "").slice(0, 120);
    if (
      plainText.endsWith(".") ||
      plainText.endsWith("!") ||
      plainText.endsWith("?") ||
      plainText.endsWith(" ")
    ) {
      description = `"${plainText}"`;
    } else {
      description = `"${plainText}..."`;
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
